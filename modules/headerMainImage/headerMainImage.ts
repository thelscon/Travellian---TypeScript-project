const image = document.createElement ('img')
image.src = '/modules/headerMainImage/HeroSection.png'

image.style.boxSizing = 'border-box'

const headerMainImage = document.createElement ('div')

headerMainImage.style.boxSizing = 'border-box'
headerMainImage.style.display = 'grid'
headerMainImage.style.zIndex = '-1'
headerMainImage.style.position = 'absolute'
headerMainImage.style.overflow = 'hidden'
headerMainImage.style.minWidth = '320px'
headerMainImage.style.width = '100%'

headerMainImage.append (image)

export default headerMainImage