// var x=12123 ;
// console.log(x)

  // Function is called, return value will end up in x

// function myFunction(a, b) {
//   return a * b;             // Function returns the product of a and b
// }
// console.log(myFunction(4,5))


// strong number++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var a=require("readline-sync")
// num=a.questionInt("enter you number ")
// var new_num=num
// var sum=0
// while (num>0){
//   var rem=num%10
//   x=1
//   j=1
//   while(j<=rem){
//     x=j*x
//   j++
//   }
//   sum=sum+x
//   num=Math.floor(num/10)

// }
// if (new_num==sum){
//   console.log("strong number")
// }
// else{
//   console.log("not ")
// }



// // Defining function
// function sayHello(name) {
//   return "Hello " + name
//  }
//  console.log(sayHello("Pragna"))
  
 
// function bye(name){
//   return "bye "+ name
// }
// console.log(bye("sunita"))



// function showFullname(firstName, lastName) {
//   console.log(firstName + " " + lastName);
//  }
//  // Calling function
//  showFullname("Kumar", "Nayak"); // 0utputs: Kumar Nayak
//  showFullname("Shwetha"); // 0utputs: Shwetha undefined
 

// function multi(num1,num2,num3){
//   console.log(num1*num2*num3)
// }
//  multi(1,2,3)


// function getResult(num1,num2,num3){
//   console.log(num1-num2+num3)
//  } 
//  getResult(2,3,4,5);

// function displaySubtraction(a,b){
//   console.log(ab);
// }
// displaySubtraction(2,3);

  
// function getSum(num1, num2) {
//   var total = num1 + num2;
//   return total;
//  }
//  var a =require("readline-sync");
//  num1=a.questionInt("enter no. ")
//  var b =require("readline-sync")
//  num2=b.questionInt("enter no. ")
//  console.log(getSum(num1,num2));



// function multiplyString(string,num){
//   return string*num;
// }
// console.log(multiplyString("kumar",2));


// Defining function
// function greetWorld() {
//   var greet = "Hello World!";
//   console.log(greet);
//  }
//  greetWorld(); // Outputs: Hello World!
//  console.log(greetWorld()); // Uncaught ReferenceError: greet is not defined


// console.log(typeof(undefined))

// var isEqual = function(str1,str2){
//   console.log(str1===str2)
// }
// isEqual("kumar","nayak");


// function myFunction(a, b) {
//   return a * b;
//  }
//  var x = myFunction(4, 3);
 

// console.log(add(4,5))
// function add(a,b){
//   return a+
//   b
// };


// var myfun=a=>{console.log(a);
// console.log("hello")};
// myfun(10)

// var myfun =(a) => ("helo")
// console.log(myfun())

// const x=[2,3,3,5,5,4,7,6,7]
// const y =[]
// for (i of x){
//   if (!y.includes(i)){
//     y.push(i)
//   }
// }
// console.log(y)


// const arr=[10,20,30,40,2000,60,70,80,90,]
// new_arr=[]
// for (i=0;i<arr.length;i=i+3){
//   small=[]
//   j=i
//   for  (j=i;j<i+3;j++){
//     small.push(arr[j])
//   }
// new_arr.push(small)

// }
// console.log(new_arr)


// const arr=[1,2,3,4,5,6]
// main=[]
// for (i of arr){
//   small=[]
//   small.push(i)
//   main.push(small)
// }
// console.log(main)



// console.log(-16/0)


// var x=null;
// console.log(x)
// console.log(typeof(add()))ull;
// // console.log(x)
// ull;
// // console.log(x)


// let arr;
// arr ="apple"
// arr.replace("a","z")
// console.log(arr)

// const x=["a"," b","c","d"]
// y=x.slice(2,3)
// console.log(y)

// // 1
// // 1 2
// // 1 2 3
// // 1 2 3 4
// // 1 2 3 4 5

// for (i=1;i<=5;i++){
//   str=""
//   for (j=1;j<=i;j++){
//     str=str+j
//   }
// console.log(str)
// }



// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5
// for (i=5;i>=1;i--){
//   x=5
//   str=""
//   for (j=1;j<=i;j++){
//     str=str+x
//     x=x-1
//   }
//   console.log(str)
// }


//         1    
//       1 2  
//     1 2 3 
//   1 2  3 4 
// 1 2 3  4 5

// for (i=1;i<=5;i++){
//   str=""
//   space=""
//   for (j=4;j>=i;j--){
//     space=space+" "
//   }
//   for (k=1;k<=i;k++){
//       str=str+k
//     }y=space+str
// console.log(y)
// }


// const arr=[["x","y","z"],["a","b","c"]]
// str=""
// for (i of arr){
//   for (j of i){
//     str=str+j
//   }
// }console.log(str)



// 12  # Should return '10 + 2'
// 42 # Should return '40 + 2'
// 70304  # Should return '70000 + 300 + 4'
// var str="70304"
// x=str.length
// y=""
// for (i of str){
//   x=x-1
//   y=y+i*10**x +"+"
// }
// console.log(str)


// List reflecting the modified run-length encoding from the said list:
// [[2, 1], 2, 3, [2, 4], 5, 1]
// const arr=[1, 1, 2, 3, 4, 4, 5, 1]
// const new_arr=[]
// for (i of arr){
//   c=0
//   for (j of arr){
//     if (i===j){
//     c=c+1
//   }
//  }new_arr.push([c,i])
// }
// console.log(new_arr)

// const person = {firstName: "John",lastName: "Doe",age: 50,eyeColor: "blue"};
// // console.log(person.firstName)
// // console.log(person["firstName"])

// for (i in person){
//   console.log(person[i])
// }

// const myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//      },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };

// const gloveBoxContents = myStorage["car"]["inside"]["glove box"];
// console.log(gloveBoxContents)

// const myPlants = [
//   {
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }
// ];

// const secondTree =myPlants[1].type;
// console.log(secondTree)

// const myArray = [];
// // Only change code below this line
// for (var i=9;i>0;i--){
//   if ( i%2!=0){
//     myArray.push(i)
//   }
// }console.log(myArray)

// const myArr = [2, 3, 4, 5, 6];
// var total=0
// // Only change code below this line
// for (var i of myArr){
//   total+=i
// }console.log(total)

// Setup
// const contacts = [{
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },{
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },{
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },{
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],},];
// function lookUpProfile(name, prop) {
// for (var i of contacts){
//     if (name===i["firstName"]){
//       console.log(i[prop])
//     }
// }}

// lookUpProfile("Kristian", "lastName")



// function randomFraction() {
//   return  Math.random();
// }
// console.log(randomFraction())

// console.log(parseInt(10.9))

// function nextInLine(arr, item) {
//   // Only change code below this line
//    arr.push(item);
//   var removed = arr.shift();
//   return removed; // Change this line
// }
//   // Only change code above this line

// // Setup
// const testArr = [1, 2, 3, 4, 5];
// nextInLine([],1)
// // Display code
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(typeof(testArr)));
// for(i of testArr){
//   console.log(typeof(i))
// }


// var testObj = {
//   12: "Namath",
//   16: "Montana",
//   19: "Unitas"
// };
// console.log(testObj[16])

// function convertToInteger(str) {
//   return parseInt(str,2)
//   }
  
//   console.log(convertToInteger("1001"));

// d1 = {'a': 100, 'b': 200, 'c':300}
// d2 = {'a': 300, 'b': 200, 'd':400}
// // Sample output: {'a': 400, 'b': 400, 'd': 400, 'c': 300}
// var dic={}
// for (i in d1){
//   if (i in d2){
//     d2[i]=d1[i]+d2[i]
//   }
//   else{
//     d2[i]=d1[i]
//   }
// }
// console.log(d2)


// // Sample input ( n = 5) :
// // Output : {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}.
// const a=require("readline-sync")
// var y=a.questionInt("enter any number")
// dic={}
// for (i=1;i<=y;i++){
//    dic[i]=i*i
// }console.log(dic)

// mainString="My name is kumar, and my friend's name is Dhamu"
// subString="is"
// x=mainString.split(" ")
// c=0
// for (i of x){
//   if (i=== subString){
//     c=c+1
//   }
// }console.log(c)

// var dic1={1:10, 2:20};
// var dic2={3:30,2:40};
// var dic3={5:50,6:60};
// for(i in dic1){
//   for (j in dic2){
//     if (i===j){
//       dic3[i]=dic1[i]+dic2[j]
//       break
//     }else{
//       dic3[i]=dic1[i]
//       dic3[j]=dic2[j]
//     }
//   }

// }console.log(dic3)

// add value of same key+++++++++++++++++++++++++++++++++++++++++++++++++++++
// d1 = {'a': 100, 'b': 200, 'c':300}
// d2 = {'a': 300, 'b': 200, 'd':400}
// for (i in d1){
//   for (j in d2){
//     if (i===j){
//       d2[i]=d1[i]+d2[j]
//       break
//     }
//    else {
//     d2[i]=d1[i]
//   }}
// }console.log(d2)

// key exist or not+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const a=require("readline-sync")
// x=a.question("entwr")

// dict={"name":"Raju", "marks":56}
// if (x in dict){
//   console.log("exit")
// }else{
//   console.log("not")
// }


// dict = {
//   'data1':100,
//   'data2': -54,
//   'data3': 247}
//   sum=0
//   for (i in dict){
// sum=sum+dict[i]
//   }console.log(sum)
  
// myDict= {1: 'NAVGURUKUL',2: 'IN',3:{'A' : 'WELCOME','B' : 'To','C' : 'DHARAMSALA'}}
// // // myDict= {1: 'NAVGURUKUL',2: 'IN',3:{ 'B' : 'To','C' : 'DHARAMSALA'}}
// for (i in myDict){
//   if (typeof myDict[i]==="object"){
//     delete myDict[i]['A']
//   }}
//   console.log(myDict)

// merge two list in dic+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var list1=["one","two","three","four","five"]
// var list2=[1,2,3,4,5,]
// dic={}
// for ( i in list1){
//   dic[list1[i]]=list2[i]
// }console.log(dic)


// find unique+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// l=[{"first":"1"},{"second": "2"},{"third": "1"},{"four": "5"},{"five":"5"},{"six":"9"},
// {"seven":"7"}]
// list=[]
// for (i in l){
//   for(j in l[i]){
//     if (!list.includes(l[i][j])){
//     list.push(l[i][j])}
// }}console.log(list)

// const a=require("readline-sync")
//  x= a.questionInt("enter student ")
//  dic={}
//  for (i=0;i<x;i++){
//   student = a.question("enter student name ")
//   mark= a.questionInt("enter student mark  ")
// dic[student]=mark
//  }console.log(dic)

// count number of word+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const list1=[]
// const word="MISSISSIPPI"
// let output={}
// for (i of word){
//   c=0
//   for (j of word){
//     if (i===j){
//       c=c+1
//     }
//   }
//   output[i]=c
// }
// console.log(output)

// var dict = {'Alex': ['subj1', 'subj2', 'subj3'],'David': ['subj1', 'subj2']}
// c=0
// for ( i in dict){
//    for (j of dict[i]){
//      c=c+1
//    }
// }console.log(c)

// // third max++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var d = {
//   'a':50,
//   'b':58,
//   'c':56,
//   'd':40,
//   'e':100,
//   'f':200}
// max=0
// sm=0
// tm=0
// for (i in d){
//   if (max<d[i]){
//     tm=sm
//     sm=max
//     max=d[i]
// }
//   else if (d[i]<max && sm<d[i]){
//     tm=sm
//     sm=d[i]}
//   else if (d[i]< sm && tm<d[i]){
//     tm=d[i]
// }
// }
// console.log(max,sm,)

// sort+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// d1={a:6,b:5,c:8}
// for (i in d1){
//  for (j in d1){
//    if (d1[i]<d1[j]){
//      a=d1[i]
//      b=d1[j]
//     d1[i]=b
//     d1[j]=a
//    }
//  }
// }console.log(d1)

// const obj={a:5,b:4,c:1}
// var sum=0
// for (var i in obj){
// sum=sum+obj[i]
// }console.log(sum)


// const obj = {name:"sunitha","last name":"navgu rukul"}
//  const res= obj["last name"]
//  console.log(res)


// palindrom++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var str = "radaeeee"
// n=""
// for (i=str.length-1;i>=0;i--){
// n=n+str[i]
// }
// if (n===str){

//   console.log("yes")
// }
// else{
//   console.log("no")
// }

// How to find all pairs in an array of integers whose sum is equal to the given number?+++++++++++++++++++++++++++++++++++++++
// Output: [[11,19], [12,18],[13,17]]
// var number = 30
// var n = [10, 11, 12, 13, 14, 17, 18, 19]
// arr=[]
// for (i of n){
//   a=[]
//   for (j of n){
//     if(i+j===number){
//       arr.push([i,j])
//     }
//   }
// }
// console.log(arr)

// map++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const myMarks= [1,4,6,8,10]
// //by forEach method and arraow function inside it
// myMarks.map((e) => console.log(e*2));
 
// const myMarks= [1,4,6,8,10]
// myMarks.forEach((e)=>console.log(e))
