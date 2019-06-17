var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("digits").innerHTML = t;
}

var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
  seconds--;
  document.getElementById("countdown").textContent = seconds;
  if (seconds <= 0) clearInterval(countdown);
}, 1000);
