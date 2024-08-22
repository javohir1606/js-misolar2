
// let count = 0;
// let number = 7;
// for(let i = 0; i <= number; i++){
//   if(number % i == 0){
//     count++;
//   }
// }

// if(count == 2){
//     console.log("tub");
// }else{
//   console.log("tub emas");
  
// }


// let arr = [                   
//   {nema: "lorem", id: 1, age: 10},
//   {nema: "lorem", id: 2, age: 10},
//   {nema: "lorem", id: 3, age: 10},
//   {nema: "lorem", id: 4, age: 10}
// ]

// 1-misol
// let arr = [                   
//   {nema: "lorem", age: 10},
//   {nema: "lorem", age: 10},
//   {nema: "lorem", age: 10},
//   {nema: "lorem", age: 10}
// ]
// let totalAge = arr.reduce((a, item) => {
//   return a + item.age;
// }, 0);

// console.log(totalAge);


// 2-misol
// let arr = [
//   {neam: "lorem", id: 44, sum: 10},
//   {neam: "lorem", id: 44, sum: 10},
//   {neam: "lorem", id: 44, sum: 10},
//   {neam: "lorem", id: 44, sum: 10},
//   {neam: "lorem", id: 1, sum: 0}
// ]

// const x = (users) => {
//   let sum = 0;

//   for (let i of users){
//     sum += i.sum
//     i.sum = 0
//   }

//   for (let i = 0; i < users.length; i++){
//     if(users[i].id == 1){
//       users[i].sum = sum;
//     }
//   }
// }

// x(arr);

// console.log(arr);


// 3-misol
// let count = 0;

// let number = 7;

// for(let i = 0; i <= number; i++){
//   if(number % i == 0){
//     count++;
//   }
// }

// if(count == 2){
//   console.log("tub");
  
// }else{
//   console.log("tub emas");
  
// }


// 4-misol
// let arr = [                   
//   {nema: "lorem", id: 1, age: 10},
//   {nema: "lorem", id: 2, age: 10},
//   {nema: "lorem", id: 3, age: 10},
//   {nema: "lorem", id: 4, age: 10}
// ]

// const isPrime = (num) => {
// let counter = 0;

//   for(let i = 1; i < num; i++){
//     if(num % i == 0){
//       counter++;
//     }
//   }
//   return counter == 2;
// }
// const findUser = (users) => {
//   let result = [];
//   for(let i = 0; i < users.length; i++){
//     if(isPrime(users[i].id)){
//       result.push(users[i]);
//     }
    
//   }

// }

// findUser(arr)

// 5-misol
// let arr = [11, 2, 2, 3, 4, 4, 4, 4, 6, 7, 76];

// const x = (numbers) => {
//   let obj = {};

//   for(let i of numbers){
//    obj[i] = i;
//   }
//   return Object.values(obj);
// }

// console.log(x(arr));

