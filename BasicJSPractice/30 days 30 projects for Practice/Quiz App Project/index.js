console.log("Quiz app");

const quiz = [
  {
    question: "1. Sign your name _______ the dotted line.",
    answer: {
      a: "after",
      b: "behind",
      c: "on",
    },
    correct: "a",
  },
  {
    question:
      "2. When we flew _______ the clouds, we could see the earth's surface.",
    answer: { a: "in", b: "in", c: "below" },
    correct: "a",
  },
  {
    question: "3. Can I sit _______ you at the movie theatre?",
    answer: { a: "beside", b: "beside", c: "inside" },
    correct: "a",
  },
  {
    question: "4. The kids are playing _______ the backyard.",
    answer: { a: "on", b: "on", c: "in" },
    correct: "a",
  },

  {
    question: "5. Your glasses are right _______ you.",
    answer: { a: "on", b: "on", c: "in" },
    correct: "a",
  },

  {
    question: "6. You can pick up your keys _______ the front desk.",
    answer: { a: "at", b: "at", c: "over" },
    correct: "a",
  },

  {
    question: "7. Let's meet _______ the front door.",
    answer: { a: "at", b: "at", c: "below" },
    correct: "a",
  },

  {
    question: "8. There's a helicopter hovering _______ our house.",
    answer: { a: "on", b: "on", c: "under" },
    correct: "a",
  },
  {
    question: "9. Didn't you park your car _______ mine?",
    answer: { a: "at", b: "at", c: "behind" },
    correct: "a",
  },
  {
    question: "10. Please stay _______ the police caution tape.",
    answer: { a: "a", b: "ab", c: "ac" },
    correct: "a",
  },
];

let name = "";
let currentQuestionIndex = 0;
let mark = 0;
let answers = [];

let startDiv = document.querySelector(".start");
let quizDiv = document.querySelector(".quiz");
// let startDiv = document.querySelector(".start");
function letsStart() {
  name = document.getElementById("inputName").value;
  console.log(name);
  startDiv.style.display = "none";
  renderQuestion();
  quizDiv.style.display = "block";
}

function renderQuestion() {
  document.querySelector(".question").innerHTML =
    quiz[currentQuestionIndex].question;
  // document.querySelector(".btn1").innerHTML =
  //   quiz[currentQuestionIndex].answer["a"];
  // document.querySelector(".btn2").innerHTML =
  //   quiz[currentQuestionIndex].answer["b"];
  // document.querySelector(".btn3").innerHTML =
  //   quiz[currentQuestionIndex].answer["c"];
  resetState();
  for (const [key, value] of Object.entries(
    quiz[currentQuestionIndex].answer
  )) {
    const button = document.createElement("button");
    button.innerHTML = value;
    button.classList.add("btn");
    document.querySelector(".btn-answer").append(button);
    button.addEventListener("click", selectAnswer);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target.innerHTML;
  answers.push(selectBtn);
  console.log(selectBtn);
  Array.from(document.querySelector(".btn-answer").children).forEach(
    (button) => {
      button.disabled = true;
    }
  );
  document.querySelector(".action").style.display = "block";
}

function resetState() {
  document.querySelector(".action").style.display = "none";
  while (document.querySelector(".btn-answer").firstChild) {
    document
      .querySelector(".btn-answer")
      .removeChild(document.querySelector(".btn-answer").firstChild);
  }
}
function getMark() {
  console.log(answers);
  for (const [key, value] of Object.entries(quiz)) {
    console.log(key, value);
    let cor = value.correct;

    if (answers[key] === value.answer[cor]) {
      mark++;
      console.log(mark);
    }
  }

  console.log("first", mark);
  alert(
    `Hello, Dear ${name}, thank you, Your mark is ${mark} finger crossed for you`
  );

  mark = 0;
  name = "";
  currentQuestionIndex = 0;
  document.getElementById("inputName").value = name;
  startDiv.style.display = "block";
  quizDiv.style.display = "none";
}
function handleNextQuestion() {
  currentQuestionIndex++;
  renderQuestion();
}
document.querySelector(".btnNext").addEventListener("click", () => {
  if (currentQuestionIndex < quiz.length - 1) {
    handleNextQuestion();
  } else {
    getMark();
  }
});
document
  .getElementsByClassName("btnStart")[0]
  .addEventListener("click", letsStart);
