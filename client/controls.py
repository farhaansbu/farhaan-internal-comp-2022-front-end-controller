# import RPi.GPIO as GPIO
<<<<<<< HEAD
import RPi.GPIO as GPIO
import json
from time import sleep


# write your setup code here
#Configure PINS
GPIO.setmode(GPIO.BCM)

#Assign pin numbers and configure left 2 motors (wired together in sync)

mL_input1 = 13
mL_input2 = 6
mL_enable = 19

GPIO.setup(mL_input1, GPIO.OUT)
GPIO.setup(mL_input2, GPIO.OUT)
GPIO.setup(mL_enable, GPIO.OUT)




#Assign pin numbers and configure right 2 motors (wired together in sync)

# mR_input1 = 15
# mR_input2 = 14
# mR_enable = 18


# GPIO.setup(mR_input1, GPIO.OUT)
# GPIO.setup(mR_input2, GPIO.OUT)
# GPIO.setup(mR_enable, GPIO.OUT)

#Set up PWM
pwmL = GPIO.PWM(mL_enable, 50)
# pwmR = GPIO.PWM(mR_enable, 50)
pwmL.start(0)
# pwmR.start(0)


#Define the function for moving foward.
def moveForward():
    print(mL_input1)
    GPIO.output(mL_input1, GPIO.HIGH)
    GPIO.output(mL_input2, GPIO.LOW)
    # GPIO.output(mR_input1, GPIO.LOW)
    # GPIO.output(mR_input2, GPIO.HIGH)
    pwmL.ChangeDutyCycle(speed)
    # pwmR.ChangeDutyCycle(speed)
    print(mL_input2)
   

#Define the function for moving backwards
# #def moveBackward():
#     GPIO.output(mL_input1, GPIO.LOW)
#     GPIO.output(mL_input2, GPIO.HIGH)
#     GPIO.output(mR_input1, GPIO.HIGH)
#     GPIO.output(mR_input2, GPIO.LOW)
#     pwmL.ChangeDutyCycle(speed)
#     pwmR.ChangeDutyCycle(speed)


#Define the function for stopping:
def stop():
    pwmL.ChangeDutyCycle(0)
    # pwmR.ChangeDutyCycle(0)

#Define the function for turning right:
# def turnRight():
#     GPIO.output(mL_input1, GPIO.HIGH)
#     GPIO.output(mL_input2, GPIO.LOW)
#     GPIO.output(mR_input1, GPIO.HIGH)
#     GPIO.output(mR_input2, GPIO.LOW)
#     pwmL.ChangeDutyCycle(speed)
#     pwmR.ChangeDutyCycle(speed)

# #Define the function for turning left:
# def turnLeft():
#     GPIO.output(mL_input1, GPIO.LOW)
#     GPIO.output(mL_input2, GPIO.HIGH)
#     GPIO.output(mR_input1, GPIO.LOW)
#     GPIO.output(mR_input2, GPIO.HIGH)
#     pwmL.ChangeDutyCycle(speed)
#     pwmR.ChangeDutyCycle(speed)


print('controls.py now running!')


    # this loop will infinitely run, take in and print commands
    # this is where you would put your motor control logic
    # to let your bot move upon receiving a certain command
    # call input function to get stringified json
    # parse json with ".loads" function 
while True:
    speed = 100
    print("start!")
    moveForward()
    sleep(5)
    stop()

GPIO.cleanup()

    



    #input = input()
    #robot = json.loads(input)


    
=======

# write your setup code here
# GPIO.cleanup()
print('controls.py now running!')

while True: 
    # this loop will infinitely run, take in and print commands
    # this is where you would put your motor control logic
    # to let your bot move upon receiving a certain command
    command = input()
    print(command)
    if command == 'left':
        print('idk how to move left')
    else:
        print(f'{command}? idk how to do that either')
>>>>>>> 6fe0cd173a75872d3d7eb1ca0adfd3d74cd8129d
