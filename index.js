const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.set('port', process.env.PORT || 5000); 
// process.env.PORT is for heroku to take port automatically
app.listen(app.get('port'), function () {
  console.log(`Hacktoberfest helper app listening on port ${app.get('port')}`)
})