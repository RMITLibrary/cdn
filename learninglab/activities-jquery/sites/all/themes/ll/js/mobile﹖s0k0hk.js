(function ($) {
  Drupal.behaviors.llMobile = {
    attach: function (context, settings) {
      var page = $('.body-headroom');
      var headerInner = $('#header-inner');
      var searchForm = $('#search-region');

      var searchWrapper = $('.m-search-menu');
      var searchContent = searchWrapper.find('.m-search-menu-content');

      $('.search-icon').click(showSiteSearchMenu);
      searchWrapper.find('.m-search-menu-bg').on("click", hideSiteSearchMenu);
      searchWrapper.find('.btn-close').on("click", hideSiteSearchMenu);

      /**
       * @namespace FullScreen
       * @author T-Rock
       */
      function freezePageContent() {
        // Find the scroll position and store the element which varies by browser
        var scrollElement = "window";
        var scrollTop = $(window).scrollTop();

        if (scrollTop == 0 || scrollTop == null) {
          scrollElement = "html";
          scrollTop = $("html").scrollTop();
        }

        if (scrollTop == 0 || scrollTop == null) {
          scrollElement = "body";
          scrollTop = $("body").scrollTop();
        }

        // Store data (original values)
        $("html")
          .data("scroll-element", scrollElement)
          .data("scroll-top", scrollTop);

        // Add styles to prevent scrolling
        //var styleRules = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;margin-top:" + scrollTop + "px";
        var styleRules = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden";
        $("#page").attr("style", styleRules);
      }

      /**
       * Restores the original state of the element with class 'page-content-wrapper'.
       *
       * @memberOf fullscreen
       */
      function unfreezePageContent() {
        // Remove styles that prevent scrolling
        $("#page").removeAttr("style");

        // Restore scroll position
        var $html = $("html");
        if ($html.data("scroll-element") == 'window') {
          $(window).scrollTop($html.data("scroll-top"));
        }
        else {
          $($html.data("scroll-element")).scrollTop($html.data("scroll-top"));
        }

        // Clean up data
        $html.removeData("scroll-element");
        $html.removeData("scroll-top");
      }

      function requireSearchTerm() {
        // Trim whitespace from input
        var input = $("input:text", this);
        input.val(input.val().trim());

        // Test for non-zero length
        return input.val().length > 0;
      }

      // Prevent form submission if no search term has been entered
      $("form.b-require-search-term").on("submit", requireSearchTerm);

      // Site search
      function showSiteSearchMenu() {
        searchContent.append(searchForm);
        searchForm.show();
        searchWrapper.show();
        $(".m-search-menu input:text").focus();

        return false;
      }

      function hideSiteSearchMenu() {
        headerInner.append(searchForm);
        searchForm.hide();
        searchWrapper.hide();
        $(".m-search-menu input:text").blur();

        return false;
      }


      function show() {
        freezePageContent();
        $(".m-burger-menu").removeClass("m-burger-menu-collapse");

        setTimeout(function( ){
          $(".m-burger-menu").addClass("m-burger-menu-show");
        }, 250);

        $(".b-trigger-burger-menu").trigger('burgerMenuShow');

        return false;
      }

      function hide() {
        var $burgerMenu = $(".m-burger-menu");
        if ($burgerMenu.hasClass("m-burger-menu-show")) {
          $burgerMenu.removeClass("m-burger-menu-show");

          var hideComplete = function() {
            unfreezePageContent();
            $(".m-burger-menu").addClass("m-burger-menu-collapse");
            $(".m-burger-menu .expandable").removeClass("expanded");
            $(".m-burger-menu .expandable div").removeClass("transition-in transition-out").addClass("collapsed hide");
          };

          try {
            // When the transition ends
            $(".m-burger-menu").one($.support.transition.end, hideComplete);
          } catch (err) {
            // Transitions not supported
            hideComplete();
          }
        }

        return false;
      }

      $('.b-trigger-burger-menu').on("click", show);
      $(".m-burger-menu .m-burger-menu-bg").on("click", hide);
      $(".m-burger-menu .m-burger-menu-close a").on("click", hide);

      $(".m-burger-menu").on("click", "a", function (e) {
        if ($(this).hasClass("b-trigger-applicant-overlay")) {
          // Hide menu
          hide();

          e.preventDefault();
        }
      });

      // If the children section represents one of the 'general navigation' links, replace the link with
      // the children section
      var $burgerMenuChildren = $(".m-burger-menu-children");
      if ($burgerMenuChildren.length) {
        var location = window.location;
        var url = location.origin + location.pathname + location.search;
        var $link = $(".m-burger-menu-content > ul > li > a").filter(function () {
          return this.href == url;
        });

        if ($link.length) {
          $link.parent().replaceWith($burgerMenuChildren.detach());
        }
      }

      $(".m-burger-menu .expandable > a").on("click", function (e) {
        var $parent = $(this).parent();
        var $container = $parent.children("div");

        if ($container.hasClass("collapsed")) {
          if (!$container.hasClass("transition-out")) {
            // Flag section as expanded
            $parent.addClass("expanded");

            // Flag transition, display, calc height, transition in
            $container
              .addClass("transition-in")
              .removeClass("hide")
              .each(function () {
                var $this = $(this);
                $this.css("height", $this.children().height())
              })
              //.css("height", $container.children().height())
              .removeClass("collapsed");

            // When transition ends, remove transition flag
            var transitionEnded = function () {
              $container.removeClass("transition-in");
            };

            try {
              $container.one($.support.transition.end, transitionEnded);
            } catch (err) {
              transitionEnded();
            }
          }
        } else {
          if (!$container.hasClass("transition-in")) {
            // Flag section as collapsed
            $parent.removeClass("expanded");

            // Flag transition, transition out
            $container.addClass("transition-out collapsed");

            // When transition ends, remove transition flag, remove from display
            var transitionEnded = function () {
              $container.removeClass("transition-out").addClass("hide");
            };

            try {
              $container.one($.support.transition.end, transitionEnded);
            } catch (err) {
              transitionEnded();
            }
          }
        }

        e.preventDefault();
      });
    }
  }
}(jQuery));
