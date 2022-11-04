import{createArrow, createJoyStick, createSlider} from "./methods.js"

createArrow('up', "grabber", 100)  
createArrow('down', "grabber", 100)  
document.getElementById("up-arrow").addEventListener("click", function(event) {
    console.log("up");
  });
  document.getElementById("down-arrow").addEventListener("click", function(event) {
    console.log("down");
  });



// creates a joystick 
const joystick = createJoyStick({
    baseSize: '192px',
    stickSize: '128px',
    baseColor: 'black',
    stickColor: 'white'
  }, function(x, y) {
    console.log(x, y);
  });
  joystick.base.id = "j1base"
  document.getElementById("movement").appendChild(joystick.base)
 
  createArrow('button1', "grabber", 120)

 document.getElementById("button1-arrow").addEventListener("click", function(event) {
    console.log("grabber");
  });


  createSlider("slider", "speed", 0, 2)
