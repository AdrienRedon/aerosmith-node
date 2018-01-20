const arDrone = require('ar-drone');
const control = arDrone.createUdpControl();

class Control {
  static execute(ref, pcmd) {
    control.ref(ref);
    control.pcmd(pcmd);
    control.flush();
  }
}

module.exports = Control;