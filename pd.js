var myfunc = null;
var startMin = 25;
var audio = new Audio("alarm.mp3");
function countdown() {
  audio.pause();
  //get the min and sec to start
  var min = parseInt(document.getElementById("minutes").textContent);
  var sec = parseInt(document.getElementById("seconds").textContent);
  var timeleft = min * 60 + sec - 1;
  if (timeleft > 0) {
    myfunc = setInterval(time, 1000);
    function time() {
      var minutes = Math.floor(timeleft / 60);
      var seconds = Math.floor(timeleft % 60);
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;

      if (seconds < 10) {
        document.getElementById("seconds").textContent = "0" + seconds;
      }
      if (timeleft <= 0) {
        clearInterval(myfunc);
        document.getElementById("encourage").textContent = "TIME'S UP!";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "00";
        audio.play();
      }
      timeleft--;
    }
  }
}

function pause() {
  clearInterval(myfunc);
  audio.pause();
}

function timeSet(minute) {
  audio.pause();
  clearInterval(myfunc);
  document.getElementById("encourage").textContent = "YOU GOT THIS!";
  startMin = minute;
  document.getElementById("minutes").textContent = minute;
  document.getElementById("seconds").textContent = "00";
}

function startover() {
  audio.pause();
  clearInterval(myfunc);
  document.getElementById("encourage").textContent = "YOU GOT THIS!";
  document.getElementById("minutes").textContent = startMin;
  document.getElementById("seconds").textContent = "00";
}
