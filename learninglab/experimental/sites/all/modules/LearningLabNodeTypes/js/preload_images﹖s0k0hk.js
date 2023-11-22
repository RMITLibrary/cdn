(function ($) {

	$(document).ready(function()
	{
            var arrayOfImages = Array('Book003_over.png',
                                        'Book004_over.png',
                                        'Book006_over.png',
                                        'Book007_over.png',
                                        'Book009_over.png',
                                        'Book068_over.png');
            
            $(arrayOfImages).each(function()
            {
                var path = theme_path + "/images/book_box_titles/" + this;
                
                $('<img/>')[0].src = path;
            });
            
        });
}(jQuery));

