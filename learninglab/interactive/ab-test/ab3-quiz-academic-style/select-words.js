//only used on verbose feedback
const feedbackArray = [
	"Excellent work! You've mastered the material.",  // 100%
	"Great job! You have a strong understanding.",     // 80-99%
	"Good effort! There's room for improvement.",      // 60-79%
	"Keep trying! Review the material and try again."  // Below 60%
];

function checkSpecificAnswers() {
	let answersArray = [
        {	answer: 1,
            feedback:'This is the more concise option.',
            feedbackIncorrect: 'These words could be replaced with one word to make the sentence more concise.'	},
		{	answer: 2,
            feedback:'This is the more concise option.',
            feedbackIncorrect: 'These words could be replaced with one word to make the sentence more concise.'	},
		{	answer: 1,
            feedback:'This is the more concise option.',
			feedbackIncorrect: 'These words could be replaced with one word to make the sentence more concise.' 	},
		{	answer: 2,
            feedback:'This is the more concise option.',
            feedbackIncorrect: 'These words could be replaced with one word to make the sentence more concise.'	},
		{	answer: 2,
            feedback:'This is the more concise option.',
            feedbackIncorrect: 'These words could be replaced with one word to make the sentence more concise.'	}
	];

	// [1, 2, 1, 2, 2], 

    let score = 0;

    let selects = document.getElementsByClassName("inline-select");
    
    for (let i = 0; i < selects.length; i++) {

		let myFeedback = createHiddenFeedback(selects[i], i);

		//still have to add 
        if (selects[i].selectedIndex === answersArray[i].answer) {
            selects[i].classList.remove("is-invalid");
			selects[i].classList.add("is-valid");
			score++;

			fillHiddenFeedback(myFeedback, "Correct", answersArray[i]);
			
        } else {
			selects[i].classList.remove("is-valid");
            selects[i].classList.add("is-invalid");
            allCorrect = false;

			fillHiddenFeedback(myFeedback, "Incorrect", answersArray[i]);
        }
    }

	showQuizScore(score, selects.length);
}

function checkTentativeAnswers() {
    let answersArray = [
        {	answer: '0',
            feedback: "'There is a possibility' and 'may' are examples of tentative language."	},
		{	answer: '1',
            feedback:'This sentence does not use tentative language to soften its meaning.'	},
		{	answer: '1',
            feedback:'The language in this sentence is very certain and not tentative at all.' 	},
		{	answer: '0',
            feedback:"The words 'suggests' and 'could' are examples of tentative language."	},
		{	answer: '0',
            feedback:"The words 'indicate' and 'possible' are examples of tentative language."	}
	];
    
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
			if (value === answersArray[i].answer) {
				for (let j = 0; j < radios.length; j++) {
					radios[j].classList.remove("is-invalid");
					radios[j].classList.add("is-valid");
				}
				score++;

				fillHiddenFeedback(myFeedback, "Correct", answersArray[i]);
			} else {
				for (let j = 0; j < radios.length; j++) {
					radios[j].classList.remove("is-valid");
					radios[j].classList.add("is-invalid");
				}

				fillHiddenFeedback(myFeedback, "Incorrect", answersArray[i]);
			}
		} else {
			for (let j = 0; j < radios.length; j++) {
				radios[j].classList.remove("is-valid");
				radios[j].classList.add("is-invalid");
			}

			fillHiddenFeedback(myFeedback, "Incorrect", answersArray[i]);
		}
	}

	showQuizScore(score, fieldsets.length);
}


function createHiddenFeedback(myElement, n) {
	
	let feedback = document.getElementById(`q-feedback${n+1}`);
    if (!feedback) {
        feedback = document.createElement("div");
        feedback.id = `q-feedback${n+1}`;
        feedback.className = "question-feedback";
        feedback.setAttribute("role", "alert");

		const spanResult = document.createElement("span");
		spanResult.className = "q-feedback-result";
		feedback.appendChild(spanResult);

		const spanFeedback = document.createElement("span");
		spanFeedback.className = "q-feedback-inner";
		feedback.appendChild(spanFeedback);

		myElement.setAttribute("aria-describedby", feedback.id);
        myElement.parentNode.appendChild(feedback);
    }

	return feedback;
}

function fillHiddenFeedback(myFeedback, text, obj) {

	let feedbackStr = obj.feedback;

	let spanResult = myFeedback.getElementsByClassName("q-feedback-result");
	let spanFeedback = myFeedback.getElementsByClassName("q-feedback-inner");

	if(text === "Incorrect") {

		if(obj.feedbackIncorrect) {
			feedbackStr = obj.feedbackIncorrect;
		}

		spanResult[0].classList.add("error");
	}
	else {
		spanResult[0].classList.remove("error");
	}

	spanResult[0].textContent = text +". ";
	spanFeedback[0].textContent = feedbackStr; 
}

function showQuizScore(score, total) {
    // Access the score display element
    let scoreDisplay = document.querySelector(".quiz-score");
    scoreDisplay.innerHTML = `Your score: ${score} out of ${total}`;
    scoreDisplay.style.display = "block";
    
    // Access feedback elements
    let quizFeedback = document.getElementsByClassName("quiz-feedback-verbose");
    let extraFeedback = document.getElementsByClassName("extra-feedback");

    if (quizFeedback.length > 0) {
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
