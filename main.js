function tick() {
  const date = new Date(Date.now());
  const hour = document.getElementById('hour');
  const minute = document.getElementById('minute');
  const second = document.getElementById('second');

  const firstTwo = validateLength(date.getHours());
  const midTwo = validateLength(date.getMinutes());
  const lastTwo = validateLength(date.getSeconds());

  hour.textContent = firstTwo;
  minute.textContent = midTwo;
  second.textContent = lastTwo;

  document.getElementById('center').style.backgroundColor = `#${firstTwo}${midTwo}${lastTwo}`;
}

function validateLength(numStr) {
  return Number(numStr) < 10 ? '0' + numStr : numStr;
}

setInterval(tick, 1000);
