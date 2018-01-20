const arDrone = require('ar-drone');
const express = require('express');
const app = express();

const port = 1337;
const io = require('socket.io')(app);
const control = arDrone.createUdpControl();

function executeControl(ref, pcmd) {
  control.ref(ref);
  control.pcmd(pcmd);
  control.flush();
} 

// taking off and landing command

app.post('/takeoff', (request, response) => {
  console.log('taking off ...');

  const ref = {
    fly: true,
    emergency: false,
  };
  executeControl(ref);
  response.status(200).json({flying: true});
});

app.post('/land', (request, response) => {
  console.log('stopping activies and landing ...');

  const ref = {
    fly: false,
  };
  executeControl(ref);
  response.status(200).json({landed: true});
});

// control command by socket

io.on('connection', (socket) => {
  socket.on('command', (data) => {
    console.log(data);
  });
});

app.listen(port);
console.log(`Express listening on port ${port}`);
