console.log("welcome to music player");

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");

let isPause = false;
let isPlay = false;
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (isPlay) {
    controlIcon.src = "icons/play-circle.svg";
    isPause = true;
    isPlay = false;
    song.pause();
    console.log("first " + isPause, isPlay);
    return;
  }
  if (isPause) {
    controlIcon.src = "icons/pause-circle.svg";
    isPause = false;
    isPlay = true;
    console.log("second" + isPlay, isPause);
    song.play();
    return;
  }
  controlIcon.src = "icons/pause-circle.svg";
  isPlay = true;
  song.play();
}

setInterval(() => {
  progress.value = song.currentTime;
}, 500);

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  controlIcon.src = "icons/pause-circle.svg";
  isPause = false;
  isPlay = true;
};
