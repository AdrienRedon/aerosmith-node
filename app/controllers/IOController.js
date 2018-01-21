'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var socketIO = require('socket.io');
var SerialPort = require('serialport');
var Control = require('../control');

var portName = 'COM3'; // change this to your Arduino port name
var serialport = void 0;

var IOController = function () {
  function IOController() {
    _classCallCheck(this, IOController);
  }

  _createClass(IOController, null, [{
    key: 'listenCommand',
    value: function listenCommand(server) {
      var io = socketIO.listen(server);
      serialport = new SerialPort(portName, {
        baudRate: 9600,
        // defaults for Arduino serial communication
        dataBits: 8,
        parity: 'none',
        stopBits: 1,
        flowControl: false
      });
      var receivedData = '';

      serialport.on('open', function () {
        console.log('serial port open');
      });

      // transmit command to arduino
      io.on('connection', function (socket) {
        console.log('socket open');
        socket.on('command', function (data) {
          console.log(data);
          serialport.write('command');
        });
      });
    }
  }]);

  return IOController;
}();

module.exports = IOController;