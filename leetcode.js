// 1.palindrom++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var isPalindrome = function(x){
//     y=""+x
//     str=""
//     for (i=1;i<=y.length;i++){
//     str=str+y[y.length-i]
//     }
// if (y===str){
//     return ("yes")
// }
// else{
//     return ("not")
// }
// }
// console.log(isPalindrome(1234))

// leetcode++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 2 var twoSum = function(nums, target) {
//     for (i in nums){
//         for (j in nums){
//             if (i!==j){
//                 if (nums[i]+nums[j]== target){
//                     return [i,j]
//                 }
//             }
//         }
//     }  
// };console.log(twoSum([2,7,11,15],9))

//3  merge two list ++++++++++++++++++++++++++++++++++++++++++++++++++++
// var mergeTwoLists = function(list1, list2) {
//     const new_list=[];
//     for (var i in list1){
//        new_list.push(list1[i]);
//        new_list.push(list2[i]);
//     }return new_list;
// };
// console.log(mergeTwoLists ([1,2,4],[1,3,4]));

//4  Remove Duplicates from Sorted Array+++++++++++++++++++++++++++++++
// nums = [0,0,1,1,1,2,2,3,3,4]
// arr=[]
// for (i of nums ){
//     if (!arr.includes(i)){
//         arr.push(i)
//     }
// }console.log(arr)

// 5 Remove Element +++++++++++++++++++++++++
// const nums = [3,2,2,3], 
// val = 3
// const arr=[]
// for ( i of nums){
//     if (i!=val){
//       arr.push(i)
//     }
// }console.log(arr)


// 6 Given a sorted array of distinct integers and a++++++++++++++++++
//  target value, return the index if the target is 
//  found. If not, return the index where it would 
//  be if it were inserted in order.
// nums = [1,3,5,6], target = 2
// Output: 1
// if (!nums.includes(target)){
//     nums.push(target)
// }
// for (i=0;i<nums.length;i++){
//     for (j=0;j<nums.length;j++){
//         if(nums[i]<nums[j]){
//             temp=nums[i]
//             nums[i]=nums[j]
//             nums[j]=nums[i]
//         }
//     }
//   }  console.log(nums)

// 7 length of last word+++++++++++++++++++++++++++++++
// var str="Hello World"
// x=str.split(" ")
// for (i of x){
//     len=i.length
// }console.log(len)

// MEDIUM 
// 8 Add  Numbers form 2 arr++++++++++++++++++
// Output: [8,0,7]
// Explanation: 342 + 465 = 807.
// let l1 = [3,4,2];
// let l2 = [4,6,5] ;
// str1="" ;
// str2="" ;
// for (i of l1){
//     str1+=i ;
// } ;
// for (i of l2){
//     str2+=i ;
// } ;
// x=Number(str1) ;
// y=Number(str2) ;
// add=(x+y+"")
// console.log(add.split(""))

// // 9 Longest Substring Without Repeating Characters++++++++++++
// var s = "abcabcbb";
// var new_str="";
// for (var i of s){
//     if (!new_str.includes(i)){
//         new_str+=i;
//     };
// };
// console.log(new_str.length);

// 10 String to Integer (atoi)++++++++++++++++++++++++++++++
// let s="4193 with words";
// var str1="";
// for (var i of s){
//     if (/^[0-9]*$/.test(i)){
//          str1+=i;
//     };
// };
// output=Number(str1);
// console.log(output);


// // 11 Find First and Last Position of Element in Sorted Array++++++++
// Input: nums = [5,7,7,8,8,10], target = 7
// Output: [3,4]
// arr=[-1,-1]
// for (i in nums){
//     if(nums[i]==target){
//         arr.splice(0,1)
//         arr.push(i)
//     }
// }
// console.log(arr)

// 12 Multiply Strings+++++++++++++++++++++++++++++++++++
// var num1 = "123";
// var num2 = "456"
// Output: "56088"
// var x=Number(num1)
// var y=Number(num2)
// multiply=x*y+""
// console.log(multiply)

// HARD
// 13 find minimum number in array++++++++++++++++++++++++++
// const array=[4,5,6,7,1,4]
// var temp=array[0]
// for (i of array){
//     if(temp>i){
//         temp=i
//     }
// }console.log(temp)

// 14 Number of Digit One+++++++++++++++++++++
// const a=require("readline-sync")
// n=a.questionInt("enter number")
// var countDigitOne = function(n) {
//    var c=0;
//    for(var i=0;i<=n;i++){
//    var str1=i+"";
//     for (var j of str1){
//         if (j=="1"){
//           c=c+1;
//           };
//       };
//     };
//     return c 
// }
// console.log(countDigitOne(11));