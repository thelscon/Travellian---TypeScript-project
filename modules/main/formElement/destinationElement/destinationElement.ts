export const destinationElement = document.createElement ('input')
destinationElement.id = 'destinationElement'
destinationElement.type = 'text'

destinationElement.style.boxSizing = 'border-box'
destinationElement.style.gridArea = 'destinationElement'

export const labelDestinationElement = document.createElement ('label')
labelDestinationElement.textContent = 'DESTINATION'
labelDestinationElement.setAttribute ('for' , 'destinationElement')

labelDestinationElement.style.boxSizing = 'border-box'
labelDestinationElement.style.gridArea = 'labelDestinationElement'