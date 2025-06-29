#!/usr/bin/env node

import { Add } from "./utils";

Add(2, 4);
console.log("first");

// const getuser = (userId)=>{
//     const userd ={
//         1:{name:"abhay", age:25},
//         2:{name:"sacdhin", age:55},
//     }
//     return userd[userId]
// }

//console.log(getuser(1));

// const getuser = (userId, callback) => {
//   const userd = {
//     1: { name: "abhay", age: 25 },
//     2: { name: "sacdhin", age: 55 },
//   };
//   setTimeout(() => {
//     callback(userd[userId]);
//   }, 2000);
// };

// getuser(2, (user) => console.log(user));

// let promise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("hello")
//     console.log('first')
//     }

//         ,2000)

// })

// alert("hello");
// console.log(process.argv)
