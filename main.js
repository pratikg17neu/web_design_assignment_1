const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello INFO 6150 Web Design and User Experience Engineering');
})

app.listen(3000);