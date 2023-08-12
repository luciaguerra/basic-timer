let timeBegan = null;
let timeStopped = null;
let stoppedDuration = 0;
let startInterval = null;
let flag = false;

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
const timerDisplay = document.getElementById("timer-display");


startBtn.addEventListener("click", function(){
    if(!flag){
        startTimer();
        flag = true;
    } else {
        stopTimer();
        flag = false;
    }
});

stopBtn.addEventListener("click", function(){
    stopTimer();
});

resetBtn.addEventListener("click", function(){
    resetTimer();
});

function clockRunning(){
    let currentTimer = new Date();
    let timeElapsed = new Date(currentTimer - timeBegan - stoppedDuration);
    
    let hours = timeElapsed.getUTCHours();
    let minutes = timeElapsed.getUTCMinutes();
    let seconds = timeElapsed.getUTCSeconds();

    timerDisplay.textContent = (hours = hours < 10 ? '0' + hours:hours) + ":" + (minutes = minutes < 10 ? '0' + minutes:minutes) + ":" + (seconds = seconds < 10 ? '0' + seconds:seconds);
}

function startTimer() {
    if(timeBegan === null){
        timeBegan = new Date();
    }

    if(timeStopped !== null){
        stoppedDuration += (new Date() - timeStopped);
    }

    startInterval = setInterval(clockRunning, 10);
}

function stopTimer() {
    timeStopped = new Date();
    clearInterval(startInterval);
}

function resetTimer() {
    clearInterval(startInterval);
    timeBegan = null;
    timeStopped = null;
    stoppedDuration = 0;
    timerDisplay.innerHTML = "00:00:00";
    flag = false;
}