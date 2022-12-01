import { navLogo, Dispcolor, main, btn, colorGenerator } from './module.js';
const hexColors = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];
function displayClr(clr) {
  if (clr !== '#000000') {
    navLogo.style.color = clr;
    main.style.backgroundColor = clr;
    Dispcolor.textContent = clr;
    Dispcolor.style.color = clr;
  }
}

btn.addEventListener('click', function () {
  displayClr(colorGenerator(hexColors));
});
