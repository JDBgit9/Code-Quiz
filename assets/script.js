// Connecting elements form the page 
//Hook question element
var displayQuestionEl = document.querySelector(".display-questions")
//Hooking the timer element
var timerEl = document.querySelector(".timer")
var resultsEl = document.querySelector(".results")




var myEl = document.createElement("p");
myEl.textContent = "";
document.body.append(myEl);


var secondsLeft = 10;



// function setTime() [
//   var timer = setInterval(function() {
//      // count down by 1
//      seconds left - - ;
//      //update the page
//     timeEL.textContent = seconds left + “”;

//      If (secondsLeft === 0)  {
//         clearInterval(timer);
//         sendMessage();
//      }
//    }, 1000);

// }

// function sendMessage() {
//        timeEl.textContent = “ “;

// var imgEl = document.createElement(“img”);

// imgEl.setAttribute(“src”, “images/image.jpg”);
// mainEl.appendChild(imgEL);

// }

// setTime();


// function showQuestion(question) {
//     questionElement.innerText = question.question;
//     question.answers.forEach(answer => {
//         const button = document.createElement("button")
//         button.innerText = answer.text
//         button.classList.add("btn")
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener("click", () => {
//             currentQuestionIndex++
//             nextQuestion()
//         })
//         button.addEventListener("click", nextQuestion)
//         anwswerButtonsElement.appendChild(button)
//     });
// }