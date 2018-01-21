
const Control = require('../control');

class HoverController {
  static takeOff() {
    console.log('taking off ...');

    exec('cat hover | telnet 192.168.1.1');
  }

  static land() {
    console.log('landing ...');

    exec('cat land | telnet 192.168.1.1');
  }

}

module.exports = HoverController;
