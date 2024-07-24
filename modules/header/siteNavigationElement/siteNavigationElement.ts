const siteNavigationElement = document.createElement ('nav')

siteNavigationElement.style.boxSizing = 'border-box'
siteNavigationElement.style.gridArea = 'siteNavigationElement'

const homeNavigationItem = document.createElement ('a')
homeNavigationItem.textContent = 'Home'
homeNavigationItem.style.boxSizing = 'border-box'

const exploreNavigationItem = document.createElement ('a')
exploreNavigationItem.textContent = 'Explore'
exploreNavigationItem.style.boxSizing = 'border-box'

const travelNavigationItem = document.createElement ('a')
travelNavigationItem.textContent = 'Travel'
travelNavigationItem.style.boxSizing = 'border-box'

const blogNavigationItem = document.createElement ('a')
blogNavigationItem.textContent = 'Blog'
blogNavigationItem.style.boxSizing = 'border-box'

const pricingNavigationItem = document.createElement ('a')
pricingNavigationItem.textContent = 'Pricing'
pricingNavigationItem.style.boxSizing = 'border-box'

siteNavigationElement.append (
    homeNavigationItem ,
    exploreNavigationItem ,
    travelNavigationItem ,
    blogNavigationItem ,
    pricingNavigationItem
)

export default siteNavigationElement