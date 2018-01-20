const socketIO = require('socket.io');
const SerialPort = require('serialport').SerialPort;
const Control = require('../control');

let serialport;

class IOController {
  static listenCommand(server) {
    const io = socketIO.listen(server);
    serialPort = new SerialPort(portName, {
	    baudrate: 9600,
	    // defaults for Arduino serial communication
	     dataBits: 8,
	     parity: 'none',
	     stopBits: 1,
	     flowControl: false
    });
    let receivedData = '';
    
    serialport.on('open', () => {
      console.log('serial port open');
    });

    // transmit command to arduino
    io.on('connection', (socket) => {
      console.log('socket open')
      socket.on('command', (data) => {
        console.log(data);
        serialport.write('command');
      });
    });
    
  }
}

module.exports = IOController;
