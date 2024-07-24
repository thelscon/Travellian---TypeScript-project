import menuButtonImagePath from "./menuButtonImagePath.js";
const menuButtonImage = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
menuButtonImage.setAttribute('width', '38');
menuButtonImage.setAttribute('height', '24');
menuButtonImage.setAttribute('viewBox', '0 0 38 24');
menuButtonImage.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
menuButtonImage.append(menuButtonImagePath);
export default menuButtonImage;
