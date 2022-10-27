const buttons = document.querySelectorAll(".buttons button");
const scoreNumber = document.querySelector("#scoreNumber");

const rvalue = document.querySelector("#rvalue");
const gvalue = document.querySelector("#gvalue");
const bvalue = document.querySelector("#bvalue");

let correctColorGlobal = "";

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

function ConsoleThis() {
  console.log(this.style.backgroundColor);
  if (this.style.backgroundColor === correctColorGlobal) {
    console.log("WIN");
  }
}

function calcutaleDaysBetweenDates(begin, end) {

}


buttons.forEach((button) => {
  button.style.backgroundColor = generateColorRgb();
  button.addEventListener("click", ConsoleThis);
});

function generateCorrectColor() {
  const numberOfAnswer = Math.floor(Math.random() * 5) + 1;
  const buttonId = `#btn${numberOfAnswer}`;
  const correctColor = document.querySelector(buttonId).style.backgroundColor;

  correctColorGlobal = correctColor;

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

generateCorrectColor();
