function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
    return [add, subtract, multiply, divide];
  }
  const [add, subtract, multiply, divide] = calculate(4, 2);
  console.log(add )
  console.log(subtract )
  console.log(multiply )
  console.log(divide )

// const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021, 
//     color: 'red'
//   }
//   function myVehicle({type, color, brand, model}) {
//       const message ='My '+ type +' is a '+ color 
//       +' '+ brand+ ' ' + model + '.';
//       console.log(message);
//     }
//     myVehicle(vehicleOne);

// const vehicleOne = {brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021, 
//     color: 'red',
//     registration: {city:'Houston',size:{a:"big",b:"small"},country: 'USA'}}
// function myVehicle({ model, registration: { size:{a} } ,registration:{country}}) {
//     const message = 'My '+model+' is registered in '+a+" contry "+ country;
//     console.log(message);
// }
// myVehicle(vehicleOne)
  
// const arr= [2,4,5]
// const [a,b,c,d]=arr
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// let salesRecords = [12000, 6832, 10361, 10000, 9243, 13287];
// let [January, February, March, ...secondQuarter] = salesRecords;
// console.log(January); //12000
// console.log(February); //6832
// console.log(March); //10361
// console.log(secondQuarter); //[10000, 9243, 13287]

// function sum(...args){
//     let total = 0;
//     for(let number of args){
//        total += number;
//     }
//     return total;
//  }
//  console.log(sum(1, 2)); //will give 3
//  console.log(sum(1, 2, 3)); //will give 


// function display(arg1,arg2 ,...args){
//     console.log(arg1);
//     console.log(arg2);
//     console.log(args);
//  }
//  display(2, 3, 4, 5, 6);

// function displayName({first, last}){
//     console.log(first,last);
//   }
//   const person = {
//       first: 'Elon',
//       last: 'Musk',
//       twitter: '@elonmusk',
//       company: 'Space X'
//   }
//   displayName(person);

// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;
// console.log(numPlanets); // ?
// console.log(yearNeptuneDiscovered); // ?

// let planetFacts = {numPlanets: 8,yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659};
//   let {numPlanets, ...discoveryYears} = planetFacts;
//   console.log(discoveryYears); // ?

// const arr= [2,4,7,8]
// const [a,...b]=arr
// console.log(a)
// console.log(b)

// function getUserData({first, favorite}){
//     console.log("Your name is "+first
//     +" and you like "+ favorite)
// }
// const x= {first:"red",favorite:"black"}
// getUserData(x)// ?

// {console.log("EXERCISE 1");
//     let item = ["Egg", 0.25, 12];
//     let name = item[0];
//     let price = item[1];
//     let quantity = item[2];
//     console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
//     console.log();}

// const obj = { firstName: 'Bob', lastName: 'Smith' };
// const { firstName = 'Samantha', middleName = 'Chris' } = obj;
// console.log( firstName ); // Expected output: 'Bob'
// console.log( middleName ); // Expected output: 'Chris'

// const obj = { firstName: 'Bob', lastName: 'Smith' };
// const { firstName: first, lastName } = obj;
// console.log( first ); // output: 'Bob'
// console.log( lastName ); //output: 'Smith'

// // const obj = { firstName: 'Bob', lastName: 'Smith' };
// const { firstName: first = 'Samantha', middleName: middle = 'Chris' } = obj;
// console.log( first ); // Expected output: 'Bob'
// console.log( middle); // Expected output: 'Chris'
// console.log( firstName )

// const data = { f1: 'v1', f2: '2', f3: 'v3' };
// const { f1, f2: field2, f4 = 'v4' } = data;
// console.log( f1, field2, f4 );

// const data = { arr: [ 1, 2, 3 ] };
// const { arr: [ ,  v2, ] } = data;
// console.log( v2 ); 

// const courseCatalogMetadata = [{title: 'Linear Algebra II',
//       description: 'Advanced linear algebra.',
//       texts: [ {author: 'James Smith',price: 120,
//         ISBN: '912-6-44-578441-0'} ]}];
//    const [ { texts: textbooks } ] = courseCatalogMetadata;
//    const [ { texts: [ textbook ] } ] = courseCatalogMetadata;
// //    const [ { texts: [ { ISBN } ] } ] = courseCatalogMetadata;
   
//    console.log( textbooks );
//    console.log( textbook );
//    console.log( ISBN );


