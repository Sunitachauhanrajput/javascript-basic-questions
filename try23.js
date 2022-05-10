// let a= 122;
// console.log(a)

// const person = {"firstName":"John", lastName:"Doe", age:50, eyeColor:"blue"};
// console.log(person.firstName)

// var myName="kumar"; // global scope
// function sayHi(){
//   console.log(myName); //output kumar
//   var frdsName="Pavan";   // local scope or function scope
//   console.log(frdsName); //output pavan
// }
// sayHi();
// console.log(myName); //output kumar
// console.log(frdsName); //output Error: ReferenceError: frdsName is not defined


// isHeUsingAtm = true
// if (isHeUsingAtm){
//    var secretPin=1234
//    console.log('please use Atm');
//    console.log('while using Atm :'+secretPin);
//    console.log('Thank you for using Atm');
// }
// console.log('After using Atm :'+ secretPin);

// var fruit = 'apple'
// {
// var fruit = 'orange'
// console.log(fruit)
// }
// console.log(fruit)

//  var place = 'bangalore'
// function gimplace(){
// var place = 'pune'
// console.log(place)
// }
// console.log(place)
// gimplace()

// {
//     const num=10;
//     console.log(num);
//  }
//  console.log(num);
  
// isHeUsingAtm = true
// function UsingAtm(){
//    if (isHeUsingAtm){
//        const secretPinWithVar=1234
//        console.log('please use Atm with secretPinWithVar');
//        console.log('while using Atm with secretPinWithVar :'+secretPinWithVar);
//        console.log('Thank you for using Atm with secretPinWithVar ');
// }}
// UsingAtm()
// console.log('After using Atm :'+ secretPinWithVar);

// even +++++++++++++++++++++++++++++++++++++++
// const arr=[1,2,3,4,5,6]  
// arr.map((item) => {
//     if (item%2==0){
//         console.log(item)
//     }
// })

// const arr=[1,2,3,4,5,6]  
// console.log(arr.map(function x(item){
//     if (item%2==0){
//         return item
//     }
// }))


// const arr=[1,2,3,4,5,6]  
// var even = arr.filter((item) => {
//     if (item%2==0){
//         return item
//     }
// })
// console.log(even)

// const arr=[1,2,3,4,5,6]  
// console.log(arr.reduce(function x(item,value){console.log(typeof("1console.log(typeof("1console.log(typeof("1console.log(typeof("1console.log(typeof("1console.log(typeof("1console.log(typeof("1console.log(typeof("1console.log(typeof("1console.log(typeof("123"))23"))23"))23"))23"))23"))23"))23"))23"))23"))
//     if (item%2==0){
//         return item,value
//     }
// }))


// const arr=[1,2,3,4,5,6]
// var sum=0
// var x = arr.map((ele) => {
//     return sum = sum + ele
// })
// console.log(sum )

// var x = arr.filter((ele) => {
//     if (ele%2==0){
//         return ele
//     }
// });
// console.log(x)

// console.log(typeof("123"))
// console.log(typeof(isNaN("123")))
// console.log(isNaN("123"))
// console.log(typeof("123"))

// console.log(50+"5"-"5")

// let x="hello"
// let y;
// console.log(x+y);
// y="world"

// sayHi();
// function sayHi() {
//   console.log('hey!');
// }
// console.log(add(2,3))
// function add(a, b) {
//     return a + b;
//   }

// sayHi();
// function sayHi() {
//   console.log('hey!');
//   console.log(add(10, 2));
// }
// function add(a, b){
//   return a + b;
// }

// function foo(){
//     function bar() { 
//         return 3; } return bar();
//     function bar() {
//         return 8;    }};
// console.log(foo())

// program to display value


// function add(a, b){
//     return a + b;
// }
// let x = 20,
//     y = 10;
// let result = add(x,y);
// console.log(result);

// function codeHoist(){
//     a = 10;
//     let b = 50;
// }
// codeHoist();
// console.log(a); // 10
// console.log(b); 

// var double = 22;
// function double(num) {
//   return (num*2);
// }
// console.log(typeof double); // Output: number


// foo(); // Uncaught TypeError: foo is not a function
// var foo = function () { }
// bar(); // Uncaught ReferenceError: Cannot access 'bar' before initialization
// let bar = function () { }
// baz(); // Uncaught ReferenceError: Cannot access 'baz' before initialization
// const baz = function () { }

// function foo() {++++++++++++++++++++++++++++++++++++++important

//     console.log('First')
//   }
//   foo()
//   function foo() {
//     console.log('Second')
//   }

// var test = 1;
// function functionHoisting() {
//     test = 10;
//     return;
//     function test() {}
//   }
//   functionHoisting();
//   console.log(test);

// const a = 2, b = 'hello';
// // strict not equal operator
// console.log(a !== 2); // false
// console.log(a !== '2'); // true
// console.log(b !== 'Hello'); // true

// console.log("sunita"!="Sunita")

// let answer = 10;
// let response = ("What is 5 "+5);
// if (answer == response) {
//   console.log("You're correct!");
// }

// console.log(typeof function add(){
//     console.log("hello")
// })
// console.log(12.3);
// console.log("Geeks");
// console.log("13/12/2020");
// console.log((-46));
// console.log(NaN) ;

//     console.log(isNaN(0 / 0) );
//     console.log(isNaN(12.3));
//     console.log(isNaN("Geeks"));
//     console.log(isNaN("13/12/2020"));
//     console.log(isNaN(-46));
//     console.log(isNaN(NaN) );

// const hi=()

// console.log(typeof(function display(){
//     var a=10;
//     let b=13;
//     if (true){
//         console.log(a);
//         console.log(b);
//     }
//  }
// ))
 
// let name = 'rose'
// {
// let name = 'pihu'
// console.log(name)
// }
// console.log(name)
 
// const fruit = 'orange'
// {
// const fruit ='mango'
// console.log(fruit)
// }
// console.log(fruit)

// const fruit='apple'
// fruit ='mango'
// console.log(fruit)

// typeof(NaN)
// // Prediction:
// // Actual:

// console.log(typeof(1 != 2))
// // Prediction:
// // Actual:



// console.log(typeof("hello" - "world"))
// // Prediction:
// // Actual:

// console.log(typeof(1 - "3"))
// // Prediction:
// // Actual:


// console.log(typeof("johnny"/23))
// // Prediction:
// // Actual:

// console.log(typeof("x"% "luftbaloons"))
// // Prediction:
// // Actual:

// console.log(typeof( 1 / 0 )); // Infinity

// const bigint = 8562323159475639012345678901234567890n;
// console.log(typeof(bigint));

// console.log(typeof Math); // "object"  
// console.log(typeof null); // "object"  
// console.log(typeof prompt); // "function"

// console.log(Number("5.20"));   // returns 5.20
// console.log(Number(" "));      // returns 0
// console.log(Number(""));        // returns 0
// console.log(Number("998 8"));   // returns NaN

// console.log(typeof("6" / "2" )); // 3, strings are converted to numbers
// {
//     var x=2
// }console.log(x)

// function myFunction() {
//     var carName = "Volvo";
//     // code here CAN use carName
//   }
// console.log(carName)
  

// var carName = "Volvo";
// // code here can use carName

// function myFunction() {
// // code here can also use carName
// console.log(carName)
// }
// console.log(carName)
// myFunction()

// let marks = 45;
// // check the condition
// let result = (marks%2 ==0 ) ? 'even' : 'odd';
// console.log( result);

// program to check if number is positive, negative or zero
// let a = 3;
// let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
// console.log(`The number is ${result}.`);

// const array1 = [1, 2, 3, 4]
// const initialValue = 0;
// const sumWithInitial = array1.reduce((previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// // expected output: 10

// const array = [1, 2, 3,4,5];
// function reducer_func(total, current) {
//   result = total  + current;
//   return result
// }
// console.log(array.reduce(reducer_func));

// const arr= [{"sunita":1,"bicycle":true},
// {"kavi":2,"bicycle":true},{"manju":3,"bicycle":false},
// {"rani":4,"bicycle":true}]
// new_array=[]
// function fun(previous,item,index,array){
//     // for( i in item){
//     //     if (item[i]===true) 
//         return item.bicycle
// }
// // }

// console.log(arr.reduce(fun))

