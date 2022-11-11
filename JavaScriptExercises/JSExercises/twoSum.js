/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

/* SOLUCION PROPUESTA :*/
let nums = [3,2,4]

target = 6
i=0
j=0
toSum = 0;
while ( target !== toSum ){
    var first = nums[i];
    toSum = first + second
    if(target != toSum) {
        var second = nums[j];
        j++;}else {
            console.log(`Because :${nums[i]} + ${nums[j-1]} = ${target}`)}
    i++;}


/* SOLUCION QUE OFRECE LEETCODE
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if(i !== j){
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
}

Status: Accepted
Runtime: 172ms
Memory: 34.8MB



here there is a hash-map solution 

var twoSum = function (nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in obj) {
      return [obj[target - nums[i]], i]
    } else {
      obj[nums[i]] = i;
    }
  }
};




*/