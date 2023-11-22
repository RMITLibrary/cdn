(function ($) {
  Drupal.behaviors.llNewWindow = {
    attach: function (context, settings) {
      var parts = window.location.pathname.split('/');
      var rootPath = parts[1];
      $("a.new-window").each(function(idx, domEle) {
          $(domEle).html($(domEle).text() + ' (<span class="new-window-text">opens in new window</span>)');
          $(domEle).click(function(){
            window.open(this.href);
            return false;
          });
      });
      $("a.new-window-just-icon").each(function(idx, domEle) {
        $(domEle).html($(domEle).text() + ' (<span class="new-window-text">opens in new window</span>)');
        $(domEle).click(function(){
            window.open(this.href);
            return false;
          });
      });
      $("a.new-window-no-text").each(function(idx, domEle) {
          $(domEle).click(function(){
            console.log('click');
            window.open(this.href);
            return false;
        });
      });
    }
  }
})(jQuery);
