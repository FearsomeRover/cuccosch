const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

require('./routing/index')(app);
app.use((err, req, res, next) => {
  res.end('Valami szar');
  console.log(err);
});
app.listen(3000, () => {
  console.log('Running on :3000');
});
// const CuccModel = require("./models/cucc")
// let a = new CuccModel();
// a.name = "asd";
// a.place = 123;
// a.elerheto = false;
// a.save(err=>{
//   if(err){
//     console.log("err");
//   }
//   console.log(a);
//   // return res.redirect('/');
// });