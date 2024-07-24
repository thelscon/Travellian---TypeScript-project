import menuButtonImage from "./menuButtonImage.js"

const menuButtonElement = document.createElement ('button')
menuButtonElement.textContent = ''

menuButtonElement.style.boxSizing = 'border-box'
menuButtonElement.style.gridArea = 'menuButtonElement'
menuButtonElement.style.padding = '0px'
menuButtonElement.style.width = '50px'
menuButtonElement.style.height = '50px'
menuButtonElement.style.border = '0px'
menuButtonElement.style.background = `url('data:image/svg+xml, ${menuButtonImage.outerHTML}') center no-repeat`

export default menuButtonElement