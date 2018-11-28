function tick() {
  const date = new Date(Date.now());
  const hourElement = document.getElementById('hour');
  const minuteElement = document.getElementById('minute');
  const secondElement = document.getElementById('second');

  const hours = validateLength(date.getHours());
  const minutes = validateLength(date.getMinutes());
  const seconds = validateLength(date.getSeconds());

  hourElement.textContent = hours;
  minuteElement.textContent = minutes;
  secondElement.textContent = seconds;

  document.querySelector(
    'body'
  ).style.backgroundColor = `#${seconds}${seconds}${seconds}`;

  document.getElementById(
    'center'
  ).style.backgroundColor = `#${hours}${minutes}${seconds}`;
}

function validateLength(numStr) {
  return Number(numStr) < 10 ? '0' + numStr : numStr;
}

function init() {
  tick();
}

init();
setInterval(tick, 1000);
