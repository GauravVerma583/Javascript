// new Promise((resolve, reject) => {
//   setTimeout(function () {
//     console.log("promise created");
//     resolve();
//   }, 2000);
// })
// .then(() => {
//   console.log("resolve");
// })

// new Promise((resolve, reject) => {
//   setTimeout(function () {
//     console.log("promise created");
//     resolve({ name: "Gaurav" });
//   }, 2000);
// }).then((data) => {
//   console.log(data);
// });
// new Promise((resolve, reject) => {
//   setTimeout(function () {
//     console.log("promise created");
//     let error = true;
//     if (!error) {
//       resolve({ name: "Gaurav", roll: "15" });
//     } else {
//       reject("error occurred");
//     }
//   }, 2000);
// })
//   .then((response) => {
//     return response.name;
//   })
//   .then((nameData) => {
//     console.log(nameData);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// let promise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ name: "Gaurav", roll: "15" });
//     } else {
//       reject("error occurred");
//     }
//   }, 2000);
// });
// async function consume() {
//   const response = await promise;
//   console.log(response);
// }
// consume();
let promise = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ name: "Gaurav", roll: "15" });
    } else {
      reject("error occurred");
    }
  }, 2000);
});
async function consume() {
  try {
    const response = await promise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consume();
