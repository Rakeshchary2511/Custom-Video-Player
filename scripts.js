const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//toggleVideoStatus
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//updatePlayIcon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<li class="fa fa-play fa-2x"></li>';
  } else {
    play.innerHTML = '<li class="fa fa-pause fa-2x"></li>';
  }
}

//setVideoProgress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

//updateProgress
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;
  //Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  //Get minutes
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

//stopVideo
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//Event Handlers
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);
