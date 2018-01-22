'use strict';

var http = require('http');
var express = require('express');
var IOController = require('./src/controllers/IOController');
var HoverController = require('./src/controllers/HoverController');

var app = express();
var port = 1337;

// taking off and landing command

app.post('/takeoff', function (request, response) {
  HoverController.takeOff();
  response.status(200).json({ flying: true });
});

app.post('/land', function (request, response) {
  HoverController.land();
  response.status(200).json({ landed: true });
});

app.post('/blink', function (request, response) {
  HoverController.blinkLed();
  response.status(200).json({ blink: true });
});

app.get('/healthz', function (request, response) {
  response.status(204).json({});
});

var server = http.createServer(app);
IOController.listenCommand(server);
server.listen(port);
console.log('Express listening on port ' + port);
