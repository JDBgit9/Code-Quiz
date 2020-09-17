// Connecting elements form the page 
//Hook question element
var displayQuestionEl = document.querySelector("#question-container");
//Hooking the timer element
var timerEl = document.querySelector(".timer");
// Hooking the results 
var resultsEl = document.querySelector(".results");
// Creating dynamic elements 
var mainDisplay = document.createElement("h1");
// Creating button to start Quiz
var startButton = document.querySelector(".startBtn");

var quizContainer = document.getElementById('.question');

var submitButton = document.getElementById('.submit');

var Button = document.createElement("Button");


// Declaring global variables
// Variable to store timer
var timer = 90;
// variables to store current index
var index = 0;

var highScore


// _________ FUNCTIONS------------


    // functions that loads content when page fist loads
function openingPage() {
    // add text to h3 element
    mainDisplay.textContent = "Press Start Quiz to begin"
    // adding text to button 
    startButton.textContent = "Start Quiz"
    // appending text to start button
    displayQuestionEl.append(mainDisplay, startQuiz)
}

var shuffledQuestions, currentQuestionIndex

addEventListener.startButton("click", startQuiz());

function startQuiz() {
    console.log('Started')
    startButton.style.display = "Start Quiz";
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    displayQuestionEl.classList.remove('hide');
    setNextQuestion()
    currentQuestionIndex = 0;
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

    },
        1 * 1000)
    setInterval(function () { alert("Game Over"); }, 45 * 1000);
}
secondsLeft = 45;
timerInterval; 0;

function startTimer() {
    timeEl.textContent = 0, secondsLeft;
    timerInterval = setInterval(function () {
        secondsLeft--;
        updateTimer();
        if (0 === secondsLeft) {
            clearInterval(timerInterval);
        }
    }, 1 * 1000);
}
function updateTimer() {
   
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
    var choiceContainer = document.createElement("btn");
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
    // SUBMIT NAE IN BOX TO STORE INITIALS
    inputBox.onesubmit = function (event) {
        event.preventDefault();

        var storedInfo = JSON.parse(localStorage.getItem("highscores"));

        if (storedInfo !== null) {

            highScore = storedInfo

        }
        var highScoreObj = {
            name: submitForm.initials.value,
            score: highScore
        }
        highScore.push(highScoreObj);

        localStorage.setItem("High Score", score, JSON.stringify(highScore))

        scoreboard(0);

        function scoreboard() {
            var storedScores = JSON.parse(localStorage.getItem("highscores"));

            displayQuestionEl.textContent = "";

            timerEl.style.display = "none";

            resultsEl.style.display = "none";

            mainDisplay.textContent = "High Score";

            submitButton, textContent = storedScores.value

            displayQuestionEl.append(timerEl, resultsEl, highScore, mainDisplay, submitButton);

        }

    }
    function showQuestion(question) {

        displayQuestionEl.innerText + question.question;
        question.answers.forEach(answer => {
            const button.innerText = answer.textContent;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
            button.addEventListener('click', selectAnswer)
            answerButtonsElement.appendChild(Button)
        });

        // function to check answer
        function checkAnswer(event) {

            //    LOGIC TO CHECK FOR RIGHT ANSWER */
            var responseText = event.target.textContent;
            console.log(responseText);

            if (responseText === question[index].answer) {
                console.log("Correct");
            } else {
                console.log("incorrect");
                timer = (timer - 10)

            }

            //    increase by 1
            index++;
            // show next question
            nextQuestion();

        }
        // on submit, show results
        submitButton.onclick = function () {
            showResults(question, quizContainer, results);
        }

        startButton.addEventListener('click', StartQuiz);

        openingPage();