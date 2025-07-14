// Initialize the current slide index
let slideIndex = 1;

// Get all elements with the class 'my-slide'
let slides = document.getElementsByClassName("my-slide");
let dots = document.getElementsByClassName("dot");

// Store the image element for later use
var imageElement = document.querySelector('.hotspot-container img'); 

//determine mode of hotspot/slideshow


// Determine the mode of the slideshow based on its classes
// class="slideshow" 						- normal slideshow
// class="slideshow hotspot-text-below"		- hotspot with content below
// class="slideshow hotspot-text-cover"		- hotspot content in boxes covering image on large screens
const slideshowElement = document.querySelector('.slideshow');
let slideshowMode = 'regular';

// Check which mode the slideshow is in and set the variable
if (slideshowElement.classList.contains('hotspot-text-cover')) {
	slideshowMode = 'textCover';
} else if (slideshowElement.classList.contains('hotspot-text-below')) {
	slideshowMode = 'textBelow';
}

//display first slide in certain modes
if(slideshowMode == 'regular') {
	showSlides(slideIndex);
}
else if(slideshowMode == 'textBelow') {
	showSlides(slideIndex);
}
else if(slideshowMode == 'textCover') {
	
	// For the 'textCover' mode, check if screen is mobile sized
	var isMobile = isWindowLessThan768();

	//show first slide in mobile
	if(isMobile) {
		showSlides(slideIndex);
	}
	else {
		//first slide remains hidden on desktop
		slideIndex = 0;

		// Add event listeners to close current slide if image is clicked or dragged
		imageElement.addEventListener('click', function() {
			console.log('Image clicked!');
			if(slideIndex != 0) closeSlide();
		});

		imageElement.addEventListener('dragstart', function(event) {
			console.log('Image is being dragged!');
			if(slideIndex != 0) closeSlide();
		});

		// Select all elements with the class 'btn-close'
		const closeButtons = document.querySelectorAll('.btn-close');

		// Attach a click event listener to each button
		closeButtons.forEach(button => {
			button.addEventListener('click', function() {
				closeSlide();
			});
		});
	}
}

// Update the progress numbers
displayNumbers();


// Controls for navigating slides, called when prev/next is clicked
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Hotspot controls, called when a hot spot (dot) is clicked
function currentSlide(n) {
	//Check if screen is mobile sized
	var isMobile = isWindowLessThan768();

	if(n != slideIndex) {
		showSlides(slideIndex = n);
	}
	else if(slideshowMode == 'textCover' && !isMobile) {
		//If we are in textCover mode and not in mobile and the slide is already displayed 
		// and user clicks on its hot spot, close it
		closeSlide();
	}
}

function showSlides(n) {
	let i;
	
	// Loop around the slides if the index is out of bounds
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	
	//hide all slides
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	console.log("show slides");
	//show selected slide
	slides[slideIndex-1].style.display = "block";

	var isMobile = isWindowLessThan768();
	if(slideshowMode == 'textCover' && !isMobile) {
		positionHotspotSlide(slideIndex-1);
	}

	// Update dots' appearance if they exist
	if(dots.length > 0) {
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}

		dots[slideIndex-1].className += " active";

		console.log("dots!!! " +(slideIndex-1));
	}

	displayNumbers();

	//Set the focus (differs depending on slideshow mode)
	setFocus();	
}

//updates the progress numbers - eg 1 of 3
function displayNumbers() {
	var progressNumbers = document.getElementById("progress-numbers");
	progressNumbers.textContent = slideIndex +" of " +slides.length;
}

// Position the hotspot slide (called in textCover mode)
function positionHotspotSlide(n) {
	//grab reference to the slide and the hot spot
    let mySpot = dots[n];
    let mySlide = slides[n];
    
	// Get computed styles for positioning
	let spotStyle = window.getComputedStyle(mySpot);
    let originalLeft = parseFloat(spotStyle.left);
    let originalTop = parseFloat(spotStyle.top);
	let spotWidth = parseFloat(spotStyle.width);
	let spotHeight = parseFloat(spotStyle.height);
    
    let slideStyle = window.getComputedStyle(mySlide);
    let slideWidth = parseFloat(slideStyle.width);
    let slideHeight = parseFloat(slideStyle.height);

    // Calculate new left position and ensure it fits within bounds
	let newLeft = originalLeft + (spotWidth/2) +8;
	if (newLeft + slideWidth > imageElement.width) {
		newLeft = originalLeft - slideWidth - (spotWidth/2) - 8;
	}

	// Calculate new top position based on bounds
    const upperBound = imageElement.height * 0.15;
    const lowerBound = imageElement.height * 0.85;
    
    if (originalTop < upperBound) {
        // Align to top of hotspot
        newTop = originalTop - (spotWidth/2);
    } else if (originalTop > lowerBound) {
        // Align to bottom of hotspot
        newTop = originalTop +(spotWidth/2) - slideHeight;
    } else {
        // Centre vertically on hotspot
        newTop = originalTop - (slideHeight / 2);
    }
    
    // Adjust position to keep slide within view
    if (newTop < 0) {
        newTop = 10;
    } else if (newTop + slideHeight > imageElement.height) {
        newTop = imageElement.height - slideHeight -10;
    }
	
    // Round values for setting position
    newLeft = Math.round(newLeft);
    newTop = Math.round(newTop);

    mySlide.style.top = newTop + "px";
    mySlide.style.left = newLeft + "px";

	// Adjust position of close button if content is scrollable
	var slideContent = mySlide.querySelector('.slide-content');
	if(slideContent.scrollHeight > slideContent.clientHeight) {
		var closeButton = mySlide.querySelector('.btn-close');
		closeButton.style.right = "20px";
	}
	
}

//Called when a slide is displayed
function setFocus() {
	
	if(slideshowMode == 'regular') {
		//focus to the content
		focusContent();
	}
	else {
		var isMobile = isWindowLessThan768();
		if(slideshowMode == 'textCover' && !isMobile) {
			//If we are in textCover mode and not in mobile
			focusContent();
		}
		else {
			//focus to hidden button just above the image
			var skipContent = document.getElementById('skip-content');
			skipContent.focus();
		}	
	}
}

function focusContent() {
	var topAnchor = document.getElementById('top-slide' +slideIndex);
	topAnchor.focus();
}

//only needed for hotspot-cover
function closeSlide() {
	let i;
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	//update previously selected dot apperance
	dots[slideIndex-1].className = dots[slideIndex-1].className.replace(" active", "");
	slideIndex = 0;
}

// Utility function to check window size
function isWindowLessThan768() {
    return window.innerWidth < 768;
}