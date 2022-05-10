// for (let i = 0; i < 15; i++) {
//     setTimeout(function() { 
//         console.log(i); 
//     }, i * 1000 );
//   }
  

// function myGreeting() {
//     console.log("Happy Birthday!")
// }
// const myTimeout = setTimeout(myGreeting, 3000);

// let timeout;
// function alertFunc() {
//   console.log("Hello!");
// }
// myFunction()
// function myFunction() {
//   timeout = setTimeout(alertFunc, 3000);
//   console.log("hiiii")
// }


// let counter = 0;
// let timeout;
// let timer_on = 0;
// function timedCount() {
//   console.log(counter);
//   counter++;
//   timeout = setTimeout(timedCount, 1000);
// }
// function startCount() {
//   if (!timer_on) {
//     timer_on = 1;
//     timedCount();
//   }
// }
// function stopCount() {
//   clearTimeout(timeout);
//   timer_on = 0;
// }



// function greet(name){
//     console.log("hello "+name);
// }
// timeout = setTimeout(greet,5000,"harry")
// clearTimeout(timeout)

// setTimeout(function(){
//     console.log("Sup!"); 
// }, 2000);//wait 2 seconds

// function printing() {
//     console.log(1); 
//     setTimeout(function() { console.log(2); }, 1000); 
//     setTimeout(function() { console.log(3); }, 0); 
//     console.log(4);
//  }
//  printing();

// // repeat with the interval of 2 seconds
// let timerId = setInterval(() => console.log('tick'),1000);

// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);


/* instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/
// let timerId = setTimeout(function tick() {
//     console.log('tick');
//     timerId = setTimeout(tick, 1000); // (*)
//   }, 4000);



// let j = 1;
// setTimeout(function() {
//     console.log(j++);
// }, 1000);


// let i = 1;
// setInterval(function() {
//   console.log(i++);
// }, 1000);

// let i = 1;
// setTimeout(function run() {
//   console.log(i++);
//   setTimeout(run, 100);
// }, 100);

// function printNumbers(from, to) {
//   let current = from;
//   function go() {
//     console.log(current);
//     if (current == to) {
//       clearTimeout(timerId);
//     }
//     current++;
//   }
//   go();
//   let timerId = setInterval(go, 1000);
// }
// printNumbers(5, 10);


// console.log('starting...');
// const delayInMilliseconds = 1000; // this is one second
// const doLater = () => {
//   console.log('i happen later!');
// };
// setTimeout(doLater, delayInMilliseconds);
// console.log('bananas!');


// console.log('starting...');
// const delayInMilliseconds = 1000; // this is one second
// setTimeout(() => {
//   console.log('i happen later!');
// }, delayInMilliseconds);
// console.log('bananas!');


// console.log('setTimeout! - 1');
// const delayInMilliseconds = 10; // this is one second
// console.log('setTimeout! - 2');
// const doLater = () => {
//   console.log('setTimeout! - 3');
// };
// console.log('setTimeout! - 4');
// setTimeout(doLater, delayInMilliseconds);
// console.log('setTimeout! - 5');

// function greet(person) {
//   if (person == { name: 'amy' }) {
//     return 'hey amy'
//   } else {
//     return 'hey arnold'
//   }
// }
// console.log(greet({ name: 'amy' }))

