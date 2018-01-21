const socketIO = require('socket.io');
const Control = require('../control');

class IOController {
  static listenCommand(server) {
    const io = socketIO.listen(server);
    // transmit command to gpio
    io.on('connection', (socket) => {
      console.log('socket open')
      socket.on('command', (data) => {
        console.log(data);
      });
    });
  }
}

module.exports = IOController;
