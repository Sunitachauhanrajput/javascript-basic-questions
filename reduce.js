// const numbers = [175, 50, 25];
// console.log(numbers.reduce(function myFunc(total, num) {
//     console.log(total);
   
//     console.log(num)
//     // return (total - num );
// }))

// const d=[{a:1},{b:2},{c:3}]
// d.reduce((arr,item)=> {
//     return [item]
// })
// console.log(arr)

// const input = [ 1, -4, 12, 0, -3, 29, -150];
// consol.log(input.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
//   },));

// var x = input.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// console.log(x)

// const input = 'George Raymond Richard Martin';
// x=input.split(' ').map(function(word) {
//     return word[0];
//   })
//   console.log(x.join(''));

//   x=input.split(' ').filter(function(word) {
//     return word[0];
//   })
//   console.log(x.join(''));

//   x=input.split(' ').reduce(function(word) {
//     return word[0];
//   })
//   console.log(x);


// var x=input.split(' ').map(word => word[1]).join('');
// console.log(x)
// var x=input.split(' ').filter(word => word[1]).join('');
// console.log(x)
// var x=input.split(' ').reduce(word => word[0]);
// console.log(x)


// const input = [{name: 'John',age: 13},{name: 'Mark',age: 56,},
//     {name: 'Rachel',age: 45,},{name: 'Nate',age: 67,},
//     {name: 'Jeniffer',age: 65,}];
//   const ages = input.map(person => person.age);
//   [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
//   console.log(ages)

// const arr=['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];
// x= arr.map(function items(item){       
//     return item
// });
// console.log(x)

// const arr=[1,2,3,4,5,6,7,8,9,10]
// even_sum=0;
// odd_sum=0;
// console.log( arr.filter(function n(item){
//  if (item%2==0){
//     even_sum=even_sum + item
//  }else{
//     odd_sum+= odd_sum + item
//  }
//  return even_sum,odd_sum
// }))

// const array = [1,2,3,4,5];
// function reducer(previous, current, index, array) {
//   const returns = previous + current;
//   console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
//   return returns;
// }
// array.reduce(reducer);


// let initialValue = 0
// let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (previousValue, currentValue) {
//     console.log( currentValue.x)
// }, initialValue)
// console.log(sum) // logs 6

// arr=[{name:"sunita",price:100},{name:"rani",price:200}]
// const totalprice=arr.reduce((total,item)=>{
//    return total +item.price
// },0)
// console.log(totalprice)



// const arr= [{"sunita":1,"bicycle":true},
// {"kavi":2,"bicycle":true},{"manju":3,"bicycle":false},
// {"rani":4,"bicycle":true}]
// new_array=[]
// function fun(previous,item,index,array){
//         if ( item.bicycle === true){
//            return item
//         }
// }
// console.log(arr.reduce(fun))
