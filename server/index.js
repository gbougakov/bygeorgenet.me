const express = require('express')
const path = require('path')
const app = express()

// Redirect to my new website
app.use((req, res) => {
  res.redirect('https://gbougakov.dev')
})

/*
app.use(express.static('../dist'))
app.use(express.static('/var/www/html'))

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
})
*/

app.listen(5056)
