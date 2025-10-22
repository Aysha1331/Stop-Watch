// Stopwatch
let swSeconds = 0, swMinutes = 0, swHours = 0;
let swInterval;
const swTime = document.getElementById('sw-time');
const laps = document.getElementById('laps');

function updateSwDisplay() {
  swTime.textContent =
    `${String(swHours).padStart(2,'0')}:${String(swMinutes).padStart(2,'0')}:${String(swSeconds).padStart(2,'0')}`;
}

document.getElementById('sw-start').onclick = () => {
  clearInterval(swInterval);
  swInterval = setInterval(() => {
    swSeconds++;
    if(swSeconds >= 60){ swSeconds=0; swMinutes++; }
    if(swMinutes >= 60){ swMinutes=0; swHours++; }
    updateSwDisplay();
  },1000);
};

document.getElementById('sw-pause').onclick = () => clearInterval(swInterval);

document.getElementById('sw-reset').onclick = () => {
  clearInterval(swInterval);
  swSeconds = swMinutes = swHours = 0;
  updateSwDisplay();
  laps.innerHTML = '';
};

document.getElementById('sw-lap').onclick = () => {
  const li = document.createElement('li');
  li.textContent = swTime.textContent;
  laps.appendChild(li);
};

// Timer
let timerSeconds = 0, timerInterval;
const timerDisplay = document.getElementById('timer-display');

function updateTimerDisplay() {
  const mins = Math.floor(timerSeconds/60);
  const secs = timerSeconds % 60;
  timerDisplay.textContent = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}

document.getElementById('timer-start').onclick = () => {
  const inputMins = parseInt(document.getElementById('timer-mins').value);
  if(!inputMins) return alert('Enter minutes!');
  if(timerInterval) clearInterval(timerInterval);
  timerSeconds = inputMins * 60;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    if(timerSeconds <= 0){
      clearInterval(timerInterval);
      alert('⏰ Timer finished!');
    } else {
      timerSeconds--;
      updateTimerDisplay();
    }
  },1000);
};

document.getElementById('timer-pause').onclick = () => clearInterval(timerInterval);

document.getElementById('timer-reset').onclick = () => {
  clearInterval(timerInterval);
  timerSeconds = 0;
  updateTimerDisplay();
};
