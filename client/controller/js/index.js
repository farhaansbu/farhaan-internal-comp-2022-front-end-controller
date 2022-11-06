import{createArrow, createJoyStick, createSlider} from "./methods.js"

var json = {direction: "", servo_direction: "", speed: 0, open: true}


createArrow('up', "grabber", 100)  
document.getElementById("up-arrow").addEventListener("click", function(event) {
  json.servo_direction = "up"
  sendToBot(json) 
  console.log("up");
  });

createArrow('down', "grabber", 100)  
  document.getElementById("down-arrow").addEventListener("click", function(event) {
    console.log("down");
    json.servo_direction= "down"
    sendToBot(json)
  });


createArrow("up1", "movement", 100)
document.getElementById("up1-arrow").addEventListener("click", function(event) {
  json.direction = "forward"
  sendToBot(json) 
});

createArrow("down1", "movement", 100)
document.getElementById("down1-arrow").addEventListener("click", function(event) {
  json.direction = "backward"
  sendToBot(json) 
});
  
createArrow("right", "movement", 100)
document.getElementById("right-arrow").addEventListener("click", function(event) {
  json.direction = "right"
  sendToBot(json) 
});

createArrow("left", "movement", 100)
document.getElementById("left-arrow").addEventListener("click", function(event) {
  json.direction = "left"
  sendToBot(json) 
});


// creates a joystick 
// const joystick = createJoyStick({
//     baseSize: '192px',
//     stickSize: '128px',
//     baseColor: 'black',
//     stickColor: 'white'
//   }, function(x, y) {
//     console.log(x, y);
//   });
//   joystick.base.id = "j1base"
//   document.getElementById("movement").appendChild(joystick.base)
 
  createArrow('button1', "grabber", 120)
 document.getElementById("button1-arrow").addEventListener("click", function(event) {
  json.open = !json.open;
  sendToBot(json)
  console.log("grabber");
  });

  createSlider("slider", "speed", 0, 2)
  document.getElementById("slider-")


