let timer = 0;

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let secondsInput = document.getElementById("secondsInput");

let hours = 0;
let minutes = 0;
let seconds = 0;

hoursInput.addEventListener("input", handleTimeInput);
minutesInput.addEventListener("input", handleTimeInput);
secondsInput.addEventListener("input", handleTimeInput);

function timeDisplay() {
    hoursInput.value = String(hours).padStart(2, "0");
    minutesInput.value = String(minutes).padStart(2, "0");
    secondsInput.value = String(seconds).padStart(2, "0");
}

function handleTimeInput () {
    hours = parseInt(hoursInput.value) || 0;
    minutes = parseInt(minutesInput.value) || 0;
    seconds = parseInt(secondsInput.value) || 0;

    if (minutes > 59) {
        minutes = 59;
        minutesInput.value = 59;
    }

    if (seconds > 59) {
        seconds = 59;
        secondsInput.value = 59;
    }
    timeDisplay();
}
startButton.onclick = function() {
    if (seconds === 0 && minutes === 0 && hours === 0) return;

    hoursInput.disabled = true;
    minutesInput.disabled = true;
    secondsInput.disabled = true;
    
    if (!timer) {
        timer = setInterval(function () {
            if (seconds === 0 && minutes > 0) {
                minutes --;
                seconds = 60;
            }
            if (minutes === 0 && hours > 0) {
                hours --;
                minutes = 59;
            }
            seconds--;
            timeDisplay();
        }, 1000);
    }
}

stopButton.onclick = function () {

    hoursInput.disabled = false;
    minutesInput.disabled = false;
    secondsInput.disabled = false;

    clearInterval(timer);
    timer = null;
}

resetButton.onclick = function () {

    hoursInput.disabled = false;
    minutesInput.disabled = false;
    secondsInput.disabled = false;

    clearInterval(timer);
    timer = null;
    hours = 0;
    minutes = 0;
    seconds = 0;

    timeDisplay();
}

