var id = setInterval(updateDigits, 10);
var ms = 0;

function updateDigits() {
  var remainder = ms;

  if (ms > 10000) {
    clearInterval(id);
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
    }

    ms += 10;
  }
}
