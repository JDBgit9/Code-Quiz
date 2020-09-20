const questions = document.getElementById("questions");
const choice = Array.from (document.getElementsByClassName("choice-text"));

let currentQuestions = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let question = [ {
         question: "17 * 1 = ?",

        choiceA: "g",

        choiceB: "k",

        choiceC: "q",

        choiceD: "x",

        correct: "C",

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

        correct: "C",

    }, {

        question: "10 + 19 = ?",

        choiceA: "29",

        choiceB: "17",

        choiceC: "7",

        choiceD: "None of the above",

        correct: "C",

    }, {

        question: "17 * 1 = ?",

        choiceA: "g",

        choiceB: "k",

        choiceC: "q",

        choiceD: "x",

        correct: "C",

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

        correct: "B"

    }, {

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

    }, {

        question: "123xyz + abc = ?",

        choiceA: "abc123xyz",

        choiceB: "123abcxyz",

        choiceC: "123xyzabc",

        choiceD: "all of the above",

        correct: "B"

    }, {

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

        correct: "D"

    },
    {

        question: "44 + 0 = ?",

        choiceA: "h",

        choiceB: "220",

        choiceC: "8",

        choiceD: "none of the above",

        correct: "C",

    }, {

        question: "99 * 1 = ?",

        choiceA: "9",

        choiceB: "99",

        choiceC: "i",

        choiceD: "100",

        correct: "C"

    }

];
// CONSTANTS
const correct_Bonus = 10;
const max_Questions = 15;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...question];
    console.log(availableQuestions);
    getNewQuestion();
    
};

getNewQuestion = () => {  
    if (availableQuestions.length === 0 || questionCounter >= max_Questions){

    }
    questionCounter++;
    Math.floor(Math.random() * availableQuestions.length);
    currentQuestions = availableQuestions[questionCounter];
    questions.innerText = currentQuestions;


    choice.forEach(choice => {
        const number = choice.dataset["number"];
        question.innerText = currentQuestions["choice-text" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choice.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    });
});







startGame();
