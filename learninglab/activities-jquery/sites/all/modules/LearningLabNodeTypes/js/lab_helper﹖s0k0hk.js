(function ($) {
  var $verticalPadding = 30;

  $.fn.extend({
    cboxInsert: function ($data) {
      var $data = $($data.data);
      var $self = this;
      return $self.each(function () {
        var $element = $('<div>').addClass('clearfix').append($data);
        $self.empty();
        $self.append($element);
        // let rendering catch up
        setTimeout(resizer($element, $self), 0);
      });
    },
  });

  function resizer($element, $parent) {
    var $oldHeight = $parent.height();
    var $height = $element.height() + 1;
    var $newInnerHeight = $height + $verticalPadding;
    // For safety. If we haven't calculated a valid height, do nothing.
    if ($newInnerHeight > $oldHeight) {
      var $newBodyHeight = $newInnerHeight + $verticalPadding;
      var $bodyHeight = $('body').height();

      if ($bodyHeight < $newBodyHeight) {
        $('body').css('min-height', $newBodyHeight);
      }

      $.colorbox.resize({innerHeight: $newInnerHeight});
    }
  }

  var ht = function (e) {
    var refresh = function($container) {
      var resetHeights = function (selector, context) {
        context.find(selector).css('height', 'auto');
      };

      var equalize = function($container) {
        if(typeof $container == undefined || $container.length == 0 || $container.hasClass('equalize-heights-processed')) return;

        var cell = $container.data('equalize-heights-cell');
        var minHeight = $container.data('equalize-heights-min-height') || 0;

        // The cell field is required for this module to run
        // Back out if not set
        //
        if(typeof cell === undefined) return;
        var cellSelector = cell;

        // Reset first
        resetHeights(cellSelector, $container);

        // If there are nested grids, trigger their height adjustments
        // first so the outer grid is all good
        //
        cellSelector = cellSelector + ':visible';

        var rowY = undefined;
        var currentCellY = 0;
        var rowCells = [];
        var currentTallest;

        function processRow(lastRow) {
          if(rowCells.length == 0) return;

          // If we've gone down to a single column, reset to either auto, or its original
          // value for height
          //
          if(rowCells.length == 1) {
            rowCells[0].css(
              'height',
              rowCells[0].attr('data-equalize-heights-original-height')
            );

            if(lastRow) {
              rowCells[0].addClass('last-row');
            } else {
              rowCells[0].removeClass('last-row');
            }
          } else {
            if(currentTallest < minHeight) {
              currentTallest = minHeight;
            }
            for (var i = 0; i < rowCells.length; i++) {
              rowCells[i].css('height', currentTallest);
              if(lastRow) {
                rowCells[i].addClass('last-row');
              } else {
                rowCells[i].removeClass('last-row');
              }
            };
          }
        }

        var cells = $container.find(cellSelector);

        // Account for non-sequential elements in selector
        cells.sort(function(a, b) {
          var $a = $(a);
          var $b = $(b);

          if ($a.offset().top < $b.offset().top) {
            return -1;
          }
          if ($a.offset().top > $b.offset().top) {
            return 1;
          }

          return 0;
        });

        cells.each(function(index, cell) {
          var $cell = $(cell);
          $cell.hide();
          var cellBottom = $cell.css('bottom');
          $cell.show();


          if(cellBottom == '0px') {
            currentCellY = Math.floor($cell.offset().top + $cell.outerHeight());
          } else {
            currentCellY = Math.floor($cell.offset().top);
          }

          if(currentCellY != rowY || typeof rowY === '') {

            if(index != 0) {
              // Starting a new row, process the last row
              processRow(false);
            }

            // Reset the array
            rowCells = [];
            if(cellBottom == '0px') {
              currentCellY = Math.floor($cell.offset().top + $cell.outerHeight());
            } else {
              currentCellY = Math.floor($cell.offset().top);
            }
            rowY = currentCellY;
            currentTallest = $cell.outerHeight();
            rowCells.push($cell);

          } else {
            // Existing row, new cell
            rowCells.push($cell);
            currentTallest = Math.max(currentTallest, $cell.outerHeight());

          }
        });

        // Process the last row
        processRow(true);

        $container.addClass('equalize-heights-processed');
      }

      // Store original heights before being touched by this script
      var cellSelector = $container.data('equalize-heights-cell');

      $container.find(cellSelector).each(function(index, cell) {
        // Only set the original height once, even if refresh is manually called from outside of
        // the module
        if(typeof $(cell).attr('data-equalize-heights-original-height') === 'undefined') {
          if($(cell).get(0).style.height != "") {
            $(cell).attr(
              'data-equalize-heights-original-height',
              $(cell).get(0).style.height
            );
          } else {
            $(cell).attr('data-equalize-heights-original-height', 'auto');
          }
        }
      });

      equalize($container);
    }
    var lg = window.innerWidth > 939;
    var n = 350, r = 100, i = "", s = null, o = null, u = function () {
      i != "" && s != null ? (e(".mega-hover").removeClass("mega-hover"), s.addClass("mega-hover"), e(".mega-menu:not(." + i + ")").hide(), e(".mega-menu." + i).delay(n).fadeIn(r, function () {
        refresh(e(".mega-menu"))
      })) : e(".mega-menu").delay(n).fadeOut(r, function () {
        e(".mega-hover").removeClass("mega-hover")
      })
    };
    e(".mega-menu").hide(), e(".primary-navigation li:not(.no-mega)").mouseenter(function () {
      lg && (s = e(this), i = e(this).data("menu-name"), clearTimeout(o), o = setTimeout(u, n))
    }), e(".primary-navigation li:not(.no-mega)").mouseleave(function () {
      lg && (i = "", clearTimeout(o), o = setTimeout(u, n))
    }), e(".mega-menu").mouseenter(function () {
      lg && (i = e(this).data("menu-name"), clearTimeout(o), o = setTimeout(u, n))
    }), e(".mega-menu").mouseleave(function () {
      lg && (i = "", clearTimeout(o), o = setTimeout(u, n))
    })
  }

  Drupal.behaviors.labHelper = {
    attach: function (context, settings) {
      var $accessibleShow = $('.accessibility-show');
      var $accessibleHide = $('.accessibility-hide');
      var $buttonTest = $('.accessibility-button');

      if ($buttonTest.length == 0 && ($accessibleShow.length > 0 || $accessibleHide.length > 0)) {
        var $button = $('<button class="accessibility-button accessibility-button-off"></button>');
        $button.on('click', function () {
          accessibleToggle();

        });
        var $buttonLabel = $('<span>ACCESSIBILITY</span>');
        var $buttonWrapper = $('<div class="accessibility-button-wrapper">');
        $button.append($buttonLabel);
        $buttonWrapper.append($button);
        $('#content-area > .region-content').prepend($buttonWrapper);

        function accessibleToggle($on) {
          if ($on || (typeof($on) == 'undefined' && $button.hasClass('accessibility-button-off'))) {
            $button.removeClass('accessibility-button-off');
            $button.addClass('accessibility-button-on');
            //$buttonLabel.text('ACCESSIBILITY ON');
            $accessibleShow.show();
            $accessibleHide.hide();
            Cookies.set('accessibility', 'on');
          }
          else {
            $button.removeClass('accessibility-button-on');
            $button.addClass('accessibility-button-off');
            //$buttonLabel.text('ACCESSIBILITY OFF');
            $accessibleShow.hide();
            $accessibleHide.show();
            Cookies.remove('accessibility');
          }

        }

        $cookieValue = Cookies.get('accessibility');
        $startValue = ($cookieValue === 'on');
        accessibleToggle($startValue);
      }

      ht($);
    }
  }

})(jQuery);
