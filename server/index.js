const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('assets'))
app.use(express.static('/var/www/html'))

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'index.html'))
})

app.listen(5056)
