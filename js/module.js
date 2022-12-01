export const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'maroon',
  'brown',
  'peru'
];
export let count = 0;
// select elements to target 
export const btn = document.querySelector('.click-me');
export const navLogo = document.querySelector('.nav-logo');
export const main = document.querySelector('main');
export const Dispcolor = document.querySelector('.color');

// Functions 
const randomNumberGenerator = (number) => {
  return Math.floor(Math.random()*number);
}
export const colorGenerator = (hexColors) =>
{
  let color = '#';
  for(let i=0;i<6;i++) color += hexColors[randomNumberGenerator(hexColors.length)];
  return color;
}