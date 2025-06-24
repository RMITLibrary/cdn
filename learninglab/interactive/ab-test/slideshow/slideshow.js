let slideIndex = 1;
let slides = document.getElementsByClassName("my-slide");
displayNumbers();

//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	//let dots = document.getElementsByClassName("dot");
	
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";

	/* for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	dots[slideIndex-1].className += " active"; */

	displayNumbers();

	var topAnchor = document.getElementById('top-slide' +slideIndex);
	topAnchor.focus();
}

function displayNumbers() {
	var progressNumbers = document.getElementById("progress-numbers");
	progressNumbers.textContent = slideIndex +" of " +slides.length;
}