const questions = document.getElementById("questions");
const choice = Array.from (document.getElementsByClassName("choice-text"));
// const startGame =
const correct_Bonus = 10;
const max_Questions = 10;
let currentQuestions = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


    availableQuestions = () => [{
      questions: "17 + 1 = ?",

        choiceA: "q",

        choiceB: "18",

        choiceC: "9",

        choiceD: "x",

        correct: "B",
 },
    {

        questions: "10 + 19 = ?",

        choiceA: "29",

        choiceB: "17",

        choiceC: "7",

        choiceD: "None of the above",

        correct: "C",

    },
    {
        questions: "2 * 2 = ?",

        choiceA: "4",

        choiceB: "6",

        choiceC: "d",

        choiceD: "z",

        correct: "C",

    }, 
    {

        questions: "10 * 19 = ?",

        choiceA: "29",

        choiceB: "190",

        choiceC: "a",

        choiceD: "None of the above",

        correct: "C",

    }, 
    {

        questions: "150 + 18 = ?",

        choiceA: "178",

        choiceB: "6",

        choiceC: "15",

        choiceD: "168",

        correct: "B",

    }, {

        questions: "2 + 2 = ?",

        choiceA: "g",

        choiceB: "d",

        choiceC: "4",

        choiceD: "22",

        correct: "C"

    }, {

        questions: "4 + xy = ?",

        choiceA: "8xy",

        choiceB: "4boys",

        choiceC: "4x+y",

        choiceD: "none of the above",

        correct: "B",

    }, 
    {

        questions: "x + yz = ?",

        choiceA: "eyz",

        choiceB: "xyz",

        choiceC: "abc",

        choiceD: "123",

        correct: "A",

    }, {

        questions: "11 + 11 = ?",

        choiceA: "9",

        choiceB: "6",

        choiceC: "4",

        choiceD: "22",

        correct: "C",

    }, {

        questions: "abc is easy as = ?",

        choiceA: "69",

        choiceB: "do re mi",

        choiceC: "407",

        choiceD: "123",

        correct: "D",

    }, 
    {

        questions: "123xyz + abc = ?",

        choiceA: "abc123xyz",

        choiceB: "123abcxyz",

        choiceC: "123xyzabc",

        choiceD: "all of the above",

        correct: "B",

    }, 
    {

        questions: "3 * 3 = ?",

        choiceA: "9",

        choiceB: "6",

        choiceC: "i",

        choiceD: "n",

        correct: "C",

    }, {

        questions: "5 * 2 = ?",

        choiceA: "10",

        choiceB: "g",

        choiceC: "4",

        choiceD: "j",

        correct: "D",

    },
    {

        questions: "44 + 0 = ?",

        choiceA: "h",

        choiceB: "220",

        choiceC: "8",

        choiceD: "none of the above",

        correct: "C",

    }, 
    {

        questions: "99 * 1 = ?",

        choiceA: "9",

        choiceB: "99",

        choiceC: "i",

        choiceD: "100",

        correct: "C",

  }];
// CONSTANTS

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
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
        const selectedAnswer = selectedChoice.dataset["choice"];
        console.log(selectedAnswer);
        getNewQuestion();
    });
});


startGame();
