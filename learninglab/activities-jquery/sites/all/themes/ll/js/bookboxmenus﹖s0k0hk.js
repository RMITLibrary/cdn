(function ($) {
  Drupal.behaviors.llBookBoxMenus = {
    attach: function (context, settings) {
      var desktop_size = 940;
      var window_size = $(window).width();

      if (window_size > desktop_size) {
        $('.learning_lab_book_in_block_body_box').fadeOut('slow');
      }
      else {
        $('.learning_lab_book_in_block_body_box').fadeIn('slow');
      }

      //carousel setup
      $('ul[class="slides"] li').each(function () {

        text_over_image_state = $(this).find('.views-field-field-text-over-image').text();
        title = $(this).find('.flex-caption').html();
        read_more = $(this).find('.views-field-view-node').html();

        $(this).find('.views-field-body').find('.flex-caption').detach();
        $(this).find('.views-field-body').find('.views-field-field-text-over-image').detach();
        $(this).find('.views-field-body').find('.views-field-view-node').detach();
        $(this).find('.views-field-body').find('.views-field-body').detach();
        body = $(this).find('.views-field-body').html();

        $(this).find('.views-field-field-text-over-image').detach();
        $(this).find('.flex-caption').detach();
        $(this).find('.views-field-view-node').detach();

        $(this).find('.views-field-body').detach();

        if (text_over_image_state == 1) {
          content = '<div class="body-content body-content-over-image">';
        }
        else {
          content = '<div class="body-content body-content-on-side">';
        }

        content += '<div class="title-field">' + title + '</div>';
        content += '<div class="body-field">' + body + '</div>';
        content += '<div class="link-field">' + read_more + '</div>';
        content += '</div>';

        $(this).append(content);
      });

      //================== EVENT HANDLERS =========================

      var blocks = $('.learning_lab_book_in_block');
      blocks.each(function () {
        var self = $(this);
        var bodyBox = self.find('.learning_lab_book_in_block_body_box');
        var links = self.find('.learning_lab_book_in_block_links');

        self.hover(
          function () {
            if ($(window).width() > desktop_size) {
              bodyBox.fadeIn('slow');
              links.fadeIn('slow');
            }
          },
          function () {
            if ($(window).width() > desktop_size) {
              bodyBox.fadeOut('slow');
              links.fadeOut('slow');
            }
          }
        );
      });

      $(window).resize(function () {
        var w = $(window).width();

        if (w < desktop_size) {
          $('.learning_lab_book_in_block_body_box').fadeIn('slow');
        }
        else if (w > desktop_size) {
          $('.learning_lab_book_in_block_body_box').fadeOut('slow');
        }

        window_size = w;
      });
    }
  }
}(jQuery));

