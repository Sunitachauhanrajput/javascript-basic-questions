// function my(){
//     var first= "sunita";
//     function sayfirst(){
//         console.log(first)
//     }
//     sayfirst();
// }
// my()
// console.log(first)

// const arr=[2,5,1,0,3,4]
// x=arr[0]
// for (i of arr){
//     if (x>i){
//         a=i
//     }
// }
// let x=10;
// let y= (x++,x+1)
// console.log("10"%3)
// let a=5;
// let b=12;
// console.log(a)
// b++
// a= ++a+20
// console.log(a)


// var x=4
// function f(){
//     var x=3
// }
// console.log(x)
// f()

// let x=4
// if (true){
// let x=3
// }
// console.log(x)

// function init() {
//     var name = 'Mozilla'; // name is a local variable created by init
//     function displayName() { // displayName() is the inner function, a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();
  

// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   var myFunc = makeFunc();
//   myFunc();

// function makeAdder(x) {+++++++++++++++++++++++++++++++++++++++++++
//   return function(y) {
//     return x + y;
//   };
// }
// var add5 = makeAdder(5);

// // var add10 = makeAdder(10);

// console.log(add5(2));  // 7
// // console.log(add10(2)); // 12

// function makeSizer(size) {
//   return function() {
//    return(size + 'px');
//   };
// }
// var size12 = makeSizer(12);
// console.log(size12())


// var e = 10;
// function sum(a){
//   return function(b){
//     return function(c){
//       // outer functions scope
//       return function(d){
//         // local scope
//         return a + b + c + d + e;
//       }
//     }
//   }
// }
// console.log(sum(1)(2)(3)(4)); // log 20



// function OuterFunction() {
//     var outerVariable = 1;
//     function InnerFunction() {
//         console.log(outerVariable);
//     }
//     InnerFunction();
// }
// OuterFunction()

// function OuterFunction() {
//     var outerVariable = 100;
//     function InnerFunction() {
//         console.log(outerVariable);
//     }
//     return InnerFunction;
// }
// var innerFunc = OuterFunction();
// innerFunc()

// function sayHello() {
//     var say = function() { 
//         console.log(hello); }
//     // Local variable that ends up within the closure 
//     var hello = 'Hello, world!';
//     return say;
//   }
//   var sayHelloClosure = sayHello(); 
//   sayHelloClosure(); // ‘Hello, world!’

// var x = 10;
// function foo(a) {
//   var b = 20;
//   function bar(c) {
//     var d = 30;
//     return boop(x + a + b + c + d);
//   }
//   function boop(e) {
//     return e * -1;
//   }
//   return bar;
// }
// var moar = foo(); /* Closure  */
// console.log(moar(5))

// var x = 10;
// function foo() {
//   var y = x + 5;
//   return y;
// }
// function bar() {
//   var x = 2;
//   return foo();
// }
// function main() {
//   console.log(foo()); // Static scope: 15; Dynamic scope: 15
//   console.log(bar()); // Static scope: 15; Dynamic scope: 7
//   return 0;
// }
// console.log(main())

// function sum(x, y, z) {
//   return x + y + z;
// }
// const numbers = [1, 2, 3];
// console.log(sum(...numbers));
// // expected output: 6
// console.log(sum.apply(null, numbers));
// // expected output: 6



