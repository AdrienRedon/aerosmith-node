
const Control = require('../control');

class HoverController {
  static takeOff() {
    console.log('taking off ...');

    exec('cat hover | telnet 192.168.1.1');
  }

  static land() {
    console.log('landing ...');

    const ref = {
      fly: false,
    };
    Control.execute(ref);
  }

}

module.exports = HoverController;
