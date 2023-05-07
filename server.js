const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({
  secret: 'halloooooo',
  cookie: {secure: true}
}))

app.set('view engine', 'ejs');
require('./routing/index')(app);
app.use((err, req, res, next) => {
  res.end('Valami szar');
  console.log(err);
});

app.listen(3000, () => {
  console.log('Running on :3000');
});
