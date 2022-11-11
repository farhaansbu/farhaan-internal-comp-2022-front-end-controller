# import RPi.GPIO as GPIO
import RPi.GPIO as GPIO
import json
from time import sleep


# write your setup code here
#Configure PINS
GPIO.setmode(GPIO.BCM)

#Assign pin numbers and configure left 2 motors (wired together in sync)


servo1 = 20
servo2 = 21
mL_input1 = 13
mL_input2 = 6
mL_enable = 19

GPIO.setup(mL_input1, GPIO.OUT)
GPIO.setup(mL_input2, GPIO.OUT)
GPIO.setup(mL_enable, GPIO.OUT)
GPIO.setup(servo1, GPIO.OUT)
GPIO.setup(servo2, GPIO.OUT)




#Assign pin numbers and configure right 2 motors (wired together in sync)

mR_input1 = 15
mR_input2 = 14



GPIO.setup(mR_input1, GPIO.OUT)
GPIO.setup(mR_input2, GPIO.OUT)

#Set up PWM
pwmL = GPIO.PWM(mL_enable, 50)
pwmServo = GPIO.PWM(servo1, 50)
pwmServo2 = GPIO.PWM(servo2, )
pwmL.start(0)



#Define the function for moving foward.
def moveForward():
    print(mL_input1)
    GPIO.output(mL_input1, GPIO.HIGH)
    GPIO.output(mL_input2, GPIO.LOW)
    GPIO.output(mR_input1, GPIO.LOW)
    GPIO.output(mR_input2, GPIO.HIGH)
    pwmL.ChangeDutyCycle(speed)
    print(mL_input2)
   

#Define the function for moving backwards
def moveBackward():
    GPIO.output(mL_input1, GPIO.LOW)
    GPIO.output(mL_input2, GPIO.HIGH)
    GPIO.output(mR_input1, GPIO.HIGH)
    GPIO.output(mR_input2, GPIO.LOW)
    pwmL.ChangeDutyCycle(speed)
    


#Define the function for stopping:
def stop():
    pwmL.ChangeDutyCycle(0)
    

#Define the function for turning right:
def turnRight():
    GPIO.output(mL_input1, GPIO.HIGH)
    GPIO.output(mL_input2, GPIO.LOW)
    GPIO.output(mR_input1, GPIO.HIGH)
    GPIO.output(mR_input2, GPIO.LOW)
    pwmL.ChangeDutyCycle(speed)
    print("right")


# #Define the function for turning left:
def turnLeft():
    GPIO.output(mL_input1, GPIO.LOW)
    GPIO.output(mL_input2, GPIO.HIGH)
    GPIO.output(mR_input1, GPIO.LOW)
    GPIO.output(mR_input2, GPIO.HIGH)
    pwmL.ChangeDutyCycle(speed)
    print("left")


print('controls.py now running!')


    # this loop will infinitely run, take in and print commands
    # this is where you would put your motor control logic
    # to let your bot move upon receiving a certain command
    # call input function to get stringified json
    # parse json with ".loads" function]
 

try:

    while True:
        controllerInput = input()
        robot = json.loads(controllerInput)

        if (robot["direction"] == "forward"):
            print("forward")
            speed = 100 
            moveForward()
        
        if (robot["direction"] == "stop"):
            print("stop")
            stop()

    
        if (robot["direction"] == "backward"):
            print("backward")
            speed = 100
            moveBackward()
            
    
        if (robot["direction"] == "right"):
            print("right")
            speed = 100
            turnRight()
                

        if (robot["direction"] == "left"):
            print("left")
            speed = 100
            turnLeft()
            

finally: 
    KeyboardInterrupt
    GPIO.cleanup()