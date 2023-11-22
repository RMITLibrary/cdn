(function ($) {
  Drupal.behaviors.emediaVideoAccordion = {
    attach: function (context) {
      var wrapper = $('#emedia-video-wrapper');

      if (wrapper.length == 0) {
        return;
      }
      var currentIcon = null;
      var currentButton = null;
      var playIcons = $();
      var videoButtons = $('.video-accordion-video-button');
      var videoElement = null;
      var youtubeElement = $('#video-youtube-player');
      var nativeElement = $('#video-mp4-player');
      var youtubeContainer = $('#video-youtube-container');
      var nativeContainer = $('#video-mp4-container');
      var noContainer = $('.emedia-video-accordion-no-player-container');

      if (nativeElement.length > 0) {
        videoElement = nativeElement;
      }
      else if (nativeElement.length > 0) {
        videoElement = youtubeElement;
      }

      if (noContainer.length === 0) {
        videoElement.get(0).addEventListener('play', playHandler, false);
        videoElement.get(0).addEventListener('pause', pauseHandler, false);

        var activeBtn = $('.video-accordion-featured');
        var activePanel = activeBtn.closest('.panel');
        var thisToggle = activePanel.find('.accordion-toggle');
        currentIcon = $('<span class="play-icon element-hidden">');
        thisToggle.append(currentIcon);
        playIcons = playIcons.add(currentIcon);
      }

      function playHandler(e) {
        playIcons.each(function () {
          var thisIcon = $(this);
          if (thisIcon[0] == currentIcon[0]) {
            currentIcon = thisIcon;
            thisIcon.removeClass('element-hidden');
            thisIcon.removeClass('paused');
            thisIcon.addClass('playing');
            currentButton.find('span').text('Pause video');
            currentButton.addClass('video-playing');
          }
          else {
            thisIcon.addClass('element-hidden');
          }
        });
      }

      function pauseHandler(e) {
        currentIcon.addClass('paused');
        currentIcon.removeClass('playing');
        currentButton.find('span').text('Play video');
        currentButton.removeClass('video-playing');
      }

      function removePlayIcons() {
        playIcons.each(function () {
          var thisIcon = $(this);

          if(thisIcon[0] !== currentIcon[0]) {
            thisIcon.addClass('element-hidden');
          }
        });
      }

      function resetButtons() {
        videoButtons.each(function () {
          var thisButton = $(this);

          if(thisButton[0] !== currentButton[0]) {
            thisButton.removeClass('video-playing');
            thisButton.find('span').text('Play video');
          }
        });
      }

      function removeNoContainer() {
        if (noContainer.length > 0) {
          noContainer.remove();
          noContainer = $();
        }
      }

      videoButtons.on('click', function () {
        currentButton = $(this);
        var src = currentButton.attr('data-src');
        var panel = currentButton.closest('.panel');
        var thisToggle = panel.find('.accordion-toggle');
        var thisIcon = thisToggle.find('.play-icon');

        if (thisIcon.length === 0) {
          var playIcon = $('<span class="play-icon element-hidden">');
          thisToggle.append(playIcon);
          currentIcon = playIcon;
          playIcons = playIcons.add(playIcon);
        }
        else {
          currentIcon = thisIcon;
        }

        removePlayIcons();
        resetButtons();
        removeNoContainer();

        var type = '';
        if (src.indexOf('youtu') !== -1) {
          type = 'youtube';
          videoElement = youtubeElement;
        }
        else {
          type = 'mp4';
          videoElement = nativeElement;
        }

        // pause all players
        if (nativeElement.length > 0) {
          nativeElement.get(0).player.pause();
        }
        if (youtubeElement.length > 0) {
          youtubeElement.get(0).player.pause();
        }

        if (videoElement.length == 0) {
          var container = $('<div id="video-' + type + '-container" class="emedia-video-player-container">');
          var inner = $('<div class="emedia-video-inner">');
          videoElement = $('<video id="video-' + type + '-player" class="mediaelement" src="' + src + '" type="video/' + type + '" controls autoplay>');

          // hide other container
          if (type == 'youtube') {
            nativeContainer.hide();
            youtubeContainer = container;
            youtubeElement = videoElement;
          }
          else {
            youtubeContainer.hide();
            nativeContainer = container;
            nativeElement = videoElement;
          }

          inner.append(videoElement);
          container.append(inner);
          wrapper.append(container);
          videoElement.mediaelementplayer({
            stretching: "fill",
            success: function (mediaElement, domObject) {
              mediaElement.addEventListener('play', playHandler, false);
              mediaElement.addEventListener('pause', pauseHandler, false);
            }
          });
        }
        else {
          var player = videoElement.get(0).player;

          if (videoElement.attr('id') == 'video-youtube-player') {
            if (!youtubeContainer.is(':visible')) {
              nativeContainer.hide();
              youtubeContainer.show();
            }
          }
          else if (!nativeContainer.is(':visible')) {
            youtubeContainer.hide();
            nativeContainer.show();
          }

          if (player.media.getAttribute('src') == src) {
            if (currentButton.hasClass('video-playing')) {
              player.pause();
            }
            else {
              currentButton.attr('disabled', '');
              player.play();
            }
          }
          else {
            if (player.media.getAttribute('autoplay') === null) {
              player.media.setAttribute('autoplay', '');
            }
            player.setSrc(src);
          }
        }
      });
    }
  }
}(jQuery));