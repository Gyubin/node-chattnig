const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', function(req, res) {
  res.sendfile('client.html')
})

app.listen('3000', function () {
  console.log('server is running.')
})
