import { main, navLogo, colors, count, btn, Dispcolor } from './module.js';

const displayClr = (index) => {
  let clr = colors[index];
  navLogo.style.color = clr;
  main.style.backgroundColor = clr;
  Dispcolor.textContent = clr;
  Dispcolor.style.color = clr;
};
let index = count;
btn.addEventListener('click', function () {
  if (index < colors.length) {
    displayClr(index++);
  } else {
    index = 0;
    displayClr(index++);
  }
});
