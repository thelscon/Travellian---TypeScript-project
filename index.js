import headerElement from "./modules/header/header.js";
import mainElement from "./modules/main/mainElement.js";
import headerMainImage from "./modules/headerMainImage/headerMainImage.js";
const fontPlayfairRegular = new FontFace('Playfair Display', 'url(./fonts/PlayfairDisplay/400/playfair-display-regular.woff2)', {
    weight: '400',
});
await fontPlayfairRegular.load();
document.fonts.add(fontPlayfairRegular);
const fontRubikRegular = new FontFace('Rubik', 'url(./fonts/Rubik/400/rubik-regular.woff2)', {
    weight: '400'
});
await fontRubikRegular.load();
document.fonts.add(fontRubikRegular);
// begin
const bodyElemenent = document.querySelector('body');
if (bodyElemenent) {
    bodyElemenent.style.margin = '0px';
    bodyElemenent.style.minWidth = '320px';
    bodyElemenent.style.display = 'grid';
}
bodyElemenent?.prepend(headerElement, mainElement);
headerMainImage.style.height = `${parseInt(getComputedStyle(headerElement).height) + parseInt(getComputedStyle(mainElement).height)}px`;
mainElement.after(headerMainImage);
// if (innerWidth < 768) { //  x < 768
// }
// else { // x >= 768
//     if (innerWidth < 1152) { //  1152 > x >= 768
//     }
//     else { //  x >= 1152
//         if (innerWidth < 1440) { //  1440 > x >= 1152
//         }
//         else { // x >= 1440
//             if (innerWidth < 1920) { // 1920 > x >= 1440
//             }
//             else { // x >= 1920
//             }
//         }
//     }
// }
