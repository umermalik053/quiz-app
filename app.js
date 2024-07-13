import { quizQuestions } from "./config.js";
console.log(quizQuestions);

let startquiz = document.querySelector(".startquiz");
let scoreDiv = document.querySelector(".score-div");
let scoreEl = document.querySelector(".score");
let questionout = document.querySelector(".qustion-out-of")
let questionNumber = document.querySelector(".q-number")
let startDiv = document.querySelector(".start-div");
let quiz = document.querySelector(".container");
let restart = document.querySelector(".Restart_Quiz")
let home = document.querySelector(".Home")



let scores = 0;
let currentQuestion = 0;


const startQuizFunc = () => {


  
  startDiv.style.display = "none";
  quiz.style.display = "block";
  scoreDiv.style.display = "none"

  questionout.innerHTML = `Question ${currentQuestion + 1} Out of ${quizQuestions.length - 1 }`
  questionNumber.innerHTML = `Question ${currentQuestion + 1}`

  let timer = document.querySelector("#timer");

  let min = 1;
  let sec = 59;

  let interval = setInterval(() => {
    if (min === 0 && sec === 0) {
      clearInterval(interval);
      alert("Time's up! You lose!");
      scoreDiv.style.display = "block";
      quiz.style.display = "none";
      scoreEl.innerHTML = `Your score is ${scores}`;
    } else if (sec === 0) {
      min--;
      sec = 59;
    } else {
      sec--;
    }
    timer.innerHTML = `${min}:${sec}`;
  }, 1000);

}

home.addEventListener("click" , ()=>{
  scoreDiv.style.display = "none"
  startDiv.style.display = "block";
  startDiv.style.margin = " auto"


})

restart.addEventListener("click" , startQuizFunc)
startquiz.addEventListener("click", startQuizFunc );
