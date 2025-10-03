const answersArray = [
    { answer: '2', feedback: 'You can check Hansard, an account of parliamentary proceedings, to see if the Prime Minister made that statement. But note, his belief that most celebrants do not believe in the sanctity of marriage is his opinion. So, this is a combination of fact and opinion.', feedbackIncorrect: 'Incorrect feedback can go here' },
    { answer: '0', feedback: 'Original source. This data is collected first-hand by the researcher.' },
    { answer: '1', feedback: '“Abortion law opens flood gates to murdering babies”. The words "flood gates" and "murdering" are emotive and provocative.' },
    { answer: '1', feedback: 'Checking just one characteristic of a source does not make it reliable. There are many aspects that you should check.' },
    { answer: '1', feedback: 'The reliability of the study may be compromised if it was funded by an organisation that had a financial interest, for example. So, you also need to consider whether the study was peer reviewed.' }
];

var score;
var currentQuestionIndex;	//which question we're up to
var totalQuestions;			//total number of questions

var questions;				//list items containing questions

document.addEventListener('DOMContentLoaded', function() {
	initQuiz();
});

function initQuiz() {
	questions = document.querySelectorAll('#quiz-questions > li');
    totalQuestions = questions.length;

    if (totalQuestions > 0) {
		// Add event listeners to each radio button in the question
        questions.forEach((question) => {
            const radios = question.querySelectorAll('input[type="radio"]');

            radios.forEach((radio) => {
                radio.addEventListener('change', function(event) {
                    checkAnswer(event.target);
					// Pass the selected radio, group index, and questions NodeList
                });
            });

        });
    }

	//add clickEvent to all next-question buttons
	document.querySelectorAll('.next-question').forEach(function(button) {
		button.addEventListener('click', function() {
			nextQuestion();
		});
	});

	//add click event, hide intro and show quiz thenc all startQuiz
	document.getElementById('start-quiz').addEventListener('click', function() {
		document.getElementById('intro-header').hidden = true;
		document.getElementById('quiz').hidden = false;

		startQuiz();
	});

	//add click event, call restartQuiz
	document.getElementById('restart-quiz').addEventListener('click', function() {
		restartQuiz();
	});
}

function startQuiz() {
    currentQuestionIndex = 0;
	score = 0;

    // Hide all questions initially
    questions.forEach(question => question.hidden = true);

    // Show the first question
    if (totalQuestions > 0) {
        questions[0].hidden = false;
        updateQuestionCounter(currentQuestionIndex, totalQuestions);
    }
}

function checkAnswer(selectedRadio) {   
    const fieldset = selectedRadio.closest('.form-group');
	const feedback = fieldset.nextElementSibling;
	const nextButton = feedback.nextElementSibling;

	//Check answer and fill feeback 
	let selectedInput = fieldset.querySelector('input[type="radio"]:checked');
	let radios = fieldset.getElementsByClassName("form-check-input");

	let value = selectedInput.value;
	if (value === answersArray[currentQuestionIndex].answer) {
		//add valid (green) classes
		for (let j = 0; j < radios.length; j++) {
			radios[j].classList.add("is-valid");
		}
		score++;

		injectFeedback(feedback, "Correct");

		console.log(`Correct! Question ${currentQuestionIndex + 1} answered with value: ${selectedRadio.value}`);
	}
	else {
		//add invalid (red) classes
		for (let j = 0; j < radios.length; j++) {
			radios[j].classList.add("is-invalid");
		}

		injectFeedback(feedback, "Incorrect");

		console.log(`Incorrect! Question ${currentQuestionIndex + 1} answered with value: ${selectedRadio.value}`);
	}

	//Disable radio buttons
	disableRadios(fieldset);

	

	// Show feedback and next question button
    feedback.hidden = false;
    nextButton.hidden = false; 
}

function injectFeedback(feedback, resultText) {
	//Grab object from answerArray
	const obj = answersArray[currentQuestionIndex];

    // Clear any previous content in the feedback div
    feedback.innerHTML = '';

    // Create the appropriate feedback elements based on the resultText
    const resultDiv = document.createElement('div');
    resultDiv.classList.add(resultText.toLowerCase()); // either "correct" or "incorrect"
    resultDiv.textContent = resultText + '.'; // Text for Correct or Incorrect

    // Append the result div to the feedback div
    feedback.appendChild(resultDiv);

    // Add the specific feedback text after the result
    let specificFeedback = document.createElement('div');
    specificFeedback.textContent = obj.feedback;

	if(resultText === "Incorrect") {

		if(obj.feedbackIncorrect) {
			specificFeedback.textContent = obj.feedbackIncorrect;
		}
	}

    feedback.appendChild(specificFeedback);

}


function nextQuestion() {
	//hide current question
	questions[currentQuestionIndex].hidden = true;

	currentQuestionIndex++;

	//check if we are out of questions
	if(currentQuestionIndex != totalQuestions) {
		//show next question, update counter
		questions[currentQuestionIndex].hidden = false;
    	updateQuestionCounter(currentQuestionIndex, totalQuestions);
	}
	else {
		//no questions, show results
		showResults();
	}
}


function showResults() {
	let scoreDisplay = document.querySelector(".quiz-score");
    scoreDisplay.innerHTML = `Your score: ${score} out of ${totalQuestions}`;

	const scorePerc = score / totalQuestions * 100;
	var feedbackToShow;

    if (scorePerc === 100) {
        feedbackToShow = "gold-feedback"; // Excellent work
    } else if (scorePerc >= 80) {
        feedbackToShow = "silver-feedback"; // Great job
    } else if (scorePerc >= 60) {
        feedbackToShow = "bronze-feedback"; // Good effort
    } else {
        feedbackToShow = "other-feedback"; // Keep trying
    }

	document.getElementById(feedbackToShow).hidden = false;
	document.getElementById('quiz').hidden = true;
	document.getElementById('results').hidden = false;
}

function restartQuiz() {
	//Set radios to enabled, unchecked and remove valid classes
	const radios = document.querySelectorAll('input[type="radio"]');
	radios.forEach((radio) => {
		radio.disabled = false;
		radio.checked = false;
		radio.classList.remove("is-valid");
		radio.classList.remove("is-invalid");
	});

	//hide feedback, final-feedback and next buttons
	document.querySelectorAll('.feedback, .next-question .final-feedback').forEach(function(element) {
		element.hidden = true;
	});

	//show/hide relevant interface
	document.getElementById('quiz').hidden = true;
	document.getElementById('results').hidden = true;
	document.getElementById('intro-header').hidden = false;
}

function disableRadios(fieldset) {
    fieldset.querySelectorAll('input[type="radio"]').forEach(function(radio) {
		radio.disabled = true;
	});
}

function updateQuestionCounter(currentIndex, total) {
    document.getElementById('question-counter').textContent = `Question ${currentIndex + 1} of ${total}`;
}