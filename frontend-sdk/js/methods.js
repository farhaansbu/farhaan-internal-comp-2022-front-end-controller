import { createJoyStick } from "./joystick.js";

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
            case "down":
                imgUrl += "down-arrow.png";
                break;
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
    valueText.innerHTML = "Value: ";
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
function createCheckbox(checkboxDivId, parentDivId) {
    //Create checkbox element
    const checkbox = document.createElement("INPUT");
    checkbox.type = "checkbox";
    checkbox.id = checkboxDivId;
    //Append checkbox to parent div
    if(appendElToParentDiv(parentDivId, checkbox) != 0)
        throw Error(`Parent div ${parentDivId} does not exist`);
    //Return checkbox element
    return checkbox;
}


function showJoystickValues(x, y) {
    console.log(`bruh`, x, y);
}

function renderJoystick() {
    const joystick = createJoyStick({
        baseSize: `192px`,
        stickSize: `128px`,
    }, showJoystickValues);
    joystick.base.style.borderRadius = `100vw`;
    //Append joystick to DOM body
    document.body.appendChild(joystick.base);
}

export {appendElToParentDiv, createArrow, createSlider, createCheckbox, renderJoystick};