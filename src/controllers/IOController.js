const socketIO = require('socket.io');
const Control = require('../control');
const Gpio = require('pigpio').Gpio;

const direction = new Gpio(18, {mode: Gpio.OUTPUT});
const speed = new Gpio(17, {mode: Gpio.OUTPUT});

class IOController {
  static listenCommand(server) {
    const io = socketIO.listen(server);
    // transmit command to gpio
    io.on('connection', (socket) => {
      console.log('socket open')
      socket.on('command', (data) => {
        const x = data.x
        const y = data.y

        // x and y between -75 and 75
        direction.servoWrite(1500 + y * 500/75);
        speed.servoWrite(1500 + x * 500/75);

        console.log(data);
      });
    });
  }
}

module.exports = IOController;
