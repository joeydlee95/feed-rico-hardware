"use strict";

const mraa = require('mraa'); // require mraa
console.log('MRAA Version: ' + mraa.getVersion()); // write the mraa version to the console

let myLed = new mraa.Gpio(13); // positive LED hooked up to pin 13
myLed.dir(mraa.DIR_OUT); // set gpio direction to output
let ledState = true; // Boolean to hold the state of LED

function periodicActivity() {
  myLed.write(ledState ? 1 : 0);
  ledState = !ledState;
}

try {
  setInterval(periodicActivity, 1000);
}
catch(err) {
  if (ledState == true) {
    myLed.write(0);
  }
  console.log('Turning off LED.');
}

