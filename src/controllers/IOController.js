const socketIO = require('socket.io');
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
        data = JSON.parse(data);
        const x = 1450 + data.x * 500/70; // lower value to avoid going too fast 
        const y = 1500 + data.y * 500/75;

        // x and y between -75 and 75
        direction.servoWrite(y);
        speed.servoWrite(x);

        console.log(data);
      });
    });
  }
}

module.exports = IOController;
