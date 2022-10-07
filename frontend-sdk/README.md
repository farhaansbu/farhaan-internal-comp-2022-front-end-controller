# **Internal Competition Frontend SDK**
### Here you can find a plug-and-play JavaScript SDK for rendering useful components in the front-end of your team's controller! Examples of components include but are not limited to:
- Checkboxes
- Buttons
- Joysticks
- Dials
- Sliders

### This SDK will allow you to render these elements with intuitive function calls. Furthermore, we have built-in code to help you extrapolate useful information for each of these components (ie. x, y positions for a joystick.) Make sure you are using an updated browser (ideally **Google Chrome** for consistent CSS behavior) when rendering your front-end application. **Please do not use Firefox due to outlier formatting rules!!!**
---
## **Using the SDK's Methods**
### To make use of the methods provided in methods.js, you will need to run the following command in the file of interest 
`import {createArrow, createCheckbox} from "./methods.js"` 
    
### If you are working from the browser console to test/debug code, you should use the following command to access the SDK methods:
`sdk = await import('./methods.js)`

### The filepath passed in import() should differ if the directory of the file you are importing the SDK methods into does not match the directory where methods.js resides