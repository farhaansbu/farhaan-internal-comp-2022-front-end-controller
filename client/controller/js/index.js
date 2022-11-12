import{createArrow, createJoyStick, createSlider} from "./methods.js"

var json = {direction: "", servo_direction: "", speed: 0, servo_open: ""}


createArrow('up', "grabber", 100)  
document.getElementById("up-arrow").addEventListener("touchstart", function(event) {
  json.servo_direction = "up"
  sendToBot(json) 
  console.log("up");
  });

createArrow('down', "grabber", 100)  
  document.getElementById("down-arrow").addEventListener("touchstart", function(event) {
    console.log("down");
    json.servo_direction= "down"
    sendToBot(json)
  });

  document.getElementById("down-arrow").addEventListener("touchend", function(event) {
    console.log("down");
    json.servo_direction= "stop"
    sendToBot(json)
  });
  


createArrow("up1", "movement", 100)

//Move forward
document.getElementById("up1-arrow").addEventListener("touchstart", function(event) {
  json.direction = "forward"
  sendToBot(json) 
});

document.getElementById("up1-arrow").addEventListener("touchend", function(event) {
  json.direction = "stop"
  sendToBot(json) 
});



createArrow("down1", "movement", 100)

//Move backward
document.getElementById("down1-arrow").addEventListener("touchstart", function(event) {
  console.log("down");
  json.direction = "backward"
  sendToBot(json)
});

document.getElementById("down1-arrow").addEventListener("touchend", function(event) {
  json.direction = "stop"
  sendToBot(json)
});
  
//Turn right
createArrow("right", "movement", 100)
document.getElementById("right-arrow").addEventListener("touchstart", function(event) {
  json.direction = "right"
  sendToBot(json) 
});

document.getElementById("right-arrow").addEventListener("touchend", function(event) {
  json.direction = "stop"
  sendToBot(json) 
});

//Turn left
createArrow("left", "movement", 100)
document.getElementById("left-arrow").addEventListener("touchstart", function(event) {
  json.direction = "left"
  sendToBot(json) 
});

document.getElementById("left-arrow").addEventListener("touchend", function(event) {
  json.direction = "stop"
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
 document.getElementById("button1-arrow").addEventListener("touchstart", function(event) {
  json.servo_open = "closed";
  sendToBot(json)
  console.log("grabber");
  });

  document.getElementById("button1-arrow").addEventListener("touchend", function(event) {
    json.servo_open = "stop";
    sendToBot(json)
    console.log("grabber");
    });

  createArrow('button2', "grabber", 100)
  document.getElementById("button2-arrow").addEventListener("touchstart", function(event) {
    json.servo_open = "open";
    sendToBot(json)
    console.log("grabber");
    });

    document.getElementById("button2-arrow").addEventListener("touchend", function(event) {
      json.servo_open = "stop";
      sendToBot(json)
      console.log("grabber");
      });

  



  

