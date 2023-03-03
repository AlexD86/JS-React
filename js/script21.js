'use strict';

//const humburger = 5;
//const fries = 0;

//if (humburger && fries) {
//  console.log('Я сыт')
//}

//console.log((humburger && fries));

// const humburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(humburger === 3 && cola && fries);

// console.log (1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'sdkjgskbgd');

// if (humburger === 3 && cola ===1 && fries) {
//   console.log('Все сыты')
// } else {
//   console.log('Мы уходим')
// }

const humburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (humburger ===3 && cola ===2 || fries ===3 && nuggets) {
  console.log('Все довольны');
} else {
  console.log('Мы уходим');
}

console.log(humburger || cola || fries);

let johnReport, samReport, alexReport, mariaReport = 'done'; 

console.log (humburger ===3 && cola ===2 || fries ===3 && nuggets);



