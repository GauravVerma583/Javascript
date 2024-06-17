// const prompt = require("prompt-sync")();
// let n = prompt("enter how many prime no.");
// for (let i = 1; i <= n; i++) {
//   if (i % i == 0) {
//     console.log(i);
//   }
// }
// const arr = [1, 2, 3, 4, 5];
// arr.forEach((value) => {
//   console.log(value * 2);
// });
// const arr = [1, 2, 3, 4, 5];
// let arr2 = arr.map((value) => {
//   return value;
// });
// console.log(arr2);
const arr = [1, 2, 2, 3, 4, 5, 3, 4, 2, 2, 3];
// let arr2 = arr.filter((value) => {
//   return value == 2;
// });
// console.log(arr2);
let arr2 = arr.reduce((prev, current) => {
  return prev + current;
});
console.log(arr2);
