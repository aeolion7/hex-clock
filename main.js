function tick() {
  const date = new Date(Date.now());
  const hour = document.getElementById('hour');
  const minute = document.getElementById('minute');
  const second = document.getElementById('second');

  hour.textContent = validateLength(date.getHours());
  minute.textContent = validateLength(date.getMinutes());
  second.textContent = validateLength(date.getSeconds());
}

function validateLength(numStr) {
  return Number(numStr) < 10 ? '0' + numStr : numStr;
}

setInterval(tick, 1000);
