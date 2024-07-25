import {destinationElement , labelDestinationElement} from "./destinationElement/destinationElement.js"
import {personElement , labelPersonElement} from "./personElement/personElement.js"
import {checkInElement , labelCheckInElement} from "./checkInElement/checkInElement.js"
import {checkOutElement , labelCheckOutElement} from "./checkOutElement/checkOutElement.js"
import bookNowElement from "./bookNowElement/bookNowElement.js"

const formElement = document.createElement ('form')

formElement.style.boxSizing = 'border-box'
formElement.style.gridArea = 'formElement'
formElement.style.display = 'grid'

if (innerWidth < 768) {
    formElement.style.gridTemplateAreas = '"labelDestinationElement""destinationElement" "labelPersonElement""personElement" "labelCheckInElement""checkInElement" "labelCheckOutElement""checkOutElement""bookNowElement"'
}
else {
    if (innerWidth < 1152) {
        formElement.style.gridTemplateAreas = '"labelDestinationElement labelPersonElement bookNowElement""destinationElement personElement bookNowElement" "labelCheckInElement labelCheckOutElement bookNowElement""checkInElement checkOutElement bookNowElement"'
    }
    else {
        formElement.style.gridTemplateAreas = '"labelDestinationElement labelPersonElement labelCheckInElement labelCheckOutElement bookNowElement""destinationElement personElement checkInElement checkOutElement bookNowElement"'
    }
}

let currentWindowWidth = innerWidth
window.addEventListener ('resize' , () => {
    if (innerWidth < 768) {
        if (currentWindowWidth < 768) {}
        else {
            currentWindowWidth = innerWidth
            formElement.style.gridTemplateAreas = '"labelDestinationElement""destinationElement" "labelPersonElement""personElement" "labelCheckInElement""checkInElement" "labelCheckOutElement""checkOutElement""bookNowElement"'
        }
    }
    else {
        if (innerWidth < 1152) {
            if (currentWindowWidth < 768) {
                currentWindowWidth = innerWidth
                formElement.style.gridTemplateAreas = '"labelDestinationElement labelPersonElement bookNowElement""destinationElement personElement bookNowElement" "labelCheckInElement labelCheckOutElement bookNowElement""checkInElement checkOutElement bookNowElement"'
            }
            else {
                if (currentWindowWidth < 1152) {}
                else {
                    currentWindowWidth = innerWidth
                    formElement.style.gridTemplateAreas = '"labelDestinationElement labelPersonElement bookNowElement""destinationElement personElement bookNowElement" "labelCheckInElement labelCheckOutElement bookNowElement""checkInElement checkOutElement bookNowElement"'
                }
            }
        }
        else {
            if (currentWindowWidth < 768) {
                currentWindowWidth = innerWidth
                formElement.style.gridTemplateAreas = '"labelDestinationElement labelPersonElement labelCheckInElement labelCheckOutElement bookNowElement""destinationElement personElement checkInElement checkOutElement bookNowElement"'
            }
            else {
                if (currentWindowWidth < 1152) {
                    currentWindowWidth = innerWidth
                    formElement.style.gridTemplateAreas = '"labelDestinationElement labelPersonElement labelCheckInElement labelCheckOutElement bookNowElement""destinationElement personElement checkInElement checkOutElement bookNowElement"'
                }
            }
        }
    }
})

formElement.prepend (
    labelDestinationElement ,
    destinationElement ,
    labelPersonElement ,
    personElement ,
    labelCheckInElement ,
    checkInElement ,
    labelCheckOutElement ,
    checkOutElement ,
    bookNowElement
)

export default formElement