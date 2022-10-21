# import RPi.GPIO as GPIO

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