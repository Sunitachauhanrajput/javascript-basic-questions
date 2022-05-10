// "use strict"
// function name(params) {
//     console.log(this);
// }
// name()


// d={a:1,b:2}
// const obj={
//     name:"sunita",
//     age:20,
//     say(){
//         console.log(this.name)
//     }
// };
// obj.say()

// const thapa={
//     name:"vinod",
//     qua:"msc",
//     sum:function(){
//         var add=2+2;
//         console.log("sum",add);
//         console.log(this)


//     }
// }
// thapa.sum()

// let obj={
//     first:"sunita",
//     last:"chauhan",
//     fullname: function(){
//         console.log(this.first + " "+this.last)
//     },
//    address:{
//        street:123,
//        city:"alwer",
//        getad:function(){
//             console.log(this.street +" "+this.city)
//             console.log(this.first)
//        }
//    }
// }
// obj.fullname();
// obj.address.getad()

// obj1={
//     a:1,b:2
// }
// obj2={
//     c:3,d:4
// }
// console.log({...obj1,...obj2})

// x=(2,5,7,8)
// console.log(x)

// var my = (a)=> {
//     console.log(a)
// }
// console.log("hii")
// my(1);    
// obj=[1,3]  
// for (i in obj){
//     console.log(obj[i])
// }

// a="helo"
// console.log(a)
// var a;

// var name="sunita";
// function say(){
//     console.log(name)
//     var first=
// }

// var text="out";
// function logit(){
//  console.log(text)
//  var text = "inside"
// }
// logit()

// var data = this;
// console.log(data);

// function logThis(){
//     return this;
// }
// console.log(logThis()); //

// var instructor = {
//     firstName: 'Tim',
//     sayHi: function(){
//         console.log("Hello! " + this.firstName);
//     }
// }
// instructor.sayHi() // ?


// var instructor = {
//     firstName: 'Tim',
//     info: {
//         catOwner: true,
//         boatOwner: true
//     },
//     displayInfo: function(){
//         console.log("Cat owner? " + this.info.catOwner);
//     }
// }
// instructor.displayInfo() // ?

// var instructor = {
//     firstName: 'Tim',
//     info: {
//         catOwner: true,
//         boatOwner: true,
//         displayLocation: function(){
//             console.log( this.catOwner);
//         },
//         data: {
//             location: "Oakland"
//         }
//     },
// }
// instructor.info.displayLocation() 

// var instructor = {
//     firstName: 'Tim',
//     info: {
//         catOwner: true,
//         boatOwner: true,
//         displayLocation: function(){
//             return this.data.location;
//         },
//         data: {
//             location: "Oakland"
//         }
//     },
// }

// console.log(instructor.info.displayLocation()) // ?

// var bunny = {
//     lovesCarrots: true,
//     f: function () {
//       return this.lovesCarrots;
//     }
//   }
//   console.log(bunny.f())
  
  
// var person = {
//     firstName: "Penelope",
//     lastName: "Barrymore",
//     getName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   console.log(person.getName())

// var golfGames = {
//     tournament: "The Masters",
//     players:
//     [
//       {name:"T. Woods", age:37},
//       {name:"P. Mickelson", age:43}
//     ],
//     showAllGames: function () {
//       currObject = this;
//       this.players.forEach (function (player) {
//         console.log(player.name + ' is playing at ' + currObject.tournament);
//       })
//     }
//   }
  
//   golfGames.showAllGames();

// var player1 = {
//     firstName: "Jack",
//     lastName: "Black",
//     getName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   var player2 = {
//     firstName: "Bunny",
//     lastName: "Rabbit",
//     getName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   var game = {
//     players: [],
  
//     listPlayers: function () {
//       this.players.forEach(function (player) {
//         console.log(player.getName());
//       });
//     }
//   }
//   game.players.push(player1, player2);
//   game.listPlayers();

// var foo = {
//     name: "anil",
//     age: 30
//    };function getDetails() {
//     return (this.name + " is" + this.age + " yrs old.");
//    }foo.logMyDetails = getDetails;
//    console.log(foo.logMyDetails());//anil is 30 yrs old.

// function employee(name) {
//     this.name = name;
//     this.getName = function () {
//      return this.name;
//     }
//    }
//    var e1 = new employee("anil");
//    console.log(e1.getName());
   
// //    #anil 


// var x = "outermost";
// var foo = {
//       x: "inner",
//       baz: {
//            x: "innermost",
//            bar: function () {
//               return this.x;
//            }
//       }
// }
// var go = foo.baz.bar;      // # "this" refers to global object
// console.log(go);
// console.log(foo.baz.bar())//# outermost
// // # innermost

// function foo(){
// 	const a = () => {
//   	console.log(this);
//   }
//   a();
// }
// foo();


// const a = {
//       foo : function(){
//                   const doo = () => {
//                     console.log(this);
//               }
//               doo();
//             }
//       }
// a.foo();

// const a = {
// 	name : 'wasef'
// }
// function foo() {
// 	const doo = () => {
//   		console.log(this);
//   }
//   doo();
// }
// const newFoo = foo.bind(a);
// newFoo();


// var myObject = {
//       foo: "bar",
//       func: function() {
//           var self = this;
//           console.log("outer func:  this.foo = " + this.foo);
//           console.log("outer func:  self.foo = " + self.foo);
//           (function() {
//               console.log("inner func:  this.foo = " + this.foo);
//               console.log("inner func:  self.foo = " + self.foo);
//           }());
//       }
//   };
//   myObject.func();


// var myObject = {
//       foo: "bar",
//       func: function() {
//           var self = this;
//           console.log("outer func:  this.foo = " + this.foo);
//           console.log("outer func:  self.foo = " + self.foo);
//           const doo = () => {
//               console.log("inner func:  this.foo = " + this.foo);
//               console.log("inner func:  self.foo = " + self.foo);
//           };
//           doo();
//       }
//   };
//   myObject.func();


