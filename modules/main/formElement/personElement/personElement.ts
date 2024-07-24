export const personElement = document.createElement ('input')
personElement.id = 'personElement'
personElement.type = 'text'

personElement.style.boxSizing = 'border-box'
personElement.style.gridArea = 'personElement'

export const labelPersonElement = document.createElement ('label')
labelPersonElement.textContent = 'PERSON'
labelPersonElement.setAttribute ('for' , 'personElement')

labelPersonElement.style.boxSizing = 'border-box'
labelPersonElement.style.gridArea = 'labelPersonElement'