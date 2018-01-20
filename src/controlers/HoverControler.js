const Control = require('../control');

class HoverController {
  static takeOff() {
    console.log('taking off ...');

    const ref = {
      fly: true,
      emergency: false,
    };
    Control.execute(ref);
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
