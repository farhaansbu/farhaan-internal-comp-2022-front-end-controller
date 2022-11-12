import RPi.GPIO as GPIO
from time import sleep

GPIO.setmode(GPIO.BCM)

servoPin = 20
GPIO.setup(servoPin, GPIO.OUT)
pwm = GPIO.PWM(servoPin, 50)

pwm.start(0)

def setAngle(angle):

    duty = angle / 18 + 7.5

    pwm.ChangeDutyCycle(duty)
    sleep(1)
    pwm.ChangeDutyCycle(0)


try:
    while True:
        angle = float(input("Enter angle: "))
        setAngle(angle)

except KeyboardInterrupt:
    print("Finished")

finally:
    GPIO.cleanup()
