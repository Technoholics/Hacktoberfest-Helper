'use strict';
const express = require('express')
const app = express()
const pug = require('pug');
const path = require('path');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 5000);
// process.env.PORT is for heroku to take port automatically
app.listen(app.get('port'), function () {
  console.log(`Hacktoberfest helper app listening on port ${app.get('port')}`)
})
app.get('/', function (req, res) {
  var details ={pageTitle:'Hacktoberfest Helper'}
  if(req.query.username!=='' && req.query.username!==undefined){
    details.pageTitle=req.query.username
    details.username=req.query.username
    console.log(details);
    res.send(pug.renderFile('./views/index.pug',details))
  }
  else{
    res.send(pug.renderFile('./views/index.pug', details))
  }
})
