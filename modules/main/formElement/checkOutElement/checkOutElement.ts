export const checkOutElement = document.createElement ('input')
checkOutElement.id = 'checkOutElement'
checkOutElement.type = 'text'

checkOutElement.style.boxSizing = 'border-box'
checkOutElement.style.gridArea = 'checkOutElement'

export const labelCheckOutElement = document.createElement ('label')
labelCheckOutElement.textContent = 'CHECK OUT'
labelCheckOutElement.setAttribute ('for' , 'checkOutElement')

labelCheckOutElement.style.boxSizing = 'border-box'
labelCheckOutElement.style.gridArea = 'labelCheckOutElement'