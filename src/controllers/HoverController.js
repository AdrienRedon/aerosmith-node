const Control = require('../control');

class HoverController {
  static takeOffAndHover() {
    console.log('taking off ...');

    const ref = {
      fly: true,
      emergency: false,
    };
    Control.execute(ref);

    setTimeout(() => {
      console.log('lower altitude');

      const pcmd = {
        down: 0.5,
      };
      Control.execute(ref, pcmd);
    }, 1000);

    setTimeout(() => {
      console.log('hover near ground');

      const pcmd = {
        down: 0,
      };
      Control.execute(ref, pcmd);
    }, 1800);
  }

  static land() {
    console.log('landing ...');

    const ref = {
      fly: false,
    };
    Control.execute(ref);
  }

  static blinkLed() {
    console.log('leds blinking');

    Control.blinkLed();
  }
}

module.exports = HoverController;
