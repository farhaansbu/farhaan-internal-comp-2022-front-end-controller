# **Internal Competition Frontend SDK**
## **SDK Description**
### Here you can find a plug-and-play JavaScript SDK for rendering useful components in the front-end of your team's controller! The components included in this SDK are:
- Checkboxes
- Buttons
- Joysticks
- Sliders

### This SDK will allow you to render these elements with intuitive function calls. Furthermore, the SDK helps you extrapolate useful information for each of these components (ie. x, y positions for a joystick.) Make sure you are using an updated browser (ideally **Google Chrome** for consistent CSS behavior) when rendering your front-end application. **Please do not use Firefox due to outlier formatting rules!!!**
---
## **Using the SDK's Methods**
### To make use of the methods provided in methods.js, you will need to include the an import statement with the following syntax (functions of interest should be specified in the curly braces)
`import {createArrow, createCheckbox} from "/js/methods.js"` 
    
### If you are working from the browser console to test/debug code, you should use the following command to access the SDK methods:
`sdk = await import('/js/methods.js)`

### The filepath passed in import() should differ if the directory of the file you are importing the SDK methods into does not match the directory where methods.js resides. VS Code assists with auto-suggesting a filepath, but you should verify the filepath is correct.
---
## **Final Notes**
### Since we provide a small set of functions in this SDK, we encourage you to modify the methods.js file by adding your own functions for rendering different components or augmenting the existing functions!
### We strongly encourage that you become comfortable with using the browser console to initially test out the SDK functions instead of having to modify a JS file each time. Below are some neat videos for becoming familiar with the browser console and JavaScript.
### In a final plea to maintain your sanity, **please do not use Firefox. Please do not use Firefox. Please do not use Firefox.**

## Tutorial Videos
### [Introduction the Browser Console](https://www.youtube.com/watch?v=q9jAFZjPFHo)
### [Inspecting Elements on a Webpage](https://blog.hubspot.com/website/how-to-inspect)
### [MDN Web Docs (for JavaScript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)