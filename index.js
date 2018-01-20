const http = require('http');
const express = require('express');
const IOControler = require('./src/controlers/IOControler');
const HoverControler = require('./src/controlers/HoverControler');

const app = express();
const port = 1337;

// taking off and landing command

app.post('/takeoff', (request, response) => {
  HoverControler.takeOff();
  response.status(200).json({flying: true});
});

app.post('/land', (request, response) => {
  HoverControler.land();
  response.status(200).json({landed: true});
});

app.get('/healthz', (request, response) => {
  response.status(204).json({});
});

const server = http.createServer(app);
IOControler.listen(server);
server.listen(port);
console.log(`Express listening on port ${port}`);
