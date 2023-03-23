
const progressBar = document.querySelector('.progress-bar');
const startStopButton = document.querySelector(".start-stop-button");

let progress = 0;
let intervalId;
let loading = false

function startProgress() {
  loading = true
  startStopButton.innerText = "Stop";

  intervalId = setInterval(() => {
    progress++;

    if (progress <= 100) {
      progressBar.style.width = `${progress}%`;

    }
    else {
      clearInterval(intervalId);
      progress = 0;
      loading = false
      progressBar.style.width = `${progress}%`;
      startStopButton.innerText = "Start";
    }
  }, 50);
}


function stopProgress() {
  clearInterval(intervalId);
  loading = false
  startStopButton.innerText = "Start";
}

startStopButton.addEventListener("click", () => {
  loading ? stopProgress() : startProgress()
});

setTimeout(startProgress)