var image_list = new Array();

(function ($) {

	$(document).ready(function()
	{
            //add details of all images in content area to image_list
            $('.region-content img').each(function(index)
            {
                image_list.push(this);
            });

            if($('.region-content').width() < 480)
            {
                image_to_link();
            }

            Lightbox.initList();
        });

        $(window).resize(function() {
            if($('.region-content').width() < 480)
            {//switch to mobile view
                image_to_link();
            }
            else
            {
                link_to_image();
            }

            Lightbox.initList();
        });

        /*
         * change images into a link to image
         */
        function image_to_link()
        {
            $('.region-content img').each(function(index)
            {
                if(this.width > 460)
                {
                    var img_link_str = '<a href="' + this.src + '" rel="lightbox" title="' + this.alt + '">Image : ' + this.alt + '</a>';
                    $(this).replaceWith(img_link_str);
                }
            });
        }

        /*
         * change links with rel=lightbox back into image
         */
        function link_to_image()
        {
           $('.region-content a').each(function(index)
           {
                if(this.rel == 'lightbox')
                {
                    var link = this;

                    $.each(image_list, function() {
                        if(this.src == link.href)
                        {
                            $(link).replaceWith(this);
                        }
                    });
                }
           });
        }
}(jQuery));