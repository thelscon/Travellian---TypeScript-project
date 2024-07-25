import headerElement from "../header/header.js";
import mainElement from "../main/mainElement.js";
const image = document.createElement('img');
image.src = innerWidth < 1440 ? '/modules/headerMainImage/smallSize.png' : '/modules/headerMainImage/bigSize.png';
image.style.boxSizing = 'border-box';
if (innerWidth >= 1152) {
    image.style.width = '100%';
}
const headerMainImage = document.createElement('div');
headerMainImage.style.boxSizing = 'border-box';
headerMainImage.style.display = 'grid';
headerMainImage.style.zIndex = '-1';
headerMainImage.style.position = 'absolute';
headerMainImage.style.overflow = 'hidden';
headerMainImage.style.minWidth = '320px';
headerMainImage.style.width = '100%';
let currentWindowWidth = innerWidth;
window.addEventListener('resize', () => {
    headerMainImage.style.height = `${parseInt(getComputedStyle(headerElement).height) + parseInt(getComputedStyle(mainElement).height)}px`;
    if (innerWidth < 768) {
        if (currentWindowWidth < 768) { }
        else {
            if (currentWindowWidth < 1152) { }
            else {
                image.style.width = '1152px';
                if (currentWindowWidth < 1440) { }
                else {
                    currentWindowWidth = innerWidth;
                    image.src = '/modules/headerMainImage/smallSize.png';
                    if (currentWindowWidth < 1920) { }
                    else { }
                }
            }
        }
    }
    else {
        if (innerWidth < 1152) {
            if (currentWindowWidth < 768) { }
            else {
                if (currentWindowWidth < 1152) { }
                else {
                    currentWindowWidth = innerWidth;
                    image.style.width = '1152px';
                    if (currentWindowWidth < 1440) { }
                    else {
                        currentWindowWidth = innerWidth;
                        image.src = '/modules/headerMainImage/smallSize.png';
                        if (currentWindowWidth < 1920) { }
                        else { }
                    }
                }
            }
        }
        else {
            if (currentWindowWidth < 768) {
                currentWindowWidth = innerWidth;
                image.style.width = '100%';
            }
            else {
                if (currentWindowWidth < 1152) {
                    currentWindowWidth = innerWidth;
                    image.style.width = '100%';
                }
                else {
                    if (currentWindowWidth < 1440) { }
                    else {
                        currentWindowWidth = innerWidth;
                        image.src = '/modules/headerMainImage/smallSize.png';
                        if (currentWindowWidth < 1920) { }
                        else { }
                    }
                }
            }
            if (innerWidth < 1440) { }
            else {
                if (currentWindowWidth < 768) {
                    currentWindowWidth = innerWidth;
                    image.src = '/modules/headerMainImage/bigSize.png';
                }
                else {
                    if (currentWindowWidth < 1152) {
                        currentWindowWidth = innerWidth;
                        image.src = '/modules/headerMainImage/bigSize.png';
                    }
                    else {
                        if (currentWindowWidth < 1440) {
                            currentWindowWidth = innerWidth;
                            image.src = '/modules/headerMainImage/bigSize.png';
                        }
                        else {
                            if (currentWindowWidth < 1920) { }
                            else { }
                        }
                    }
                }
                if (innerWidth < 1920) { }
                else { }
            }
        }
    }
});
headerMainImage.append(image);
export default headerMainImage;
