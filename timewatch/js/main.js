let startTime;
let elapsedTime = 0;
let timerInterval;
let paused = true;

function timeToString(time) {
  let mins = Math.floor((time / (1000 * 60)) % 60);
  let secs = Math.floor((time / 1000) % 60);
  let mss = Math.floor((time % 1000) / 10);

  let formattedMins = mins.toString().padStart(2, "0");
  let formattedSecs = secs.toString().padStart(2, "0");
  let formattedMss = mss.toString().padStart(2, "0");

  return `${formattedMins}:${formattedSecs}:${formattedMss}`;
}

function print(txt) {
  document.getElementById("time-display").innerHTML = txt;
}

function start() {
  if (pause) {
    pause = false;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 50);
  }
}

function pause() {
  if (!pause) {
    pause = true;
  }
  clearInterval(timerInterval);
}

function reset() {
  pause = true;
  clearInterval(timerInterval);
  elapsedTime = 0;
  print("00:00:00");
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("reset").addEventListener("click", reset);
