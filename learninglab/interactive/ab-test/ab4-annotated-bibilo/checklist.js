document.addEventListener('DOMContentLoaded', function() {
    var checkboxes = document.querySelectorAll('.form-check-input');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            var target = this.getAttribute('data-target');
            var elements = document.querySelectorAll('.' + target);

			var num = this.id.match(/\d+/);
            console.log(this.id+ " " +num);
            
            elements.forEach(function(element) {
                if (checkbox.checked) {
                    element.classList.add('highlight-' + num);
                } else {
                    element.classList.remove('highlight-' + num);
                }
            });

			var label = this.nextElementSibling;
			if (this.checked) {
                label.classList.add('highlight-' + num);
            } else {
                label.classList.remove('highlight-' + num);
            }
        });
    });
});