/**
 * 
 * @param {JSON} properties
 * JSON object that contains all the properties for creating a joystick.
 * 
 * { 
 *      baseSize: string (required) 
 *          example: `baseSize: '192px'`
 *      stickSize: string (required) 
 *          example: `stickSize: '128px'`
 *      baseColor: string (optional) 
 *          example: `baseColor: 'aqua'`
 *      stickColor: string (optional) 
 *          example: `stickColor: '#FFFFFF'`
 * }
 * @param {*} dataHandler
    A callback function that handles/processes the X and Y position of the joystick. 
    Note how in later lines you can see dataHandler() be called like a function.
 * @returns The Joystick object created
 */
    function createJoyStick(properties, dataHandler) {
        const {
            baseSize, stickSize,
            baseColor, stickColor,
        } = properties;
        //Check whether the required properties are not null. If so, throw an error
        if([baseSize, stickSize].some(v => !v))
            throw Error(`Unable to create joystick, missing one or more required parameters: [baseSize, stickSize]`);
        
        /*We have 2 different components that make up a joystick:
        1) A base, which acts as the color background for the joystick
        and is used to define the bounds of the joystick's range of motion
        2) A stick, which is the element a user drags

        */

        //Add styling for the joystick
        const base = document.createElement(`div`);
        base.style.height = base.style.width = baseSize;
        base.style.backgroundColor = baseColor ? baseColor : `#03A9F4`; // default light blue
        base.style.display = `flex`;
        base.style.justifyContent = base.style.alignItems = `center`;
    
        const stick = document.createElement(`div`);
        stick.draggable = true;
        stick.style.height = stick.style.width = stickSize;
        stick.style.backgroundColor = stickColor ? stickColor : `#FFFFFF`; // default white
    
        //Add drop shadow with boxShadow property
        stick.style.boxShadow = `0 0 20px 1px #000000`;
        stick.style.touchAction = `none`;
        base.style.position = stick.style.position = `absolute`;
        stick.style.borderRadius = `100vw`;
    
        base.appendChild(stick);
    
        // calculations for joystick position
        function moveJoystick({clientX, clientY}) {
            const baseBounds = base.getBoundingClientRect();
            const stickBounds = stick.getBoundingClientRect();
            const centerOffset = baseBounds.width/2;
            if(!stick.position)
                stick.position = {x: centerOffset, y: centerOffset, centerOffset};
            if(clientY >= baseBounds.y + stickBounds.height/2 && clientY <= baseBounds.y + baseBounds.height - stickBounds.height/2)
                stick.position.y = clientY - baseBounds.y; //convert the x,y plane to be relative to the base
            if(clientX >= baseBounds.x + stickBounds.width/2 && clientX <= baseBounds.x + baseBounds.width - stickBounds.width/2)
                stick.position.x = clientX - baseBounds.x;
            stick.style.top = `${stick.position.y - stickBounds.height/2}px`; //we want the center of the stick to be what shows the point
            stick.style.left = `${stick.position.x - stickBounds.width/2}px`;
            dataHandler(stick.position.x, stick.position.y);
        }
        function stopJoystick() {
            stick.style.removeProperty(`top`);
            stick.style.removeProperty(`left`);
            dataHandler(stick.position.centerOffset, stick.position.centerOffset);
        }
    
        // mouse drag support
        stick.addEventListener(`dragstart`, ({dataTransfer, clientX, clientY}) => {
            dataTransfer.setDragImage(document.createElement(`img`), 0, 0); //remove drag cursor
            moveJoystick({clientX, clientY});
        });
        stick.addEventListener(`drag`, moveJoystick);
        stick.addEventListener(`dragend`, stopJoystick);
    
        // touch screen drag support 
        stick.addEventListener(`touchmove`, e => {
            for(const i in e.touches)
                if(e.touches[i].target == stick || base.contains(e.touches[i].target)) {
                    moveJoystick(e.touches[i]);
                    break;           
                }
        });
        stick.addEventListener(`touchend`, stopJoystick);
        return {base, stick}; // return the HTML elements so they can be further styled
    }

export {createJoyStick};