// const prompt = require("prompt-sync")();
// let marks = prompt("marks");
// if (marks > 90 && marks <= 100) {
//   console.log(" Grade A+");
// } else if (marks > 80 && marks <= 90) {
//   console.log("Grade A");
// } else if (marks > 70 && marks <= 80) {
//   console.log("Grade B+");
// } else if (marks > 60 && marks <= 70) {
//   console.log("Grade B");
// } else if (marks > 50 && marks <= 60) {
//   console.log(" Grade C+");
// } else if (marks > 40 && marks <= 50) {
//   console.log(" Grade C");
// } else if (marks >= 33 && marks <= 40) {
//   console.log("Grade D");
// } else {
//   console.log("you are fail");
// }
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const prompt = require("prompt-sync")();
const max = 5;
for (let i = 1; i <= max; i++) {
  let num1 = prompt.hide("Enter Number1 :- ");
  let num2 = prompt("Enter Number2 :- ");
  if (num1 == num2) {
    console.log("youn win");
    break;
  }
  if (num1 > num2) {
    console.log("minimum number");
  } else {
    console.log("maximum no.");
  }
  if (i == max) {
    console.log("you have reached max attempt");
    break;
  }
  console.log(max - i + " " + "attempt left");
}
