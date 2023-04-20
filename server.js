const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

require('./routing/index')(app);
app.listen(3000, () => {
  console.log('Running on :3000');
});
