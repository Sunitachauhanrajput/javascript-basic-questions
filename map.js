// let numbers = [1, 2, 3, 4];
// var result=numbers.map((val) => val * val);

// console.log(result);
// console.log(numbers);

// retuen value+++++++++++++++++++++++++++++++++++++++++++++++++++
// const myFriends= ["Shweta","komal","jyoti","chauhan"]
// var result= myFriends.forEach((e) => e)
// console.log(result);
 
// function b(x){
//     return x.toString(2)
// }
// result=
// console.log(e.toString(2))

// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//       ];
//   persons.map(function getFullName(item) {
//     console.log( [item.firstname,item.lastname].join(" "));
//   });
  
// const persons = [{firstname : "Malcom", lastname: "Reynolds"}, ];
// console.log(persons.map(function x(value,index,array){
//     return ([value.firstname,value.lastname].join("*"))
// }))

// const ages = [32, 33, 16, 40];
// console.log(ages.map(function x(item,value,arr){
//     return item
// }))

// even from array

// const arr=[1,2,3,4,5,6]  
// var y= arr.map(function x(item){
//     if (item%2===0){
//         return item
//     }
//     else{
//         return arr
//     }
// })

// const res = arr.filter((ele)=>{
//     // console.log(ele)
//     if(ele%2===0){
//         return ele
//     }
// })
// console.log(res)

var b = [undefined];
b[2] = 1;
console.log(b);             // (3) [undefined, empty × 1, 1]
console.log(b.map(e => 7)); // (3) [7,         empty × 1, 7]

