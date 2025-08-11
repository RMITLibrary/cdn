const answersArray = [
    { answer: '2', feedback: 'You can check Hansard, an account of parliamentary proceedings, to see if the Prime Minister made that statement. But note, his belief that most celebrants do not believe in the sanctity of marriage is his opinion. So, this is a combination of fact and opinion.'/* , feedbackIncorrect: 'Incorrect feedback can go here' */ },
    { answer: '0', feedback: 'Original source. This data is collected first-hand by the researcher.' },
    { answer: '1', feedback: '“Abortion law opens flood gates to murdering babies”. The words "flood gates" and "murdering" are emotive and provocative.' },
    { answer: '1', feedback: 'Checking just one characteristic of a source does not make it reliable. There are many aspects that you should check.' },
    { answer: '1', feedback: 'The reliability of the study may be compromised if it was funded by an organisation that had a financial interest, for example. So, you also need to consider whether the study was peer reviewed.' }
];

var score;
var currentQuestionIndex;
var totalQuestions;
var questions;

document.addEventListener('DOMContentLoaded', function() {
    initQuiz();
});

function initQuiz() {
    questions = document.querySelectorAll('#quiz-questions > li');
    totalQuestions = questions.length;
    if (totalQuestions > 0) {
        questions.forEach((question) => {
            const buttons = question.querySelectorAll('.answer-button');
            buttons.forEach((button) => {
                button.addEventListener('click', function(event) {
                    checkAnswer(event.target);
                });
            });
        });
    }

    document.querySelectorAll('.next-question').forEach(function(button) {
        button.addEventListener('click', function() {
            nextQuestion();
        });
    });

    document.getElementById('start-quiz').addEventListener('click', function() {
        document.getElementById('intro-header').hidden = true;
        document.getElementById('quiz').hidden = false;
        startQuiz();
    });

    document.getElementById('restart-quiz').addEventListener('click', function() {
        restartQuiz();
    });
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questions.forEach(question => question.hidden = true);
    if (totalQuestions > 0) {
        questions[0].hidden = false;
        //updateQuestionCounter(currentQuestionIndex, totalQuestions);
    }
}

function checkAnswer(selectedButton) {
    const fieldset = selectedButton.closest('.form-group');
    const feedback = fieldset.nextElementSibling;
    const nextButton = feedback.nextElementSibling;

    const value = selectedButton.getAttribute('data-value');
    if (value === answersArray[currentQuestionIndex].answer) {
        selectedButton.classList.add("is-valid");
        score++;
        injectFeedback(feedback, "Correct");
        console.log(`Correct! Question ${currentQuestionIndex + 1} answered with value: ${value}`);
    } else {
        selectedButton.classList.add("is-invalid");
        injectFeedback(feedback, "Incorrect");
        console.log(`Incorrect! Question ${currentQuestionIndex + 1} answered with value: ${value}`);
    }

    disableButtons(fieldset);

    feedback.hidden = false;
    nextButton.hidden = false;
}

function injectFeedback(feedback, resultText) {
    const obj = answersArray[currentQuestionIndex];
    feedback.innerHTML = '';
    const resultDiv = document.createElement('span');
    resultDiv.classList.add(resultText.toLowerCase());
    resultDiv.textContent = resultText + '. ';
    feedback.appendChild(resultDiv);
    let specificFeedback = document.createElement('span');
    specificFeedback.textContent = obj.feedback;
    if (resultText === "Incorrect" && obj.feedbackIncorrect) {
        specificFeedback.textContent = obj.feedbackIncorrect;
    }
    feedback.appendChild(specificFeedback);
}

function nextQuestion() {
    questions[currentQuestionIndex].hidden = true;
    currentQuestionIndex++;
    if (currentQuestionIndex != totalQuestions) {
        questions[currentQuestionIndex].hidden = false;
        //updateQuestionCounter(currentQuestionIndex, totalQuestions);
    } else {
        showResults();
    }
}

function showResults() {
    const scoreDisplays = document.querySelectorAll(".quiz-score");
    scoreDisplays.forEach(display => {
        display.innerHTML = `Your score: ${score} out of ${totalQuestions}`;
    });

    const scorePerc = (score / totalQuestions) * 100;
    let feedbackToShow;
    if (scorePerc === 100) {
        feedbackToShow = "gold-feedback";
    } else if (scorePerc >= 80) {
        feedbackToShow = "silver-feedback";
    } else if (scorePerc >= 60) {
        feedbackToShow = "bronze-feedback";
    } else {
        feedbackToShow = "other-feedback";
    }

    document.getElementById(feedbackToShow).hidden = false;
    document.getElementById('quiz').hidden = true;
    document.getElementById('results').hidden = false;
}

function restartQuiz() {
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach((button) => {
        button.disabled = false;
        button.classList.remove("is-valid");
        button.classList.remove("is-invalid");
    });
    document.querySelectorAll('.feedback, .next-question, .final-feedback').forEach(function(element) {
        element.hidden = true;
    });
    document.getElementById('quiz').hidden = true;
    document.getElementById('results').hidden = true;
    document.getElementById('intro-header').hidden = false;
}

function disableButtons(fieldset) {
    fieldset.querySelectorAll('.answer-button').forEach(function(button) {
        button.disabled = true;
    });
}


/* function updateQuestionCounter(currentIndex, total) {
    document.getElementById('question-counter').textContent = `Question ${currentIndex + 1} of ${total}`;
} */