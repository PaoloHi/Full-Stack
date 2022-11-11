var nums1 = [3]
var nums2 = [-2,-1]

var nums3 = nums1.concat(nums2);

function sortNumber(a, b) {
    return a - b;
 }
nums3.sort(sortNumber); 
console.log(nums3)
if(nums3.length % 2 == 0) {
    var median = (nums3[Math.floor(nums3.length / 2)-1] + nums3[Math.ceil(nums3.length / 2)]) /2
} else {
    var median = nums3[Math.floor(nums3.length / 2)]
    console.log(Math.floor(nums3.length / 2))
}
    
console.log(median)


