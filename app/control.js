'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arDrone = require('ar-drone');
var control = arDrone.createUdpControl();

var Control = function () {
  function Control() {
    _classCallCheck(this, Control);
  }

  _createClass(Control, null, [{
    key: 'execute',
    value: function execute(ref, pcmd) {
      control.ref(ref);
      control.pcmd(pcmd);
      control.flush();
    }
  }]);

  return Control;
}();

module.exports = Control;