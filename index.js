const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.status(200).sendFile(__dirname + '/public/joe-with-scooter.jpg')
})

// Start Server
app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})
