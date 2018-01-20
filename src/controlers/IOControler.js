const socketIO = require('socket.io');
const Control = require('../control');

class IOControler {
  static listen(server) {
    let io = socketIO.listen(server);
    io.sockets.on('connection', (socket) => {
      socket.on('command', (data) => {
        console.log(data);
      });
    });
  }
}

module.exports = IOControler;
