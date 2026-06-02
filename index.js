const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/es', (req, res) => {
  res.send('Hola Mundo')
})

app.get('/it', (req, res) => {
  res.send('Ciao mondo')
})
app.get('/jp', (req, res) => {
  res.send('こんにちは世界')
})

app.get('/ch', (req, res) => {
  res.send('你好，世界')
})


app.get('/rs', (req, res) => {
  res.send('Привет, мир')
})


app.get('/cr', (req, res) => {
  res.send('안녕하세요 세계')
})


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})