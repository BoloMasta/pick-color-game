const buttons = document.querySelectorAll(".buttons button");
const scoreNumber = document.querySelector("#scoreNumber");

const rvalue = document.querySelector("#rvalue");
const gvalue = document.querySelector("#gvalue");
const bvalue = document.querySelector("#bvalue");

let correctColorGlobal = "";
let correctButtonIdGlobal = 0;
let score = 0;

const generateNumber = () => Math.floor(Math.random() * 256);

function generateColorRgb() {
  return (
    "rgb(" +
    generateNumber() +
    ", " +
    generateNumber() +
    ", " +
    generateNumber() +
    ")"
  );
}

function generateButtons() {
  buttons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("correct", "wrong");
    button.style.backgroundColor = generateColorRgb();
    button.addEventListener("click", resultFunction);
  });

  const correctButtonId = `#btn${Math.floor(Math.random() * 5) + 1}`;
  const correctColor =
    document.querySelector(correctButtonId).style.backgroundColor;

  correctColorGlobal = correctColor;
  correctButtonIdGlobal = correctButtonId;

  rvalue.innerHTML = correctColor.slice(4, correctColor.indexOf(","));
  gvalue.innerHTML = correctColor.slice(
    correctColor.indexOf(",") + 2,
    correctColor.indexOf(",", correctColor.indexOf(",") + 1)
  );
  bvalue.innerHTML = correctColor.slice(
    correctColor.indexOf(",", correctColor.indexOf(",") + 1) + 2,
    correctColor.indexOf(
      correctColor.indexOf(",", correctColor.indexOf(",") + 1),
      correctColor.indexOf(",") + 1
    )
  );
}

generateButtons();

function resultFunction() {
  if (this.style.backgroundColor === correctColorGlobal) {
    this.classList.add("correct");
    score++;
    scoreNumber.innerHTML = score;
    afterClick();
  } else {
    document.querySelector(correctButtonIdGlobal).classList.add("correct");
    this.classList.add("wrong");
    afterClick();
  }
}

function afterClick() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
  setTimeout(() => {
    generateButtons();
  }, 3000);
}
