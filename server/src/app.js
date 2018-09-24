var a = 2 + 9
console.log(a + 'okkkkkk')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({ message: `olá ${req.body.email}! seu usuario foi registrado` })
})

app.listen(process.env.PORT || 8081)