const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
        {
            "question": "17 * 1 = ?",
    
            "choice1": "q",
    
            "choice2": "18",
    
            "choice3": "9",
    
            "choice4": "x",
    
            "answer": "1",
        },
        {
    
            "question": "10 + 19 = ?",
    
            "choice1": "29",
    
            "choice2": "17",
    
            "choice3": "7",
    
            "choice4": "None of the above",
    
            "answer": "3",
    
        },
        {
            "question": "2 * 2 = ?",
    
            "choice1": "4",
    
            "choice2": "6",
    
            "choice3": "d",
    
            "choice4": "z",
    
            "answer": "d",
    
        },
        {
    
            "question": "10 * 19 = ?",
    
            "choice1": "29",
    
            "choice2": "190",
    
            "choice3": "a",
    
            "choice4": "None of the above",
    
            "answer": "3",
    
        },
        {
    
            "question": "150 + 18 = ?",
    
            "choice1": "178",
    
            "choice2": "6",
    
            "choice3": "15",
    
            "choice4": "168",
    
            "answer": "6",
    
        }, {
    
            "question": "2 + 2 = ?",
    
            "choice1": "g",
    
            "choice2": "d",
    
            "choice3": "4",
    
            "choice4": "22",
    
            "answer": "4"
    
        }, {
    
            "question": "4 + xy = ?",
    
            "choice1": "8xy",
    
            "choice2": "4boys",
    
            "choice3": "4x+y",
    
            "choice4": "none of the above",
    
            "answer": "4boys",
    
        },
        {
    
            "question": "x + yz = ?",
    
            "choice1": "eyz",
    
            "choice2": "xyz",
    
            "choice3": "abc",
    
            "choice4": "123",
    
            "answer": "eyz",
    
        }, {
    
            "question": "11 + 11 = ?",
    
            "choice1": "9",
    
            "choice2": "6",
    
            "choice3": "4",
    
            "choice4": "22",
    
            "answer": "4",
    
        }, {
    
            "question": "abc is easy as = ?",
    
            "choice1": "69",
    
            "choice2": "do re mi",
    
            "choice3": "407",
    
            "choice4": "123",
    
            "answer": "123",
    
        },
        {
    
            "question": "123xyz + abc = ?",
    
            "choice1": "abc123xyz",
    
            "choice2": "123abcxyz",
    
            "choice3": "123xyzabc",
    
            "choice4": "all of the above",
    
            "answer": "123abcxyz",
    
        },
        {
    
            "question": "3 * 3 = ?",
    
            "choice1": "9",
    
            "choice2": "6",
    
            "choice3": "i",
    
            "choice4": "n",
    
            "answer": "i",
    
        }, {
    
            "question": "5 * 2 = ?",
    
            "choice1": "10",
    
            "choice2": "g",
    
            "choice3": "4",
    
            "choice4": "j",
    
            "answer": "j",
    
        },
        {
    
            "question": "44 + 0 = ?",
    
            "choice1": "h",
    
            "choice2": "220",
    
            "choice3": "8",
    
            "choice4": "none of the above",
    
            "answer": "8",
    
        },
        {
    
            "question": "99 * 1 = ?",
    
            "choice1": "9",
    
            "choice2": "99",
    
            "choice3": "i",
    
            "choice4": "100",
    
            "answer": "i",
    
        }];
//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    //   console.log(availableQuesions);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);

        //go to the end page
        return window.location.assign("./end.html");
    }
    questionCounter++;
    progressText.innerText = ` Question ${questionCounter}/${MAX_QUESTIONS}`;

    //Update the progress bar
    //console.log((questionCounter/MAX_QUESTIONS) * 100);
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        // console.log(selectedAnswer == currentQuestion.answer);

        const classToApply =
            selectedAnswer == currentQuestion.answer ? '"answer"' : 'incorrect';
        // console.log(classToApply)

        if (classToApply === ""answer"") {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);//wait for 1000 miliseconds(1second)
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();