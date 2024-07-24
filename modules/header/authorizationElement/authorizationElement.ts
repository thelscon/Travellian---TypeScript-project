import loginButtonElement from "../loginButtonElement/loginButtonElement.js"
import signUpButtonElement from "../signUpButtonElement/signUpButtonElement.js"

const authorizationElement = document.createElement ('div')

authorizationElement.style.boxSizing = 'border-box'
authorizationElement.style.gridArea = 'authorizationElement'
authorizationElement.style.display = 'grid'
authorizationElement.style.gridTemplateAreas = '"loginButtonElement signUpButtonElement"'
authorizationElement.style.columnGap = '4px'


authorizationElement.append (
    loginButtonElement ,
    signUpButtonElement
)
export default authorizationElement