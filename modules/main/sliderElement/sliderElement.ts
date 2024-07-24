import places from "../places/places.js"

const sliderElement = document.createElement ('section')

sliderElement.style.boxSizing = 'border-box'
sliderElement.style.gridArea = 'sliderElement'
sliderElement.style.display = 'grid'

places.forEach (place => {
    const item = document.createElementNS ('http://www.w3.org/2000/svg' , 'svg')
    item.setAttribute ('xmlns' , 'http://www.w3.org/2000/svg')
    item.setAttribute ('viewBox' , '0 0 16 16')
    item.style.width = '16px'
    item.style.height =  '16px'
    item.style.fill = 'none'

    const circle = document.createElementNS ('http://www.w3.org/2000/svg' , 'circle')
    circle.style.cx = '8px'
    circle.style.cy = '8px'
    circle.style.r = '8px'
    circle.style.fill = (place === '1') ? '#FF7757' : 'white'

    item.setAttribute ('data-place' , place)
    item.append (circle)

    sliderElement.append (item)
})

const arrowUp = document.createElementNS ('http://www.w3.org/2000/svg' , 'svg')
arrowUp.setAttribute ('xmlns' , 'http://www.w3.org/2000/svg')
arrowUp.setAttribute ('viewBox' , '0 0 16 8')
arrowUp.style.width = '16px'
arrowUp.style.height = '8px'
arrowUp.style.fill = 'none'
const pathArrowUp = document.createElementNS ('http://www.w3.org/2000/svg' , 'path')
pathArrowUp.setAttribute ('d' , 'M15 7L8 0.999999L1 7')
pathArrowUp.style.stroke = 'white'
pathArrowUp.style.strokeWidth = '2px'
pathArrowUp.style.strokeLinecap = 'round'
pathArrowUp.style.strokeLinejoin = 'round'
arrowUp.append (pathArrowUp)

const arrowDown = document.createElementNS ('http://www.w3.org/2000/svg' , 'svg')
arrowDown.setAttribute ('xmlns' , 'http://www.w3.org/2000/svg')
arrowDown.setAttribute ('viewBox' , '0 0 16 8')
arrowDown.style.width = '16px'
arrowDown.style.height = '8px'
arrowDown.style.fill = 'none'
const pathArrowDown = document.createElementNS ('http://www.w3.org/2000/svg' , 'path')
pathArrowDown.setAttribute ('d' , 'M1 1L8 7L15 1')
pathArrowDown.style.stroke = '#FF7757'
pathArrowDown.style.strokeWidth = '2px'
pathArrowDown.style.strokeLinecap = 'round'
pathArrowDown.style.strokeLinejoin = 'round'
arrowDown.append (pathArrowDown)

sliderElement.append (arrowUp)
sliderElement.append (arrowDown)

export default sliderElement