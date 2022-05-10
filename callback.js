// function myFirst() {
//     myDisplayer("Hello");
//   }
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
// myFirst();
// mySecond();

// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
  
//   let result = myCalculator(5, 5);
//   console.log(result());

// var cal=function (fx,a,b){
//     return fx(a,b)
// }

// var diff=function(x,y){
//     return x-y
// }
// console.log(cal(diff,4,5))


// function sum(a,b){
//     return a+b
// }
// function calc(fx,a,b){
//     return fx(a,b)
// }
// console.log(calc(sum,4,5))


// const one=(friend,callTwo)=>{
//     callTwo()
//     console.log(`i will call you back ${friend}`)
// }
// const two=()=>{
//     console.log(`hay`)
// }
// one("sunita",two)


// var callback = function() {
//     console.log("Done!");
// }
// setTimeout(callback, 5000);


// function map(array, callback) {
//     const newArr = [];
//     for (var i = 0; i < array.length; i++) {
//       newArr.push(callback(array[i]));
//     }
//     return newArr;
//   }
  
//   console.log(map())
  

// function wash(callback) {
//     setTimeout(function() {
//       console.log('wash');
//     }, 3000);
//   }
//   function dry(callback) {
//     setTimeout(function() {
//       console.log('dry');
//     }, 2000);
//   }
//   function fold(callback) {
//     setTimeout(function() {
//       console.log('fold');
//     }, 1000);
//   }
// wash()
// dry()
// fold()


// // function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }
// // callback function
// function callMe() {
//     console.log('I am callback function');
// }
// // passing function as an argument
// greet('Peter', callMe);


// setTimeout(()=>{
//     current="first"
//     console.log(current)
//     setTimeout(() => {
//         current="second"
//         console.log(current)
//         setTimeout(()=>{
//             current="third"
//             console.log(current)
//             setTimeout(()=>{
//                 current="final"
//                 console.log(current)
//             },1000)
//         },2000)
//     },3000)
// },4000)

l=["a","b","c","d","e"]
x=l.splice(1,2)
console.log(x)