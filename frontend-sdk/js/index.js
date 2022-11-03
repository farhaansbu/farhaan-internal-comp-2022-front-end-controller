// writing the correct path is important, the ./ here means that `index.js` is in the same folder as methods.js
// otherwise, you would use the relative path. for example if `index.js` was in the same folder as `index.html`
// you would update the import to say `from "./js/methods.js"`
import {createArrow, createJoyStick} from "./methods.js"

// creates a left arrow under the div 'tutorial-right-arrow' with size 100px
createArrow('left', 'arrows', 64)

function joystickHandler(x, y) {
    console.log(x, y);
    // normally this would be a call to the built in function sendToBot(command: string)
    // but this function only exists on the raspberry pi
}

// creates a joystick 
const joystick = createJoyStick({
    baseSize: '192px',
    stickSize: '128px',
    baseColor: 'black',
    stickColor: 'white'
}, joystickHandler);

//adds the joystick to the page
joystick.base.id = "joystick-1";
document.getElementById("movement-controls").appendChild(joystick.base);