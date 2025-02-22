<?php

/**
 * @file
 * Administration page callbacks for the metatag module.
 */

function _metatag_config_overview_indent($text, $instance) {
  $parents = metatag_config_get_parent_instances($instance);
  array_shift($parents);

  // Add indentation to the leading cell.
  if (!empty($parents)) {
    $prefix = array_fill(0, count($parents), '<div class="indent">');
    $suffix = array_fill(0, count($parents), '</div>');
    $text = implode('', $prefix) . $text . implode('', $suffix);
  }

  return $text;
}

function metatag_config_overview() {
  ctools_include('export');

  $metatags = metatag_get_info('tags');

  $configs = ctools_export_crud_load_all('metatag_config');
  uksort($configs, '_metatag_config_instance_sort');

  $rows = array();
  foreach ($configs as $config) {
    $row = array();

    // Style disabled configurations differently.
    if (!empty($config->disabled)) {
      $row['class'][] = 'disabled';
    }

    $details = '<div class="metatag-config-label collapsed"><a href="#" class="toggle-details">' . check_plain(metatag_config_instance_label($config->instance)) . '</a></div>';
    $details .= '<div class="metatag-config-details js-hide">';

    $inherits = array();
    $parents = metatag_config_get_parent_instances($config->instance);
    array_shift($parents);
    foreach (array_reverse($parents) as $parent) {
      if (!isset($configs[$parent])) {
        $rows[$parent] = array(
          _metatag_config_overview_indent('<div class="metatag-config-label">' . check_plain(metatag_config_instance_label($parent)) . '</div>', $parent),
          '',
        );
      }
      else {
        $inherits[$parent] = metatag_config_instance_label($parent);
        if (!empty($configs[$parent]->disabled)) {
          $inherits[$parent] .= ' ' . t('(disabled)');
        }
      }
    }

    // Show how this config inherits from its parents.
    if (!empty($inherits)) {
      $details .= '<div class="inheritance"><p>' . t('Inherits meta tags from: @parents', array('@parents' => implode(', ', $inherits))) . '</p></div>';
    }

    // Add a summary of the configuration's defaults.
    $summary = array();
    foreach ($config->config as $metatag => $data) {
      // Skip meta tags that were disabled.
      if (empty($metatags[$metatag])) {
        continue;
      }
      $summary[] = array(
        check_plain($metatags[$metatag]['label']) . ':',
        check_plain(metatag_get_value($metatag, $data, array('raw' => TRUE))),
      );
    }
    if (!empty($summary)) {
      $details .= theme('table', array(
        'rows' => $summary,
        'attributes' => array('class' => array('metatag-value-summary')),
      ));
    }
    else {
      $details .= '<p class="warning">No overridden default meta tags</p>';
      $row['class'][] = 'warning';
    }

    // Close the details div.
    $details .= '</div>';

    // Add indentation to the leading cell based on how many parents the config has.
    $details = _metatag_config_overview_indent($details, $config->instance);

    $row['data']['details'] = $details;

    $operations = array();
    if (metatag_config_access('disable', $config)) {
      $operations['edit'] = array(
        'title' => ($config->export_type & EXPORT_IN_DATABASE) ? t('Edit') : t('Override'),
        'href' => 'admin/config/search/metatags/config/' . $config->instance,
      );
    }
    if (metatag_config_access('enable', $config)) {
      $operations['enable'] = array(
        'title' => t('Enable'),
        'href' => 'admin/config/search/metatags/config/' . $config->instance . '/enable',
        'query' => array(
          'token' => drupal_get_token('enable-' . $config->instance),
        ) + drupal_get_destination(),
      );
    }
    if (metatag_config_access('disable', $config)) {
      $operations['disable'] = array(
        'title' => t('Disable'),
        'href' => 'admin/config/search/metatags/config/' . $config->instance . '/disable',
        'query' => array(
          'token' => drupal_get_token('disable-' . $config->instance),
        ) + drupal_get_destination(),
      );
    }
    if (metatag_config_access('revert', $config)) {
      $operations['revert'] = array(
        'title' => t('Revert'),
        'href' => 'admin/config/search/metatags/config/' . $config->instance . '/revert',
      );
    }
    if (metatag_config_access('delete', $config)) {
      $operations['delete'] = array(
        'title' => t('Delete'),
        'href' => 'admin/config/search/metatags/config/' . $config->instance . '/delete',
      );
    }
    $operations['export'] = array(
      'title' => t('Export'),
      'href' => 'admin/config/search/metatags/config/' . $config->instance . '/export',
    );
    if (module_exists('i18n_string') && !variable_get('metatag_i18n_disabled', FALSE)) {
      $operations['translate'] = array(
        'title' => t('Translate'),
        'href' => 'admin/config/search/metatags/config/' . $config->instance . '/translate',
      );
    }
    $row['data']['operations'] = array(
      'data' => array(
        '#theme' => 'links',
        '#links' => $operations,
        '#attributes' => array('class' => array('links', 'inline')),
      ),
    );

    $rows[$config->instance] = $row;
  }

  $build['config_table'] = array(
    '#theme' => 'table',
    '#header' => array(
      'type' => t('Type'),
      'operations' => t('Operations'),
    ),
    '#rows' => $rows,
    '#empty' => t('No meta tag defaults available yet.'),
    '#attributes' => array(
      'class' => array('metatag-config-overview'),
    ),
    '#attached' => array(
      'js' => array(
        drupal_get_path('module', 'metatag') . '/metatag.admin.js',
      ),
      'css' => array(
        drupal_get_path('module', 'metatag') . '/metatag.admin.css',
      ),
    ),
    '#suffix' => '<p>' . t('Any items marked "Unknown" are configurations in the system for entity types or bundles which have been disabled via the API or the <a href="@url">Settings page</a>; they will not be used.', array('@url' => url('admin/config/search/metatags/settings'))) . '</p>',
  );

  return $build;
}

/**
 * Build an FAPI #options array for the instance select field.
 */
function _metatag_config_instance_get_available_options() {
  $options = array();
  $instances = metatag_config_instance_info();

  foreach ($instances as $instance => $instance_info) {
    if (metatag_config_load($instance)) {
      continue;
    }
    $parents = metatag_config_get_parent_instances($instance, FALSE);
    array_shift($parents);
    if (!empty($parents)) {
      $parent = reset($parents);
      $parent_label = isset($instances[$parent]['label']) ? $instances[$parent]['label'] : t('Unknown');
      if (!isset($options[$parent_label])) {
        $options[$parent_label] = array();
        if (!metatag_config_load($parent)) {
          $options[$parent_label][$parent] = t('All');
        }
      }
      $options[$parent_label][$instance] = $instance_info['label'];
      unset($options[$parent]);
    }
    else {
      $options[$instance] = $instance_info['label'];
    }
  }

  return $options;
}

function metatag_config_add_form($form, &$form_state) {
  $form['instance'] = array(
    '#type' => 'select',
    '#title' => t('Type'),
    '#description' => t('Select the type of default meta tags you would like to add.'),
    '#options' => _metatag_config_instance_get_available_options(),
    '#required' => TRUE,
  );
  $form['config'] = array(
    '#type' => 'value',
    '#value' => array(),
  );

  $form['actions']['#type'] = 'actions';
  $form['actions']['save'] = array(
    '#type' => 'submit',
    '#value' => t('Add and configure'),
  );
  $form['actions']['cancel'] = array(
    '#type' => 'link',
    '#title' => t('Cancel'),
    '#href' => isset($_GET['destination']) ? $_GET['destination'] : 'admin/config/search/metatags',
  );

  return $form;
}

function metatag_config_add_form_submit($form, &$form_state) {
  form_state_values_clean($form_state);
  $config = (object) $form_state['values'];
  metatag_config_save($config);
  $form_state['redirect'] = 'admin/config/search/metatags/config/' . $config->instance;
}

function metatag_config_edit_form($form, &$form_state, $config) {
  $form['cid'] = array(
    '#type' => 'value',
    '#value' => !empty($config->cid) ? $config->cid : NULL,
  );
  $form['instance'] = array(
    '#type' => 'value',
    '#value' => $config->instance,
  );

  $contexts = explode(':', $config->instance);
  $options['context'] = $contexts[0];
  if ($contexts[0] != 'global') {
    // The context part of the instance may not map to an entity type, so allow
    // the token_get_entity_mapping() function to fallback to the provided type.
    if ($token_type = token_get_entity_mapping('entity', $contexts[0], TRUE)) {
      $options['token types'] = array($token_type);
    }
    else {
      $options['token types'] = array($contexts[0]);
    }
    // Trigger hook_metatag_token_types_alter().
    // Allow the defined tokens to be modified.
    drupal_alter('metatag_token_types', $options);
  }

  // Ensure that this configuration is properly compared to its parent 'default'
  // configuration values.
  if (count($contexts) > 1) {
    // If the config is something like 'node:article' or 'taxonomy_term:tags'
    // then the parent default config is 'node' or 'taxonomy_term'.
    $default_instance = $contexts;
    array_pop($default_instance);
    $default_instance = implode(':', $default_instance);
    $options['defaults'] = metatag_config_load_with_defaults($default_instance);
  }
  elseif ($contexts[0] != 'global') {
    // If the config is something like 'node' or 'taxonomy_term' then the
    // parent default config is 'global'.
    $options['defaults'] = metatag_config_load_with_defaults('global');
  }
  else {
    // If the config is 'global' than there are no parent defaults.
    $options['defaults'] = array();
  }

  metatag_metatags_form($form, $config->instance, $config->config, $options);
  $form['metatags']['#type'] = 'container';

  $form['actions']['#type'] = 'actions';
  $form['actions']['save'] = array(
    '#type' => 'submit',
    '#value' => t('Save'),
  );
  $form['actions']['cancel'] = array(
    '#type' => 'link',
    '#title' => t('Cancel'),
    '#href' => isset($_GET['destination']) ? $_GET['destination'] : 'admin/config/search/metatags',
  );

  $form['#submit'][] = 'metatag_config_edit_form_submit';
  return $form;
}

function metatag_config_edit_form_submit($form, &$form_state) {
  // Build the configuration object and save it.
  form_state_values_clean($form_state);
  $config = (object) $form_state['values'];
  // @todo Consider renaming the config field from 'config' to 'metatags'
  $config->config = $config->metatags[LANGUAGE_NONE];
  unset($config->metatags);
  metatag_config_save($config);

  $label = metatag_config_instance_label($config->instance);
  drupal_set_message(t('The meta tag defaults for @label have been saved.', array('@label' => $label)));

  $form_state['redirect'] = 'admin/config/search/metatags';
}

function metatag_config_enable($config) {
  if (!isset($_GET['token']) || !drupal_valid_token($_GET['token'], 'enable-' . $config->instance)) {
    return MENU_ACCESS_DENIED;
  }

  ctools_export_crud_enable('metatag_config', $config);

  $label = metatag_config_instance_label($config->instance);
  drupal_set_message(t('The meta tag defaults for @label have been enabled.', array('@label' => $label)));
  drupal_goto();
}

function metatag_config_disable($config) {
  if (!isset($_GET['token']) || !drupal_valid_token($_GET['token'], 'disable-' . $config->instance)) {
    return MENU_ACCESS_DENIED;
  }

  ctools_export_crud_disable('metatag_config', $config);

  $label = metatag_config_instance_label($config->instance);
  drupal_set_message(t('The meta tag defaults for @label have been disabled.', array('@label' => $label)));
  drupal_goto();
}

function metatag_config_delete_form($form, &$form_state, $config) {
  $form['cid'] = array('#type' => 'value', '#value' => $config->cid);
  $form['instance'] = array('#type' => 'value', '#value' => $config->instance);

  $label = metatag_config_instance_label($config->instance);
  $delete = metatag_config_access('delete', $config);
  $title = $delete ? t('Are you sure you want to delete the meta tag defaults for @label?', array('@label' => $label)) : t('Are you sure you want to revert the meta tag defaults for @label?', array('@label' => $label));

  return confirm_form(
    $form,
    $title,
    'admin/config/search/metatags',
    t('This action cannot be undone.')
  );
}

function metatag_config_delete_form_submit($form, &$form_state) {
  $config = metatag_config_load($form_state['values']['instance']);
  metatag_config_delete($config);

  $label = metatag_config_instance_label($config->instance);
  $delete = metatag_config_access('delete', $config);
  $title = $delete ? t('The meta tag defaults for @label have been deleted.', array('@label' => $label)) : t('The meta tag defaults for @label have been reverted.', array('@label' => $label));
  drupal_set_message($title);

  $form_state['redirect'] = 'admin/config/search/metatags';
}

function metatag_config_export_form($config) {
  ctools_include('export');
  return drupal_get_form('ctools_export_form', ctools_export_crud_export('metatag_config', $config), t('Export'));
}

/**
 * Form constructor to revert nodes to their default metatags.
 *
 * @see metatag_bulk_revert_form_submit()
 *
 * @ingroup forms
 */
function metatag_bulk_revert_form() {
  // Get the list of entity:bundle options.
  $options = array();
  foreach (entity_get_info() as $entity_type => $entity_info) {
    foreach (array_keys($entity_info['bundles']) as $bundle) {
      if (metatag_entity_supports_metatags($entity_type, $bundle)) {
        $options[$entity_type . ':' . $bundle] = $entity_info['label'] . ': ' . $entity_info['bundles'][$bundle]['label'];
      }
    }
  }

  $form['update'] = array(
    '#type' => 'checkboxes',
    '#required' => TRUE,
    '#title' => t('Select the entities to revert'),
    '#options' => $options,
    '#default_value' => array(),
    '#description' => t('All meta tags will be removed for all content of the selected entities.'),
  );

  $metatags = metatag_get_info();
  $options = array();
  foreach ($metatags['tags'] as $tag_name => $tag) {
    $options[$tag_name] = t('@group_label: @tag_label', array(
      '@group_label' => $metatags['groups'][$tag['group']]['label'],
      '@tag_label' => $tag['label'],
    ));
  }

  if (count($options) > 0) {
    $form['tags'] = array(
      '#type' => 'checkboxes',
      '#required' => FALSE,
      '#title' => t('Select the tags to revert'),
      '#description' => t('If you select any tags, only those tags will be reverted.'),
      '#options' => $options,
    );
  }

  $languages = language_list();
  $options = array(
    LANGUAGE_NONE => t('Language neutral'),
  );
  foreach ($languages as $language) {
    $options[$language->language] = $language->name;
  }

  $form['languages'] = array(
    '#type' => 'checkboxes',
    '#required' => FALSE,
    '#title' => t('Select the languages to revert'),
    '#description' => t('If you select any languages, only tags for those languages will be reverted.'),
    '#options' => $options,
  );

  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Revert'),
  );

  return $form;
}

/**
 * Form submit handler for metatag reset bulk revert form.
 *
 * @see metatag_batch_revert_form()
 * @see metatag_bulk_revert_batch_finished()
 */
function metatag_bulk_revert_form_submit($form, &$form_state) {
  $batch = array(
    'title' => t('Bulk updating metatags'),
    'operations' => array(),
    'finished' => 'metatag_bulk_revert_batch_finished',
    'file' => drupal_get_path('module', 'metatag') . '/metatag.admin.inc',
  );

  $tags = isset($form_state['values']['tags']) ? array_filter($form_state['values']['tags']) : array();
  $languages = isset($form_state['values']['languages']) ? array_filter($form_state['values']['languages']) : array();

  // Set a batch operation per entity:bundle.
  foreach (array_filter($form_state['values']['update']) as $option) {
    list($entity_type, $bundle) = explode(':', $option);
    $batch['operations'][] = array('metatag_bulk_revert_batch_operation', array($entity_type, $bundle, $tags, $languages));
  }

  batch_set($batch);
}

/**
 * Batch callback: delete custom metatags for selected bundles.
 */
function metatag_bulk_revert_batch_operation($entity_type, $bundle, $tags, $languages, &$context) {
  if (!isset($context['sandbox']['current'])) {
    $context['sandbox']['count'] = 0;
    $context['sandbox']['current'] = 0;
  }

  // Query the selected entity table.
  $entity_info = entity_get_info($entity_type);
  $query = new EntityFieldQuery();
  $query->entityCondition('entity_type', $entity_type)
    ->propertyCondition($entity_info['entity keys']['id'], $context['sandbox']['current'], '>')
    ->propertyOrderBy($entity_info['entity keys']['id']);
  if ($entity_type != 'user') {
    /**
     * Entities which do not define a bundle such as User fail returning no results.
     * @see https://www.drupal.org/node/1054168#comment-5266208
     */
    $query->entityCondition('bundle', $bundle);
  }
  // Get the total amount of entities to process.
  if (!isset($context['sandbox']['total'])) {
    $context['sandbox']['total'] = $query->count()->execute();
    $query->count = FALSE;

    // If there are no bundles to revert, stop immediately.
    if (!$context['sandbox']['total']) {
      $context['finished'] = 1;
      return;
    }
  }

  // Process 25 entities per iteration.
  $query->range(0, 25);
  $result = $query->execute();
  $entity_ids = !empty($result[$entity_type]) ? array_keys($result[$entity_type]) : array();
  foreach ($entity_ids as $entity_id) {
    $metatags = metatag_metatags_load($entity_type, $entity_id);
    if (!empty($metatags)) {
      $reset = FALSE;
      if (empty($tags)) {
        // All tags should be reset, so we just delete any records from the db.
        $query = db_delete('metatag')
          ->condition('entity_type', $entity_type)
          ->condition('entity_id', $entity_id);
        if (!empty($languages)) {
          $query->condition('language', $languages, 'IN');
        }
        $query->execute();
        metatag_metatags_cache_clear($entity_type, $entity_id);
        $reset = TRUE;
      }
      else {
        // Iterate over tags and unset those, that we want to reset.
        $needs_reset = FALSE;
        foreach ($metatags as $metatags_language => $metatags_tags) {
          if (empty($languages) || in_array($metatags_language, $languages)) {
            foreach ($metatags_tags as $metatags_tag => $metatags_value) {
              if (in_array($metatags_tag, $tags)) {
                unset($metatags[$metatags_language][$metatags_tag]);
                $needs_reset = TRUE;
              }
            }
          }
        }
        // Save modified metatags.
        if ($needs_reset) {
          // We don't have a revision id, so we'll get the active one.
          // Unfortunately, the only way of getting the active revision ID is to
          // first load the entity, and then extract the ID. This is a bit
          // performance intensive, but it seems to be the only way of doing it.
          $entities = entity_load($entity_type, array($entity_id));
          if (!empty($entities[$entity_id])) {
            // We only care about the revision_id.
            list(, $revision_id,) = entity_extract_ids($entity_type, $entities[$entity_id]);
          }
          metatag_metatags_save($entity_type, $entity_id, $revision_id, $metatags, $bundle);
          $reset = TRUE;
        }
      }
      if ($reset) {
        $context['results'][] = t('Reverted metatags for @bundle with id @id.', array(
          '@bundle' => $entity_type . ': ' . $bundle,
          '@id' => $entity_id,
        ));
      }
    }
  }

  $context['sandbox']['count'] += count($entity_ids);
  $context['sandbox']['current'] = max($entity_ids);

  if ($context['sandbox']['count'] != $context['sandbox']['total']) {
    $context['finished'] = $context['sandbox']['count'] / $context['sandbox']['total'];
  }
}

/**
 * Batch finished callback.
 */
function metatag_bulk_revert_batch_finished($success, $results, $operations) {
  if ($success) {
    if (!count($results)) {
      drupal_set_message(t('No metatags were reverted.'));
    }
    else {
      $message = theme('item_list', array('items' => $results));
      drupal_set_message($message);
    }
  }
  else {
    $error_operation = reset($operations);
    drupal_set_message(t('An error occurred while processing @operation with arguments : @args',
      array('@operation' => $error_operation[0], '@args' => print_r($error_operation[0], TRUE))));
  }
}

/**
 * Misc settings page.
 */
function metatag_admin_settings_form() {
  $form = array();

  $form['#attached'] = array(
    'js' => array(
      drupal_get_path('module', 'metatag') . '/metatag.admin.js',
    ),
    'css' => array(
      drupal_get_path('module', 'metatag') . '/metatag.admin.css',
    ),
  );

  $form['entities'] = array(
    '#type' => 'fieldset',
    '#title' => t('Master controls for all entities'),
    '#description' => t('By enabling and disabling items here, it is possible to control which entities (e.g. nodes, taxonomy terms) and bundles (e.g. content types, vocabularies) will have the meta tag form available on their respective edit pages. If an entity type is disabled it also disables it for <em>all</em> of that entity type\'s bundles.<br />Technical note: Entity types must not be configuration entities and must have view modes in order to be compatible.'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );

  foreach (entity_get_info() as $entity_type => $entity_info) {
    // Only show entities that are capable of using meta tags.
    if (metatag_entity_type_is_suitable($entity_type, $entity_info)) {
      $entity_enabled = metatag_entity_supports_metatags($entity_type);
      $form['entities']['metatag_enable_' . $entity_type] = array(
        '#type' => 'checkbox',
        '#title' => t($entity_info['label']),
        '#default_value' => $entity_enabled,
        // '#description' => t('Enable meta tags for all pages of this entity type.'),
      );

      // Some entities, e.g. User, (core) File, have a single bundle with the
      // same name as the entity, so only show the bundles list if there is
      // more than one of them and the bundle's name isn't the same as the
      // entity type's.
      if (!empty($entity_info['bundles'])) {
        foreach ($entity_info['bundles'] as $bundle_name => $bundle_info) {
          if (count($entity_info['bundles']) > 1 || $entity_type != $bundle_name) {
            // If the entity type was disabled, automatically enable the bundle.
            // This will have the effect that if the entity type is enabled in
            // the form then all of the bundles will then also be enabled. This
            // is safe to do because in the rest of the module the bundle will
            // be ignored if the entity is disabled.
            $form['entities']['metatag_enable_' . $entity_type . '__' . $bundle_name] = array(
              '#type' => 'checkbox',
              '#title' => t($bundle_info['label']),
              '#default_value' => !$entity_enabled || metatag_entity_supports_metatags($entity_type, $bundle_name),
              '#attributes' => array(
                // Add some theming that'll indent this bundle.
                'class' => array('metatag-bundle-checkbox'),
              ),
              '#states' => array(
                'visible' => array(
                  ':input[name="metatag_enable_' . $entity_type . '"]' => array('checked' => TRUE),
                ),
              ),
            );
          }
        }
      }
    }
  }

  $form['additional'] = array(
    '#type' => 'fieldset',
    '#title' => t('Additional settings'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );

  $form['additional']['metatag_pager_string'] = array(
    '#title' => t('Custom pager string'),
    '#type' => 'textfield',
    '#description' => t('When the current page includes a pager, e.g. the URL contains "?page=42", the [current-page:pager] token may be added to a meta tag to differentiate between two pages that would otherwise have the same meta tags. The value "PAGER" (must be in uppercase) will be replaced by the actual page count. Note: the pager will only output if the page number is 2 or above and the string "page=NUMBER" is in the URL.<br />For best use, it may be worthwhile to add the [current-page:pager] to the page title to the left of the site name, to the start of description tags, etc.'),
    '#default_value' => variable_get('metatag_pager_string', 'Page PAGER | '),
  );

  $form['additional']['metatag_summary_text_field'] = array(
    '#title' => t('Add summary tokens for regular text fields'),
    '#type' => 'checkbox',
    '#description' => t("By default Metatag's summary tokens are added to long text fields. Enabling this option will also add summary tokens for all plain text fields."),
    '#default_value' => variable_get('metatag_summary_text_field', FALSE),
  );
  $form['additional']['metatag_summary_length'] = array(
    '#title' => t('Length of summary'),
    '#type' => 'textfield',
    '#description' => t("How long each of the summary tokens will be after it is truncated."),
    '#default_value' => variable_get('metatag_summary_length', 200),
  );

  $form['i18n'] = array(
    '#type' => 'fieldset',
    '#title' => t('Internationalization options'),
    '#description' => t('Additional options are available when using the <a href="@url">Internationalization module</a>.', array('@url' => 'https://www.drupal.org/project/i18n')),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );

  $form['i18n']['metatag_i18n_disabled'] = array(
    '#title' => t('Disable i18n integration'),
    '#type' => 'checkbox',
    '#description' => t('If the i18n_string module is enabled but the site does not need to translate Metatag strings, the integration may be disabled to avoid a large volume of records being added to the translation system.'),
    '#default_value' => variable_get('metatag_i18n_disabled', FALSE),
    '#disabled' => !module_exists('i18n_string'),
  );

  $form['i18n']['metatag_i18n_translate_output'] = array(
    '#title' => t('Translate output'),
    '#type' => 'checkbox',
    '#description' => t('Optionally translate the final page output.'),
    '#default_value' => variable_get('metatag_i18n_translate_output', FALSE),
    '#disabled' => !module_exists('i18n_string'),
  );

  $form['i18n']['metatag_i18n_enable_watchdog'] = array(
    '#title' => t('Enable logging of translations to Watchdog'),
    '#type' => 'checkbox',
    '#description' => t('Optionally log to Watchdog any changes that happen.'),
    '#default_value' => variable_get('metatag_i18n_enable_watchdog', FALSE),
    '#disabled' => !module_exists('i18n_string'),
  );

  $form['advanced'] = array(
    '#type' => 'fieldset',
    '#title' => t('Advanced settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );

  $form['advanced']['metatag_load_all_pages'] = array(
    '#type' => 'checkbox',
    '#title' => t('Output meta tags even if only global settings apply'),
    '#description' => t('By default Metatag will load the global default values for all pages that do not have meta tags assigned via the normal entity display or via Metatag Context. This may be disabled so that meta tags will only be output on pages that specifically have meta tags configured for them.'),
    '#default_value' => variable_get('metatag_load_all_pages', TRUE),
  );

  $form['advanced']['metatag_tag_admin_pages'] = array(
    '#type' => 'checkbox',
    '#title' => t('Output meta tags on admin pages'),
    '#description' => t('By default meta tags will not be output on admin pages, but it may be beneficial for some sites to do so.'),
    '#default_value' => variable_get('metatag_tag_admin_pages', FALSE),
  );

  $form['advanced']['metatag_extended_permissions'] = array(
    '#type' => 'checkbox',
    '#title' => t('Advanced permissions'),
    '#description' => t('Optionally add a permission for each individual meta tag. This provides tremendous flexibility for the editorial process, at the expense of making the permissions configuration more tedious.'),
    '#default_value' => variable_get('metatag_extended_permissions', FALSE),
  );

  $form['advanced']['metatag_entity_no_lang_default'] = array(
    '#type' => 'checkbox',
    '#title' => t("Don't load entity's default language values if no languages match"),
    '#description' => t("On a site with multiple languages it is possible for an entity to not have meta tag values assigned for the language of the current page. By default the meta tags for an entity's default language value will be used in this scenario, with the canonical URL pointing to the URL. This option may be disabled, i.e. to only load meta tags for languages that specifically have them assigned, otherwise using defaults."),
    '#default_value' => variable_get('metatag_entity_no_lang_default', FALSE),
  );

  $form['advanced']['metatag_load_defaults'] = array(
    '#type' => 'checkbox',
    '#title' => t("Load the module's default configurations"),
    '#description' => t("Control whether the module's default configuration is used. This will not affect configurations exported via Features."),
    '#default_value' => variable_get('metatag_load_defaults', TRUE),
  );

  $form['advanced']['metatag_cache_output'] = array(
    '#type' => 'checkbox',
    '#title' => t('Cache meta tag output'),
    '#description' => t('Enabling this will cause all meta tag output to be cached for each page, which may aid with site performance in some circumstances. Should not be used if there are paths which include user-specific meta tags for the <em>current user</em>, they may lead to information about the user being accidentally leaked; this problem does not affect the "user/[uid]" pages. It may also cause the {cache_metatag} cache table to grow to be extremely large in certain circumstances.'),
    '#default_value' => variable_get('metatag_cache_output', FALSE),
  );

  $form['advanced']['metatag_leave_core_tags'] = array(
    '#type' => 'checkbox',
    '#title' => t("Leave core's meta tags as-is"),
     '#default_value' => variable_get('metatag_leave_core_tags', FALSE),
  );

  $form['advanced']['metatag_page_region'] = array(
    '#type' => 'select',
    '#title' => t("Page region to use"),
    '#description' => t("By default Metatag uses the 'Content' region to trigger output of the meta tags. Some themes do not have this region, so it can be necessary to pick another."),
    '#options' => system_region_list(variable_get('theme_default', 'bartik')),
    '#default_value' => variable_get('metatag_page_region', 'content'),
  );

  $form['advanced']['metatag_token_sanitize'] = array(
    '#type' => 'checkbox',
    '#title' => t('Sanitize content during token replacement'),
    '#description' => t('If checked, will ensure that metatag value output is encoded and text filters are processed.'),
    '#default_value' => variable_get('metatag_token_sanitize', FALSE),
  );

  $form['lengths'] = array(
    '#type' => 'fieldset',
    '#title' => t('Maximum meta tag lengths'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#description' => t('Many meta tags may be shortened to a certain length. To reset to the default, leave the field blank. To keep the entire meta tag, regardless of length, set the value to zero (0). Note: the meta tag will be shortened <em>after</em> the tokens have been replaced, not before.'),
  );
  $info = metatag_get_info();
  $groups = $info['groups'];
  $tags = $info['tags'];
  foreach ($tags as $tag => $info) {
    if (isset($info['maxlength'])) {
      $default = $info['maxlength'];
      $var_name = 'metatag_maxlength_' . $tag;
      $title = $info['label'];
      if (!empty($info['group']) && isset($groups[$info['group']])) {
        $title = $groups[$info['group']]['label'] . ': ' . $title;
      }
      $form['lengths'][$var_name] = array(
        '#type' => 'textfield',
        '#title' => $title,
        '#default_value' => intval(variable_get($var_name, $default)),
      );
    }
  }

  // Extra submission logic.
  $form['#submit'][] = 'metatag_admin_settings_form_submit';

  return system_settings_form($form);
}

/**
 * Form API submission callback for metatag_admin_settings_form().
 */
function metatag_admin_settings_form_submit($form, &$form_state) {
  // Only keep maxlength values that are numeric. Any empty, non-zero values
  // will be removed.
  foreach ($form_state['values'] as $name => $value) {
    if (strpos($name, 'metatag_maxlength_') !== FALSE) {
      if ((empty($value) && $value !== 0 && $value !== '0') || !is_numeric($value)) {
        unset($form_state['values'][$name]);
        variable_del($name);
      }
      else {
        $form_state['values'][$name] = intval($value);
      }
    }
  }

  // If the token option was disabled, clear the token cache too.
  $old_var = (bool) variable_get('metatag_summary_text_field', FALSE);
  $new_var = !empty($form_state['values']['metatag_summary_text_field']);
  if ($old_var != $new_var) {
    token_clear_cache();
  }

  // Make sure the metatag_summary_length value is a number.
  if (!empty($form_state['values']['metatag_summary_length'])) {
    $form_state['values']['metatag_summary_length'] = intval($form_state['values']['metatag_summary_length']);
  }

  // Clear the Metatag caches so any settings changes will be available.
  cache_clear_all('*', 'cache_metatag', TRUE);
  drupal_set_message(t('The Metatag cache has been cleared so all meta tags can be reloaded.'));
}
