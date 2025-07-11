const minute = document.getElementById("minuteTimer");
const second = document.getElementById("secondTimer");
// var sec = 0;
// var min = 0;
// let intervalId;
// minute.innerHTML = "0" + min;
// second.innerHTML = "0" + sec;

// function startWatch() {
//   console.log("start");

//   intervalId ??= setInterval(() => {
//     if (sec === 10) {
//       min++;
//       setTime(min, sec);
//       sec = 0;
//     }
//     setTime(min, sec);
//     sec++;
//   }, 1000);
// }
// function stopWatch() {
//   console.log("stop");
//   console.log(min, sec);
//   clearInterval(intervalId);
//   intervalId = null;
// }
// function resetWatch() {
//   console.log("reset");
//   min = 0;
//   sec = 0;
//   setTime(min, sec);
// }
// function setTime(min, sec) {
//   min < 10 ? (minute.innerHTML = "0" + min) : (minute.innerHTML = min);
//   sec < 10 ? (second.innerHTML = "0" + sec) : (second.innerHTML = sec);
// }

// document.getElementById("btnStart").addEventListener("click", startWatch);
// document.getElementById("btnStop").addEventListener("click", stopWatch);
// document.getElementById("btnReset").addEventListener("click", resetWatch);
let interval = null;
let secondsElapsed = 0;
const time = document.getElementById("time");
function startClock() {
  if (interval) stopClock();
  interval = setInterval(timer, 1000);
}
function timer() {
  secondsElapsed++;
  setTime();
}
function setTime() {
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;
  time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}
function padStart(value) {
  return String(value).padStart(2, "0");
}
function stopClock() {
  clearInterval(interval);
}
function resetClock() {
  stopClock();
  secondsElapsed = 0;
  setTime();
}

document.getElementById("btnStart").addEventListener("click", startClock);
document.getElementById("btnStop").addEventListener("click", stopClock);
document.getElementById("btnReset").addEventListener("click", resetClock);
