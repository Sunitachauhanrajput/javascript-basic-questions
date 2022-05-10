// index.js
// function play() {
//   var game = "Luigi's Mansion 3";
//   function format() {
//     return `You are playing`, game;
//   }
//   return format();
// }; // You are playing Luigi's Mansion 3
// console.log(play()); // Reference Error


// // var text = 'outside';
// function logIt(){
//     // console.log(text);
//     var text = 'inside';
// };
// logIt();
// console.log(text)

// function foo() {
//   let a = b= c=0;
// }
// foo();
// // console.log( c); // => ???
// console.log(b); // => ???
// console.log(a)

// const length = 4;
// const numbers = [];
// for (var i = 0; i < length; i++);{
//   numbers.push(i + 1);
// }
// console.log(numbers); // => ???

// function arrayFromValue(item) {
//   return 
//   [item];
// }
// console.log(arrayFromValue(10)); // => ???

// (function(){
//   var a = b = 3;
// })();

// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));

// var myObject = {foo: "bar",func: function() {
//       var self = this;
//       console.log("outer func:  this.foo = " + this.foo);
//       console.log("outer func:  self.foo = " + self.foo);
//       (function() {
//           console.log("inner func:  this.foo = " + this.foo);
//           console.log("inner func:  self.foo = " + self.foo);
//       }());
//   }
// };
// myObject.func();

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);

// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
//  x= arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
// console.log(x)

// var x=2
// var a= ()=>{
//     console.log(x)r
//      x=3
// }
// a()

// console.log(1 +  "2" + "2");
// console.log(1 +  +"2" + "2");
// console.log(1 +  -"1" + "2");
// console.log(+"1" +  "1" + "2");
// console.log( "A" - "B" + "2");
// console.log( "A" - "B" + 2);
// console.log()

// console.log("0 || 1 = "+(0 || 1));
// console.log("1 || 2 = "+(1 || 2));
// console.log("0 && 1 = "+(0 && 1));
// console.log("1 && 2 = "+(1 && 2));

// var a={},
//     b={key:'b'},
//     c={key:'c'};
// a[b]=123;
// a[c]=456;
// console.log(a[b]);

// console.log((function f(n){
//     return ((n > 1) ? n * f(n-1) : n)
// })(-10));

// a=require("readline-sync")
// x=a.questionInt("enter ")
// console.log(x)

// const n =10 ; 
// if (true){
//     const n=3;
// }console.log(n)

// const n=10
// const x= ( ) => {
//     const n=3;
// }
// x()
// console.log(n)

// (function(x) {
//     return (function(y) {
//         console.log(x);
//     })(2)
// })(1);

// var length = 10;
// function fn() {
// 	console.log(length);
// }
// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();
//     arguments[0]();
//   }
// };
// obj.method(fn, 1);

// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();

// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// console.log(typeof undefined === typeof NULL)
// console.log(null)

// console.log(typeof typeof 1);

// var b = 1;
// function outer(){
//    	var b = 2
//     function inner(){
//         b++;
//         console.log(b)
//         var b = 4;
//         console.log(b)
//     }
//     inner();
// }
// outer();

// var global = 'global';
// const foo = () => {
//     console.log(global);
//     const bar = () => {
//       console.log(global);
//     }
//     bar();
//   }
//   foo();

// if (true) {
//     let x = 1;
//     console.log(x);
//   }
//   console.log(x)

// var x ;
// console.log(x)

// var scope = "I am global";
// function whatismyscope(){
//    var scope = "I am just a local";
//    function func() {
//        return scope;
//     }
//    return func();
// }

// console.log(whatismyscope())

// var a=2
// if (true){
//     var a=3
// }
// console.log(a)

// let a=2
// if(true){
//     let a=3
// }
// console.log(a)


// console.log(2 || 3)

x="sunita"
y=x.split('')
console.log(y)