(function ($) {
  Drupal.behaviors.emediaRmitAccordion = {
    attach: function (context) {
      var accordion = $('.rmit-accordion');
      if (accordion.length > 0) {
        accordion.find('.collapse').on('shown.bs.collapse', function() {
          var self = $(this);
          if (self.find('#emedia-video-wrapper').length > 0) {
            self.find('video').trigger('resize');
          }
        });
        var showAllContainer = $('<div class="accordion-show-all" aria-hidden="true">');
        var showAllLink = $('<a href="#" class="remove-outline"><div class="accordion-label">Expand all sections</div><div class="icon accordion-icon icon-circle"><div class="accordion-show-all-arrow"></div></div></a>');
        showAllLink.click(function (e) {
          var label = $(this).find('.accordion-label');
          var icon = $(this).find('div.accordion-icon div');

          if (label && icon) {
            if (icon.hasClass('open')) {
              label.html('Expand all sections');
              accordion.find('.in').collapse('hide');
            } else {
              label.html('Collapse all sections');
              accordion.find('.collapse').collapse('show');
            }

            icon.toggleClass('open');
          }

          e.preventDefault();
        });

        showAllContainer.append(showAllLink);
        accordion.prepend(showAllContainer);

        accordion.find('.collapse.in').each(function () {
          $(this).parent().find('.accordion-toggle').addClass('open');
        });
        accordion.find('.collapse').on('shown.bs.collapse', function () {
          $(this).parent().find('.accordion-toggle').addClass('open');
        }).on('hidden.bs.collapse', function () {
          $(this).parent().find('.accordion-toggle').removeClass('open');
        });
      }
    }
  }
}(jQuery));