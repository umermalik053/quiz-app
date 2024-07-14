import { quizQuestions } from "./config.js";
console.log(quizQuestions);

let startquiz = document.querySelector(".startquiz");
let scoreDiv = document.querySelector(".score-div");
let scoreEl = document.querySelector(".score");
let questionout = document.querySelector(".qustion-out-of");
let questionNumber = document.querySelector(".q-number");
let startDiv = document.querySelector(".start-div");
let quiz = document.querySelector(".container");
let restart = document.querySelector(".Restart_Quiz");
let home = document.querySelector(".Home");
let questionEl = document.querySelector(".Question");

let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

let answers = document.querySelectorAll(".answer")

let next = document.querySelector("#next");

let scores = 0;
let currentQuestion = 0;



const render = () => {
  let questionindex = quizQuestions[currentQuestion].question;
  let options = quizQuestions[currentQuestion].options;
  questionEl.innerHTML = questionindex;

  for (let i = 0; i < options.length; i++) {
    let items = options[i];

    if (i == 0) {
      option1.innerHTML = items;
      document.getElementById('ans1').value = items;
    } else if (i == 1) {
      option2.innerHTML = items;
      document.getElementById('ans2').value = items;
    } else if (i == 2) {
      option3.innerHTML = items;
      document.getElementById('ans3').value = items;
    } else {
      option4.innerHTML = items;
      document.getElementById('ans4').value = items;
    }
  }


  



  questionout.innerHTML = `Question ${currentQuestion + 1} Out of ${
    quizQuestions.length
  }`;
  questionNumber.innerHTML = `Question ${currentQuestion + 1}`;
};

const startQuizFunc = () => {
  startDiv.style.display = "none";
  quiz.style.display = "block";
  scoreDiv.style.display = "none";

  render();

  questionout.innerHTML = `Question ${currentQuestion + 1} Out of ${
    quizQuestions.length
  }`;
  questionNumber.innerHTML = `Question ${currentQuestion + 1}`;

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
};

const deselectAll = () => {
  answers.forEach((currAnsElem) => currAnsElem.checked = false)
 
}

next.addEventListener("click", () => {

  const question = quizQuestions[currentQuestion];
  const correctAnswer = question.correctAnswer;
  let selectedAnswer;
  
  for (const answer of answers) {
    if (answer.checked) {
      selectedAnswer = answer.value;
      break;
    }
  }

  if (selectedAnswer === correctAnswer) {
    scores++;
  }


  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    deselectAll()
    render();
  } else {
    scoreDiv.style.display = "block";
    quiz.style.display = "none";
    scoreEl.innerHTML = `Your score is ${scores}`;
  }


});




home.addEventListener("click", () => {
  scoreDiv.style.display = "none";
  startDiv.style.display = "block";
  startDiv.style.margin = " auto";
});



restart.addEventListener("click", startQuizFunc);
startquiz.addEventListener("click", startQuizFunc);
