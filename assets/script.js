const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const choiceA = document.getElementById("A");

const choiceB = document.getElementById("B");

const choiceC = document.getElementById("C");

const choiceD = document.getElementById("D");

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timeGauge");

const progress = document.getElementById("progress");

const scoreDiv = document.getElementById("scoreContainer");

// 10 seconds for each question
const questionTime = 10;

const gaugeWidth = 130;

let count = 0;

const gaugeProgressUnit = gaugeWidth / questionTime;

let TIMER = setInterval(counterRender, 1000);

function startQuiz() {
    start.style.display = "none";
    counterRender();
    TIMER = setInterval(counterRender, 1000);
    progressRender();
    questionRender()
    quiz.style.display = "block";
}

start.style.display = "none";
renderQuestion();
quiz.style.display = "none"


function renderQuestion() {

    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;

    choiceD.innerHTML = q.choiceC;

}
function renderProgress() {

    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
// adding a counter render function to time quiz
function counterRender() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = gaugeProgressUnit = count + "10px";
        count++;
    } else {
        count = 0;
        answerIsWrong();
        if (runningQuestionIndex < lastQuestionIndex) {
            runningQuestionIndex++;
            questionRender();
        } else {
            clearInterval(TIMER);
            scoreRender();
        }
    }
}


const lastQuestion = questions.length - 1;

let runningQuestion = 0;


function checkAnswer(answer) {
    if (question[runningQuestionIndex].correct == answer) {
        score++;
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    if (runningQuestionIndex < lastQuestionIndex) {


    } else {
        clearInterval(TIMER);
        scoreRender();

    };
}

    function answerIsCorrect() {
        document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
    }

    function answerIsWrong() {
        document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
    }

    function scoreRender() {
        scoreContainer.style.display = "block"
        let scorePerCent = Math.round(100 * score / questions.length);
    }


}
