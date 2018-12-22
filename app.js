const express = require('express');
const app = express();
const path = require('path');
const { EventEmitter } = require('events');

const clock = new EventEmitter();
setInterval(() => {
  const time = new Date().toLocaleString();
  clock.emit('tick', time);
}, 1000);

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(1616, () => {
  console.log('Listening on port 1616...');
});
