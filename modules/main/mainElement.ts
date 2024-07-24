import headingElement from "./headingElement/headingElement.js"
import paragraphElement from "./paragraphElement/paragraphElement.js"
import formElement from "./formElement/formElement.js"
import sliderElement from "./sliderElement/sliderElement.js"

const mainElement = document.createElement ('main')

mainElement.style.boxSizing = 'border-box'
mainElement.style.display = 'grid'

if (innerWidth < 768) {
    mainElement.style.gridTemplateAreas = '"headingElement""paragraphElement""formElement"'
    mainElement.append (
        headingElement ,
        paragraphElement ,
        formElement
    )
}
else {
    mainElement.style.gridTemplateAreas = '"headingElement sliderElement""paragraphElement sliderElement""formElement sliderElement"'
    mainElement.append (
        headingElement ,
        paragraphElement ,
        formElement ,
        sliderElement
    )
}

let currentWindowWidth = innerWidth
window.addEventListener ('resize' , () => {
    if (innerWidth < 768) { //  x < 768
        if (currentWindowWidth < 768) {}
        else {
            currentWindowWidth = innerWidth
            mainElement.style.gridTemplateAreas = '"headingElement""paragraphElement""formElement"'
            sliderElement.remove ()
        }
    }
    else { // x >= 768
        if (currentWindowWidth < 768) {
            currentWindowWidth = innerWidth
            mainElement.style.gridTemplateAreas = '"headingElement sliderElement""paragraphElement sliderElement""formElement sliderElement"'
            mainElement.append (sliderElement)
        }
        if (innerWidth < 1152) { //  1152 > x >= 768
        }
        else { //  x >= 1152
        }
    }
})

export default mainElement