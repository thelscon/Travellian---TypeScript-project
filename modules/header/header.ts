import menuButtonElement from "./menuButtonElement/menuButtonElement.js"
import { ArrangeElements , logotypeSVGElement } from "./logotypeSVGElement/logotypeSVGElement.js"
import siteNavigationElement from "./siteNavigationElement/siteNavigationElement.js"
import authorizationElement from "./authorizationElement/authorizationElement.js"

const headerElement = document.createElement ('header')

headerElement.style.boxSizing = 'border-box'
headerElement.style.display = 'grid'
headerElement.style.justifyContent = 'space-between'    

if (innerWidth < 768) { //  x < 768
    headerElement.style.gridTemplateAreas = '"logotypeSVGElement menuButtonElement"'
    headerElement.style.gridTemplateColumns = 'repeat(2, max-content)'

    // menuButtonElement.style.margin = '24px 32px'

    headerElement.append (
        logotypeSVGElement ,
        menuButtonElement
    )
}
else { // x >= 768
    if (innerWidth < 1152) { //  1152 > x >= 768
        headerElement.style.gridTemplateAreas = '"logotypeSVGElement menuButtonElement"'
        headerElement.style.gridTemplateColumns = 'repeat(2, max-content)'

        // menuButtonElement.style.margin = '32px 20px'
    
        headerElement.append (
            logotypeSVGElement ,
            menuButtonElement
        )
    }
    else { //  x >= 1152
        headerElement.style.gridTemplateAreas = '"logotypeSVGElement siteNavigationElement authorizationElement"'
        headerElement.style.gridTemplateColumns = 'max-content repeat(2, minmax(min-content, max-content))'
        
        headerElement.append (
            logotypeSVGElement ,
            siteNavigationElement ,
            authorizationElement
        )

        if (innerWidth < 1440) { //  1440 > x >= 1152
        }
        else { // x >= 1440
            if (innerWidth < 1920) { // 1920 > x >= 1440
            }
            else { // x >= 1920
            }
        }
    }
}

let currentWindowWidth = innerWidth
window.addEventListener ('resize' , () => {
    if (innerWidth < 768) { //  x < 768
        if (currentWindowWidth < 768) {}
        else {
            // menuButtonElement.style.margin = "24px 32px"
            
            if (currentWindowWidth < 1152) {
                currentWindowWidth = innerWidth
                ArrangeElements (innerWidth)
            }
            else {
                currentWindowWidth = innerWidth
                headerElement.style.gridTemplateAreas = '"logotypeSVGElement menuButtonElement"'
                ArrangeElements (innerWidth)
                siteNavigationElement.remove ()
                authorizationElement.remove ()

                headerElement.style.gridTemplateColumns = 'repeat(2, max-content)' 
                headerElement.append (menuButtonElement)

                if (currentWindowWidth < 1440) {}
                else {
                    if (currentWindowWidth < 1920) {}
                    else {}
                }
            }
        }
    }
    else { // x >= 768
        if (innerWidth < 1152) { //  1152 > x >= 768
            if (currentWindowWidth < 768) {
                currentWindowWidth = innerWidth
                ArrangeElements (innerWidth)

                // menuButtonElement.style.margin = '32px 20px'
            }
            else {
                if (currentWindowWidth < 1152) {
                }
                else {
                    currentWindowWidth = innerWidth
                    headerElement.style.gridTemplateAreas = '"logotypeSVGElement menuButtonElement"'
                    ArrangeElements (innerWidth)
                    siteNavigationElement.remove ()
                    authorizationElement.remove ()

                    headerElement.style.gridTemplateColumns = 'repeat(2, max-content)' 
                    headerElement.append (menuButtonElement)

                    // if (currentWindowWidth < 1440) {}
                    // else {
                    //     if (currentWindowWidth < 1920) {}
                    //     else {}
                    // }
                }
            }
        }
        else { //  x >= 1152

            if (currentWindowWidth < 768) {
                currentWindowWidth = innerWidth
                headerElement.style.gridTemplateAreas = '"logotypeSVGElement siteNavigationElement authorizationElement"'
                ArrangeElements (innerWidth)
                menuButtonElement.remove ()

                headerElement.style.gridTemplateColumns = 'max-content repeat(2, minmax(min-content, max-content))'
                headerElement.append (
                    siteNavigationElement ,
                    authorizationElement
                )
            }
            else {
                if (currentWindowWidth < 1152) {
                    currentWindowWidth = innerWidth
                    headerElement.style.gridTemplateAreas = '"logotypeSVGElement siteNavigationElement authorizationElement"'
                    ArrangeElements (innerWidth)
                    menuButtonElement.remove ()

                    headerElement.style.gridTemplateColumns = 'max-content repeat(2, minmax(min-content, max-content))'
                    headerElement.append (
                        siteNavigationElement ,
                        authorizationElement
                    )
                }
            }
        }
    }
})

export default headerElement