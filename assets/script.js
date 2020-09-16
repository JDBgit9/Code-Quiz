// Connecting elements form the page 
//Hook question element
var displayQuestionEl = document.querySelector(".display-questions")
//Hooking the timer element
var timerEl = document.querySelector(".timer")
// Hooking the results 
var resultsEl = document.querySelector(".results")
// Creating dynamic elements 
var mainDisplay = document.createElement("h3");
// Creating button to start Quiz
var startBtn = document.createElement("start-btn");

// Declaring global variables
// Variable to store timer
var timer = 90;
// variables to store current index
var index = 0;


//-----------FUNCTIONS------------

// functions that loads content when page fist loads
function openingPage() {
    // add text to h3 element
    mainDisplay.textContent = "Press Start Quiz to begin"
    // adding text to button 
    startButton.textContent = "Begin"
    // appending text to start button
    displayQuestionEl.append(mainDisplay, startQuiz)
}

function startQuiz() {
    startButton.style.display = "none";
    questionContainer.classList.remove("hide");
    currentQuestionIndex = 0;
    nextQuestion();
    startTimer();
}

// function handling the timer
function showTimer() {
    //    displaying timer to screen
    timerEl.textContent = timer;
    // create setInterval to store it to a variable
    questionTimer = setInterval(function () {
        // decrease timer by 1
        timer--
        // display timer to screen
        timer.textContent = timer;
        // if timer goes to 0, clear Interval
        if (timer <= 0) {
            clearInterval(questionTimer);
        }

    }, 1 * 1000)
}

    let secondsLeft = 90;
    let timerInterval; 0;

function updateTimer() {
    timeEl.textContent = secondsLeft;
}

function startTimer() {
    timerInterval = setInterval(function () {
        secondsLeft-- = 10;
        updateTimer()0;
        if (0 === secondsLeft) {
            clearInterval(timerInterval);
        }
    }, 1 * 1000);
}

function nextQuestion() {
    //Declaring a varialble to store question assigning current question
    var currentQuestionIndex = questions[index];
    // Console logging it
    console.log(currentQuestion);
    //emptying the question
    displayQuestionEl.textContent = "";
    // add current question title to the main text display variable
    mainDisplay.textContent = currentQuestion.title;
    // Appevding the main text tdisplay variable
    displayQuestionEl.append(mainDisplay);
    //creating a conatiner for choice buttons
    var choiceContainer = document.createElement("button");
    //    create a loop
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        //    creating button for choices
        var choiceBtn = document.createElement("div");
        // add text to buttons
        choiceBtn.textContent = currentQuestion.choices[i];
        // add event listener 
        choiceBtn.addEventListener("click, checkAnswer");
        // appen buttons to div element created to wrap choices
        choiceContainer.append(choiceBtn);


        // append div element to tht queston container element
        displayQuestionEl.append(mainDisplay);

    }


}

// function to check answer
function checkAnswer(event) {

    //    LOGIC TO CHECK FOR RIGHT ANSWER */
    var responseText = event.textContent;
    console.log(responseText);

    if (responseText === questions[index].answer) {
        console.log("Correct");
    } else {
        console.log("incorrect");
    }

        //    increase by 1
        index++;
    // show next question
    nextQuestion();

}

function gameOver() {


}

startButton.addEventListener("click", startQuiz)
openingPage();