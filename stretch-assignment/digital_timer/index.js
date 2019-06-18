const startButton = document.createElement("button");
const body = document.querySelector("body");
body.appendChild(startButton);

const resetButton = document.createElement("button");
body.appendChild(resetButton);
const buttonArray = [startButton, resetButton];

buttonArray.forEach(element => (element.style.color = "black"));
buttonArray.forEach(element => (element.style.border = "2px solid black"));
buttonArray.forEach(element => (element.style.padding = "10px 40px 10px 40px"));
buttonArray.forEach(element => (element.style.fontSize = "20px"));
buttonArray.forEach(element => (element.style.marginTop = "20px"));
buttonArray.forEach(element => (element.style.backgroundColor = "white"));

startButton.textContent = "Start";
resetButton.textContent = "Reset";
body.style.flexDirection = "column";

var counterIntervalId = null;

startButton.addEventListener("click", event => {
  startTimer(startButton);
  startButton.disabled = true;
});

resetButton.addEventListener("click", event => {
  if (counterIntervalId != null) {
    clearInterval(counterIntervalId);
    startButton.disabled = false;

    const secondTens = document.querySelector("#secondTens");
    const secondOnes = document.querySelector("#secondOnes");
    const msHundreds = document.querySelector("#msHundreds");
    const msTens = document.querySelector("#msTens");

    secondTens.textContent = "0";
    secondOnes.textContent = "0";
    msHundreds.textContent = "0";
    msTens.textContent = "0";

    counterIntervalId = null;
  }
});

function startTimer(button) {
  counterIntervalId = setInterval(updateDigits, 10);
  var ms = 0;

  const digits = document.querySelectorAll(".digit");
  digits.forEach(digit => (digit.style.color = "black"));

  function updateDigits() {
    var remainder = ms;

    if (ms > 10000) {
      clearInterval(counterIntervalId);
    } else {
      const _secondTens = Math.floor(ms / 10000);
      remainder = remainder % 10000;

      const _secondOnes = Math.floor(remainder / 1000);
      remainder = remainder % 1000;

      const _msHundreds = Math.floor(remainder / 100);
      remainder = remainder % 100;

      const _msTens = Math.floor(remainder / 10);
      remainder = remainder % 10;

      const secondTens = document.querySelector("#secondTens");
      const secondOnes = document.querySelector("#secondOnes");
      const msHundreds = document.querySelector("#msHundreds");
      const msTens = document.querySelector("#msTens");

      secondTens.textContent = _secondTens.toString();
      secondOnes.textContent = _secondOnes.toString();
      msHundreds.textContent = _msHundreds.toString();
      msTens.textContent = _msTens.toString();

      if (ms === 10000) {
        const digits = document.querySelectorAll(".digit");
        digits.forEach(digit => (digit.style.color = "red"));
        button.disabled = false;
      }

      ms += 10;
    }
  }
}
