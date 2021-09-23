// // const dataSet = ["alice", "frank", "yannick"];

// // for (let i = 0; i < dataSet.length; i++) {
// //   setTimeout(() => {
// //     console.log(dataSet[i]);
// //   }, dataSet[i] * 500);
// // }

// // const array = [0, 1, 2, 4, 8, 16, 32, 16, 8, 4, 2, 1, 0];

// // for (let i = 0; i < array.length; i++) {
// //   setTimeout(function () {
// //     console.log(array[i]);
// //   }, array[i] * 500);
// // }

// const array = ["alice", "frank", "yan", "17", "28", "32", "12", "22", "35"];
// let i = 0;
// setInterval(() => {
//   if (i !== array.length) console.log(array[i++]);
//   else {
//     console.log(array[0]);
//     i = 1;
//   }
// }, 1000);
// //

let alice = () => {
  console.log("i begin here, call b");
  b();

  console.log("done with b so come back");
};

let b = async () => {
  throw new Error("oops");
  let data = await 5;

  console.log("i call alice ", data + 3);
};

alice();
