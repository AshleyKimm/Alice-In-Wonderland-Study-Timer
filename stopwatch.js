let timer = 0;

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;

function timeDisplay() {
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}

startButton.onclick = function() {
    if (!timer) {
        timer = setInterval(function () {
            seconds++;
            if (seconds === 60) {
                minutes ++;
                seconds = 0;
            }
            if (minutes === 60) {
                hours ++;
                minutes = 0;
            }
            timeDisplay();
        }, 1000);
    }
}

stopButton.onclick = function() {
    clearInterval(timer);
    timer = null;
}

resetButton.onclick = function () {
    clearInterval(timer);
    timer = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    
    timeDisplay();
}

