const express = require('express')
const app = express()

app.get('/', function (req, res) {
  var a=1;
  var b=2;
  var c=a+b;
  return res.send('Hello World')
})

app.listen(3000)