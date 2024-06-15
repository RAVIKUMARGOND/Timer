let display = document.getElementById('timer-display');
let start=document.querySelector('#start');
let stop=document.querySelector('#stop');
let reset=document.querySelector('#reset');

let timer;
let isRunning = false;
let seconds = 0;



function updateDisplay() {
    let minutes = Math.floor(seconds / 60);
    let displaySeconds = seconds % 60;

    if (minutes < 10) minutes = '0' + minutes;
    if (displaySeconds < 10) displaySeconds = '0' + displaySeconds;

    display.textContent = `${minutes}:${displaySeconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    updateDisplay();
}

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);

updateDisplay();