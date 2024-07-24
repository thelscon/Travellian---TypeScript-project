export const checkInElement = document.createElement ('input')
checkInElement.id = 'checkInElement'
checkInElement.type = 'text'

checkInElement.style.boxSizing = 'border-box'
checkInElement.style.gridArea = 'checkInElement'

export const labelCheckInElement = document.createElement ('label')
labelCheckInElement.textContent = 'CHECK IN'
labelCheckInElement.setAttribute ('for' , 'checkInElement')

labelCheckInElement.style.boxSizing = 'border-box'
labelCheckInElement.style.gridArea = 'labelCheckInElement'