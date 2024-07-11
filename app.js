import { quizQuestions } from "./config.js";
console.log(quizQuestions);

let startquiz = document.querySelector(".startquiz");
let scoreDiv = document.querySelector(".score-div");
let scoreEl = document.querySelector(".score");

let scores = 0;


startquiz.addEventListener("click", () => {


  let startDiv = document.querySelector(".start-div");
  startDiv.style.display = "none";
  let quiz = document.querySelector(".container");
  quiz.style.display = "block";

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

});
