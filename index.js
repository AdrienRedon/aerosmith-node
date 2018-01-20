const http = require('http');
const express = require('express');
const IOController = require('./src/controllers/IOController');
const HoverController = require('./src/controllers/HoverController');

const app = express();
const port = 1337;

// taking off and landing command

app.post('/takeoff', (request, response) => {
  HoverController.takeOffAndHover();
  response.status(200).json({flying: true});
});

app.post('/land', (request, response) => {
  HoverController.land();
  response.status(200).json({landed: true});
});

app.post('/blink', (request, response) => {
  HoverController.blinkLed();
  response.status(200).json({blink: true});
});

app.get('/healthz', (request, response) => {
  response.status(204).json({});
});

const server = http.createServer(app);
IOController.listenCommand(server);
server.listen(port);
console.log(`Express listening on port ${port}`);
