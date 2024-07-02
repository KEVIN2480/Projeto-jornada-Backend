const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
const express = require('express')
const app = express()

app.get('/oi', function (req, res) {
  res.send('Olá, mundo!')
})

app.listen(3000)