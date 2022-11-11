
var searchInsert = function(nums, target) {
    for(i=0;i<nums.length ;i++){
        if(target == nums[i]) {
            console.log(i);
        } else if (i == nums.length ){
            nums.unshift(target);
            nums.sort();
            searchInsert(completo,target);
        } 
    }
};

searchInsert([1,3,5,6],2)


/*searchInsert(nums,target)*/   

/* // Binary Search
propuesto por alguien es una chulada de codigo la verdad 
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length
    while(left < right) {
        const mid = left + Math.floor((right - left) / 2)
        if(nums[mid]===target) {
           return mid
        } else if(nums[mid] > target){
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
};

este funciona con menos lineas de codigo y tambien es incriblemente limpio 


var searchInsert = function (nums, target) {

  for (let index = 0; index < nums.length; index++) {
    if (target <= nums[index]) {
      return index;
    }
  }
  return nums.length;
};

*/