//only used on verbose feedback
const feedbackArray = [
	"Excellent work! You've mastered the material.",  // 100%
	"Great job! You have a strong understanding.",     // 80-99%
	"Good effort! There's room for improvement.",      // 60-79%
	"Keep trying! Review the material and try again."  // Below 60%
];

function checkSpecificAnswers() {
	let answersArray = [1, 1, 1, 1, 1]; 
    let score = 0;

    let selects = document.getElementsByClassName("inline-select");
    
    for (let i = 0; i < selects.length; i++) {

		let myFeedback = createHiddenFeedback(selects[i], i);

		//still have to add 
        if (selects[i].selectedIndex === answersArray[i]) {
            selects[i].classList.remove("is-invalid");
			selects[i].classList.add("is-valid");
			score++;

			fillHiddenFeedback(myFeedback, "Correct answer");
			
        } else {
			selects[i].classList.remove("is-valid");
            selects[i].classList.add("is-invalid");
            allCorrect = false;

			fillHiddenFeedback(myFeedback, "Incorrect answer");
        }
    }

	showQuizScore(score, selects.length);
}

function checkTentativeAnswers() {
    let answersArray = ['0', '1', '1', '0', '0']; 
    let score = 0;

    // Get all fieldsets which contain the radio groups
    let fieldsets = document.querySelectorAll('.form-group');

    for (let i = 0; i < fieldsets.length; i++) {
		let fieldset = fieldsets[i];
		let selectedInput = fieldset.querySelector('input[type="radio"]:checked');
		let radios = fieldset.getElementsByClassName("form-check-input");

		let myFeedback = createHiddenFeedback(fieldsets[i], i);
	
		if (selectedInput) {
			let value = selectedInput.value;
			if (value === answersArray[i]) {
				for (let j = 0; j < radios.length; j++) {
					radios[j].classList.remove("is-invalid");
					radios[j].classList.add("is-valid");
				}
				score++;

				fillHiddenFeedback(myFeedback, "Correct answer");
			} else {
				for (let j = 0; j < radios.length; j++) {
					radios[j].classList.remove("is-valid");
					radios[j].classList.add("is-invalid");
				}

				fillHiddenFeedback(myFeedback, "Incorrect answer");
			}
		} else {
			for (let j = 0; j < radios.length; j++) {
				radios[j].classList.remove("is-valid");
				radios[j].classList.add("is-invalid");
			}

			fillHiddenFeedback(myFeedback, "Incorrect answer");
		}
	}

	showQuizScore(score, fieldsets.length);
}


function createHiddenFeedback(myElement, n) {
	
	let feedback = document.getElementById(`q-feedback${n+1}`);
    if (!feedback) {
        feedback = document.createElement("div");
        feedback.id = `q-feedback${n+1}`;
        feedback.className = "visually-hidden";
        feedback.setAttribute("role", "alert");

		myElement.setAttribute("aria-describedby", feedback.id);
        myElement.parentNode.appendChild(feedback);
    }

	return feedback;
}

function fillHiddenFeedback(myFeedback, text) {
	myFeedback.innerHTML = text;
}

function showQuizScore(score, total) {
    // Access the score display element
    let scoreDisplay = document.querySelector(".quiz-score");
    scoreDisplay.innerHTML = `Your score: ${score} out of ${total}`;
    scoreDisplay.style.display = "block";
    
    // Access feedback elements
    let quizFeedback = document.getElementsByClassName("quiz-feedback-verbose");
    let extraFeedback = document.getElementsByClassName("extra-feedback");

    if (quizFeedback) {
        let feedbackIndex;
        scoreDisplay.classList.remove('gold', 'silver', 'bronze'); // Remove existing classes

		let scorePerc = score / total * 100;
        if (scorePerc === 100) {
            feedbackIndex = 0;
            scoreDisplay.classList.add('gold');
        } else if (scorePerc >= 80) {
            feedbackIndex = 1;
            scoreDisplay.classList.add('silver');
        } else if (scorePerc >= 60) {
            feedbackIndex = 2;
            scoreDisplay.classList.add('bronze');
        } else {
            feedbackIndex = 3;
        }
        
		scoreDisplay.style.display = "flex";
        extraFeedback[0].innerHTML = feedbackArray[feedbackIndex];
        
        // Display the feedback
        quizFeedback[0].style.display = "block";
    }
}
