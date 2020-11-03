// // select all elements

const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const questions = document.getElementById("question");

const qImg = document.getElementById("qImg");

const choiceA = document.getElementById("A");

const choiceB = document.getElementById("B");

const choiceC = document.getElementById("C");

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timeGauge");

const progress = document.getElementById("progress");

const scoreDiv = document.getElementById("scoreContainer");

const choice = Array.from(document.getElementsByClassName("choice"));
// const startGame =
const correct_Bonus = 10;

const max_Questions = 10;

let currentQuestions = {};

let acceptingAnswers = true;

let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// quizQuestions[0].choiceA -> "q"
var quizQuestions = [
    {
        question: "17 + 1 = ?",

        choiceA: "q",

        choiceB: "18",

        choiceC: "9",

        choiceD: "x",

        correct: "B",
    },
    {

        question: "10 + 19 = ?",

        choiceA: "29",

        choiceB: "17",

        choiceC: "7",

        choiceD: "None of the above",

        correct: "C",

    },
    {
        question: "2 * 2 = ?",

        choiceA: "4",

        choiceB: "6",

        choiceC: "d",

        choiceD: "z",

        correct: "d",

    },
    {

        question: "10 * 19 = ?",

        choiceA: "29",

        choiceB: "190",

        choiceC: "a",

        choiceD: "None of the above",

        correct: "a",

    },
    {

        question: "150 + 18 = ?",

        choiceA: "178",

        choiceB: "6",

        choiceC: "15",

        choiceD: "168",

        correct: "B",

    }, {

        question: "2 + 2 = ?",

        choiceA: "g",

        choiceB: "d",

        choiceC: "4",

        choiceD: "22",

        correct: "C"

    }, {

        question: "4 + xy = ?",

        choiceA: "8xy",

        choiceB: "4boys",

        choiceC: "4x+y",

        choiceD: "none of the above",

        correct: "B",

    },
    {

        question: "x + yz = ?",

        choiceA: "eyz",

        choiceB: "xyz",

        choiceC: "abc",

        choiceD: "123",

        correct: "A",

    }, {

        question: "11 + 11 = ?",

        choiceA: "9",

        choiceB: "6",

        choiceC: "4",

        choiceD: "22",

        correct: "C",

    }, {

        question: "abc is easy as = ?",

        choiceA: "69",

        choiceB: "do re mi",

        choiceC: "407",

        choiceD: "123",

        correct: "D",

    },
    {

        question: "123xyz + abc = ?",

        choiceA: "abc123xyz",

        choiceB: "123abcxyz",

        choiceC: "123xyzabc",

        choiceD: "all of the above",

        correct: "B",

    },
    {

        question: "3 * 3 = ?",

        choiceA: "9",

        choiceB: "6",

        choiceC: "i",

        choiceD: "n",

        correct: "C",

    }, {

        question: "5 * 2 = ?",

        choiceA: "10",

        choiceB: "g",

        choiceC: "4",

        choiceD: "j",

        correct: "D",

    },
    {

        question: "44 + 0 = ?",

        choiceA: "h",

        choiceB: "220",

        choiceC: "8",

        choiceD: "none of the above",

        correct: "C",

    },
    {

        question: "99 * 1 = ?",

        choiceA: "9",

        choiceB: "99",

        choiceC: "i",

        choiceD: "100",

        correct: "C",

    }];
// CONSTANTS

const lastQuestion = quizQuestions.length - 1;

let runningQuestion = 0;

// render a question

function renderQuestion(){
console.log("testing");
    let q = quizQuestions[runningQuestion];

   console.log(q);

    document.getElementById("questionTitle").textContent="newtext";

    questions.innerHTML = "<p>"+ q.question +"</p>";

    qImg.innerHTML = "<img src="+ q.imgSrc +">";

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;

    choiceD.innerHTML = q.choiceD;

    console.log(q.question)
   
}

// render progress

function renderProgress(){

    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){

        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";

    }

}
start.addEventListener("click",startQuiz);
// console.log(quizQuestions[0]);

function startQuiz(){


    renderQuestion();


}

// var text = document.createTextNode(quizQuestions[0].question);
// var choiceText = document.createTextNode(quizQuestions[0].choice1);
// var choiceText = document.createTextNode(quizQuestions[0].choice2);
// var choiceText = document.createTextNode(quizQuestions[0].choice3);
// var choiceText = document.createTextNode(quizQuestions[0].choice4);


// questions.appendChild(text);

// startGame = () => {
//     questionCounter = 0;
//     score = 0;
//     availableQuestions = [...questions];
//     console.log(availableQuestions);
//     getNewQuestion();

// };

// getNewQuestion = () => {
//     if (availableQuestions.length === 0 || questionCounter >= max_Questions) {

//     }
//     questionCounter++;
//     Math.floor(Math.random() * availableQuestions.length);
//     currentQuestions = availableQuestions[questionCounter];
//     questions.innerText = currentQuestions;


//     choice.forEach(choice => {
//         const number = choice.dataset["number"];
//         question.innerText = currentQuestions["choice-text" + number];
//     });

//     availableQuestions.splice(questionIndex, 1);

//     acceptingAnswers = true;
// };

// choice.forEach(choice => {
//     choice.addEventListener("click", e => {
//         if (!acceptingAnswers) return;

//         acceptingAnswers = false;
//         const selectedChoice = e.target;
//         const selectedAnswer = selectedChoice.dataset["choice"];
//         console.log(selectedAnswer);
//         getNewQuestion();
//     });
// });

/*
startGame();

var total_seconds = 90 * 1;
var c_minutes = parseInt(total_seconds / 90);
var c_seconds = parseInt(total_seconds % 90);
var timer;

function CheckTime() {
  document.getElementById("quiz-time-left").innerHTML = 'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ';

  if (total_seconds <= 0) {
    score();
  } else {
    total_seconds = total_seconds - 1;
    c_minutes = parseInt(total_seconds / 90);
    c_seconds = parseInt(total_seconds % 90);
    timer = setTimeout(CheckTime, 1000);
  }
}
timer = setTimeout(CheckTime, 1000);

function score() {
  // stop timer
  clearInterval(timer);

  //Referencing the value of the questions
  var q1 = document.forms.form.q1.value;
  var q2 = document.forms.form.q2.value;
  var q3 = document.forms.form.q3.value;

  // disable form
  var elements = document.getElementById("questions").elements;
  for (var i = 0, len = elements.length; i < len; ++i) {
    elements[i].disabled = true;
  }

  //Array for the questions
  var questions = [q1, q2, q3];

  //Answers for each question
  var answers = ["b", "b", "b"];

  //variable to keep track of the points
  var points = 0;
  var total = 3;
  //max score 

  //Making use of a for loop to iterate over the questions and answers arrays
  for (var i = 0; i < total; i++) {
    if (questions[i] == answers[i]) {
      points = points + 1; //Increment the score by 2 for every correct answer given
    }
  }

  //CSS for questions
  var q = document.getElementById("p");

  q.style.fontSize = "40px";
  q.style.textAlign = "center";
  q.innerHTML = "You got " + points + " out of " + total +
    "<br />" +
    "you used " + (29 - Math.floor(total_seconds)) + " seconds";

  return false;
}

*/