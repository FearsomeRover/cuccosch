const express = require('express');
const app = express();
app.use('/static', express.static('static'));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + "/static/index.html");
});

app.get('/tagok', (req, res, next) => {
  res.sendFile(__dirname + "/static/tagok.html");
});

app.get('/tagok/uj', (req, res, next) => {
  res.sendFile(__dirname + "/static/ujtag.html");
});

app.listen(3000, '192.168.2.220', () => {
  console.log('Running on :3000');
});

app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + "/static/style.css");

});
app.get('/logo.png', (req, res) => {
  res.sendFile(__dirname + "/static/logo.png");
});

app.get('/images/cuccosch.png', (req, res) => {
  res.sendFile(__dirname + "/images/cuccosch.png");
});