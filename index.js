const express = require('express')
const fs = require('node:fs')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json())

app.post('/endpoint', (req, res) => {
    fs.appendFile('./public/Database/Users.txt', req.body.wert, (err) => {
        if (err) throw err
        console.log('fertig')
    })
})

app.use('/Logic/DatabaseHandler.js', function(req, res, next) {
  res.status(403).send('Zugriff verweigert');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})