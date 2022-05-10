// var data = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("hello")
//     },2000)
// })

// data.then(function(val){
//     console.log(val)
// })


// function prom(complete){
//     return new Promise (function (resolve,reject){
//         console.log("fetching data, plz wait")
//         setTimeout(()=>{
//             if (complete){
//                 resolve("i am succesfull")
//             }
//             else{
//                 reject("i am failed")
//             }
//         },3000)
//     })
// }
// prom(true).then((result)=>{
    //     console.log(result)
    // })
    // prom(false).catch((error)=>{
        //     console.log(error)
        // })
        
        
        // asynchronous by setTimeout++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const datas=[
//     {name:"sunita",profession:"softwere emgineer"},
//     {name:"rekha",profession:"softwere emgineer"}
// ];

// function get(){
//     setTimeout(()=>{
//         let output ="";
//         datas.forEach((data,index)=>{
//             output+=data.name
//         })
//         console.log(output)
//     },3000)
// }
// function createdata(newdata){
//     setTimeout(()=>{
//         datas.push(newdata)
//     },2000);

// }
// get();
// createdata({name:"geetu",profession:"softwere emgineer"})



// // asynchronous by callback ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const datas=[
//     {name:"sunita",profession:"softwere emgineer"},
//     {name:"rekha",profession:"softwere emgineer"}
// ];
// function get(){
//     // setTimeout(()=>{
//         let output ="";
//         datas.forEach((data,index)=>{
//             output+=data.name
//         })
//         console.log(output)
//     // },3000)
// }
// function createdata(newdata,callbackfunction){
//     // setTimeout(()=>{
//         datas.push(newdata)
//         callbackfunction()
//     // },2000);
// }
// // get();
// createdata({name:"geetu",profession:"softwere emgineer"},get)


//         // asynchronous by promisse++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const datas=[
//     {name:"sunita",profession:"softwere emgineer"},
//     {name:"rekha",profession:"softwere emgineer"}
// ];
// function get(){
//     setTimeout(()=>{
//         let output ="";
//         datas.forEach((data,index)=>{
//             output+=data.name
//         })
//         console.log(output)
//     },3000)
// }
// function createdata(newdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             datas.push(newdata)
//             let error=false;
//             if (!error){
//                 resolve("right ");
//             }else{
//                 reject('wrong')
//             }
//        },2000);
//     })
// }
// createdata({name:"geetu",profession:"softwere emgineer"}).then((result)=>{
//     get()
//     console.log(result)
// }).catch(err=>{
//     console.log(err)
// })



// const onMyBirthday = (isKayoSick) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (isKayoSick) {
//           resolve(2);
//         } else {
//           reject(new Error("I am sad"));
//         }
//       }, 2000);
//     });
//   };
//   onMyBirthday(false).then((fromresolve)=>{
//       console.log(fromresolve)
//   }).catch((fromreject) =>{
//     console.log(fromreject)
//   })

// function addAsync(x, y) {
//     return new Promise(
//       (resolve, reject) => { // (A)
//         if (x === undefined || y === undefined) {
//           reject('Must provide two parameters');
//         } else {
//           resolve(x + y);
//         }
//       });
//   }
// addAsync(3,4).then((fromresolve) =>{
//     console.log(fromresolve)
// }).catch((fromreject) =>{
//     console.log(fromreject)
// })



// const promise = new Promise((resolve, reject) => {
//     const res = false;
//     // An asynchronous operation.
//     if (res) {
//       resolve('Resolved!');
//     }
//     else {
//       reject(('Error'));
//     }
//   });
//   promise.then((res) => console.log(res)).catch((err) => console.log(err));



// const prom = new Promise((resolve, reject) => {
//     reject("not")
//     resolve('Yay!');
//   });
//   const handleSuccess = (resolvedValue) => {
//     console.log(resolvedValue);
//   };
//   const handlerejection = (rejectedValue) => {
//     console.log(rejectedValue);
//   };
//   prom.catch(handlerejection);
//   prom.then(handleSuccess);



// function dieToss() {
//     return Math.floor(Math.random() * 6) + 1;
//   }
//   console.log('1');
//   var promise = new Promise(function(fulfill, reject) {
//     var n = dieToss();
//     if (n === 6) {
//       fulfill(n);
//     } else {
//       reject(n);
//     }
//     console.log('2');
//   });
//   ;
//   promise.then(function(toss) {
//     console.log('Yay, threw a ' + toss + '.');  
//   }).catch(function(toss) {
//     console.log('Oh, noes, threw a ' + toss + '.');  
//   });
//   console.log('3')


// var promise = new Promise(function(resolve, reject) {
//     const x = "geeksforgeeks";
//     const y = "geeknnsforgeeks"
//     if(x === y) {
//         resolve();
//     } else {
//         reject();
//     }
//     });
    
//     promise.
//         then(function () {
//             console.log('Success, You are a GEEK');
//         }).
//         catch(function () {
//             console.log('Some error has occurred');
//         });
    


// promise
//     .then(result => {
//         // process the result
//     })
//     .catch(error => {
//         // handle the error
//     })
//     .finally(() => {
//         // clean up the resources
//     });


const prom = new Promise((resolve, reject) => {
    let x=true;
    if (x){
        resolve("yes")
    }
    else{
        reject("not")
    }
})
  prom.catch((error) => {
    console.log(error); // 0
  })
  .then((result) => {
    console.log(result); // Will not run
  })
  .finally(() => {
    console.log('clean up',); // 'clean up'
  });
