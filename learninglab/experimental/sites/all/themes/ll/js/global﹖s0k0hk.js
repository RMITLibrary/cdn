(function ($, window, document) {
  Drupal.behaviors.llGlobal = {
    attach: function (context, settings) {
      /* outline the global nav dropdown on tab */
      var last_key_press = null;

      $(document).keydown(function (e) {
        var code = e.keyCode || e.which;
        last_key_press = code;
        //if (code == '9') {
        $('#navbar-left .dropdown > a > span').addClass('span-outline');
        //}
      });

      /* do not outline the global nav dropdown on click */
      $('#navbar-left .dropdown').click(function (e) {
        $('#navbar-left .dropdown > a > span.span-outline').removeClass('span-outline');
      });

      $('#navbar-left.nav > li.dropdown').mouseover(function () {
        $(this).addClass('open');
      });

      $('#navbar-left.nav > li.dropdown').mouseout(function () {
        $(this).removeClass('open');
      });


      function setCurrentGlobalLink(linkClass) {
        var ahtml = $('#navbar-left .' + linkClass + ' .js-location').html();

        $('#navbar-left .' + linkClass + ' a span:first-child').removeClass('grunticon-arw-right-red-20');
        $('#navbar-left .' + linkClass + ' a span:first-child').addClass('grunticon-arw-right-gryAD-20');
        $('#navbar-left .js-current-location').html(ahtml);
        $('#navbar-left .' + linkClass).addClass('current');
      }

      if (window.location.host.indexOf('rmit.edu.au') >= 0) {
        setCurrentGlobalLink('au');
      } else if (window.location.host.indexOf('rmit.eu') >= 0) {
        setCurrentGlobalLink('eu');
      } else if (window.location.host.indexOf('rmit.edu.vn') >= 0) {
        setCurrentGlobalLink('vn');
      } else {
        setCurrentGlobalLink('global');
      }

      var link = $('.js-rhs-nav .current').text();

      $('.js-rhs-nav .siblings > li > a').each(function () {
        if ($.trim($(this).text()) == $.trim(link)) {
          $(this).parent().addClass('current');
        }
      });

      $('.js-rhs-nav .rhs-link-wrapper.current > a').each(function () {
        var temp = $(this).html();
        $(this).parent().prepend('<span>' + temp + '</span>');
        $(this).parent().removeClass('offsetContent');
        $(this).remove();
      });

      $('.js-rhs-nav .siblings li a').parent().removeClass('offsetContent');

      /* general navigation */
      $('.general-navigation a').each(function () {
        if (typeof  $(this).text() == 'string' && typeof $('.active-navigation').text() == 'string') {
          if ($.trim($(this).text().toLowerCase()) == $.trim($('.active-navigation').text().toLowerCase())) {
            $(this).parent().addClass('active');
          }
        }
      });

      /* primary navigation */
      $('.primary-navigation a').each(function () {
        if (typeof  $(this).text() == 'string' && typeof $('.active-navigation').text() == 'string') {
          if ($.trim($(this).text().toLowerCase()) == $.trim($('.active-navigation').text().toLowerCase())) {
            $(this).parent().addClass('active');
          }
        }
      });

      $('.multilevel-linkul-0 > li').click(function (e) {
        window.location = $(this).children('a').attr('href');
      });

      $('.js-rhs-nav .rhs-link-wrapper').click(function (e) {
        if (!$(this).hasClass('current')) {
          window.location = $(this).children('a').attr('href');
        }
      });
    }
  }
}(jQuery, window, document));