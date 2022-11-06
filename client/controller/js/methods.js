

/**
 * 
 * @param {String} parentDivId The ID of the div to append elementToAdd
 * @param {*} elementToAdd The element object to be added to the parent div
 * @returns 0 if parent div specified by parentDivId exists and -1 if not
 */
function appendElToParentDiv(parentDivId, elementToAdd) {
    //Obtain the div that parentDivId refers to
    let parentDiv = document.getElementById(parentDivId);
    //If parentDiv is undefined, then an invalid parentDivId was provided
    if(!parentDiv) {
        //Return 1 if the parent div does not exist
        return -1;
    }
    else {
        //Append element to div, and return 0 to indicate a success
        parentDiv.append(elementToAdd);
        return 0;
    }
}

/**
 * 
 * @param {String} direction The direction the arrow element will correspond to
 * @param {String} parentDivId The parent div to append the arrow element to
 * @param {Number} size An optional parameter where users specify the size of the arrow
 * in units of pixels
 * @param {String} imgFileName An optional parameter where users specify the image file name to use
 * (if not provided, default files are used)
 * @returns The arrow element
 */
function createArrow(direction, parentDivId, size = 10, imgFileName = "") {
    //Make direction variable lowercase
    direction = direction.toLowerCase();
    //Declare + initialize arrow object as an img tag
    const arrowImg = document.createElement("img");
    //Assign div id to arrow element
    arrowImg.id = direction + "-arrow";
    //Assign base path for img src property
    let imgUrl = "img/";
    //Switch statement for determining file to use based on value of direction parameter
    //If imgFileName is not an empty string then we skip switch statement
    if(imgFileName == "") {
        switch(direction) {
            case "right":
                imgUrl += "right-arrow.png";
                break;
            case "left":
                imgUrl += "left-arrow.png";
                break;
            case "up":
                imgUrl += "up-arrow.png";
                break;
            case "up1":
                imgUrl += "up-arrow.png";
                break;
            case "down":
                imgUrl += "down-arrow.png";
                break;
            case "down1":
                imgUrl += "down-arrow.png";
                break;  
            case "button1":
                imgUrl += "button1.png"; 
        }
    }
    //If imgFileName is passed as a parameter (ie. imgFileName is not an empty string), then append that to imgUrl
    else {
        imgUrl += imgFileName;
    }
    //Assign arrowImg src property the value of imgUrl
    arrowImg.src = imgUrl;
    //Set alt property
    arrowImg.alt = direction + ' arrow'
    //Set height, width property (makes assumption that image file is square)
    arrowImg.height = size;
    arrowImg.width = size;
    //Set onclick property for arrow to call sendToBot()
    //arrowImg.onclick = sendToBot(direction);
    //Append arrow element to parent div with appendElToParentDiv()
    //If this process fails, then the specified parent div does not exist
    if(appendElToParentDiv(parentDivId, arrowImg) != 0)
        throw Error(`Parent div ${parentDivId} does not exist`);
    //Return the arrow element
    return arrowImg;
}

/**
 * 
 * @param {String} sliderDivId The ID of the slider element being created
 * @param {String} parentDivId The parent div to append the slider element to
 * @param {Number} min An optional parameter to specify the minimum value for the slider
 * @param {Number} max An optional parameter to specify the maximum value for the slider
 * @returns The slider element created
 */
function createSlider(sliderDivId, parentDivId, min = 0, max = 100) {
    //Create slider element
    const slider = document.createElement("input");
    slider.type = "range";
    //Set slider ID
    slider.id = sliderDivId;
    //Default value for slider is 0
    slider.value = "0";
    //Set min, max properties for slider
    slider.min = min;
    slider.max = max;
    //Append slider element to praent div with appendElToParentDiv()
    //If this process fails, then the specified parent div does not exist
    if(appendElToParentDiv(parentDivId, slider) != 0)
        throw Error(`Parent div ${parentDivId} does not exist`);
    //Append p element with embedded span element to parent div to print out value of slider
    let valueText = document.createElement("p");
    valueText.id = sliderDivId + "-value";
    valueText.innerHTML = "Speed: ";
    //Create span element
    let valueTextSpan = document.createElement("span");
    valueTextSpan.id = sliderDivId + "-value-span";
    //Add span element within valueText p element
    valueText.append(valueTextSpan);
    //Append valueText to parent div
    if(appendElToParentDiv(parentDivId, valueText) != 0)
        throw Error(`Parent div ${parentDivId} does not exist`);

    //Use the slider oninput propety to have span element dynamically update with value of slider
    slider.oninput = function() {
        valueTextSpan.innerHTML = this.value;
    }
    //Return the slider element
    return slider;
}

/**
 * 
 * @param {String} checkboxDivId The ID of the checkbox element being created
 * @param {String} parentDivId The parent div to append the checkbox element to
 * @returns The checkbox element created
 */
function createCheckbox(checkboxDivId, parentDivId, checkboxText = "") {
    //Assign checkboxText value of checkboxDivId if parameter is not specified
    if(checkboxText == "") {
        checkboxText = checkboxDivId;
    }
    //Create checkbox element
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    //Create span element for checkboxText
    const checkboxSpan = document.createElement("span");
    checkboxSpan.innerHTML = checkboxText;

    //Create a wrapper p tag to put the checkbox and span element into
    let wrapperPEl = document.createElement("label");
    wrapperPEl.innerHTML = checkbox.outerHTML;
    wrapperPEl.innerHTML += checkboxSpan.outerHTML;
    wrapperPEl.id = checkboxDivId;


    //Append checkbox to parent div
    if(appendElToParentDiv(parentDivId, wrapperPEl) != 0)
        throw Error(`Parent div ${parentDivId} does not exist`);
    //Return wrapper element
    return wrapperPEl;
}

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
 * @returns The Joystick object created comprised of 
 */
function createJoyStick(properties, dataHandler) {
    const {
        baseSize, stickSize,
        baseColor, stickColor,
    } = properties;
    //Check whether the required properties are not null. If so, throw an error
    if([baseSize, stickSize].some(v => !v))
        throw Error(`Unable to create joystick, missing one or more required parameters: [baseSize, stickSize]`);
    
    /*
        We have 2 different components that make up a joystick:
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
    base.style.borderRadius = `60px`;

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

export {
    appendElToParentDiv, 
    createArrow, 
    createSlider, 
    createCheckbox, 
    createJoyStick
};