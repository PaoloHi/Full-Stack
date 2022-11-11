/*Given an integer x, return true if x is a 
palindrome
, and false otherwise.*/

let nums = 1221;
let str = nums.toString();
let arr = Array.from(str);

var rra = [];
for (i=0; arr.length > i ;i++){
    rra.unshift(arr[i]);
}
console.log(rra);

var palindromo = rra.join('');
console.log(palindromo)

if (palindromo == nums){
   console.log("es un numero palindromo")
} else {
   console.log("no es un palindromo")
}

/** parece que en general funciona bien  */

/* Aceptado por leet code 

/**
 * @param {number} x
 * @return {boolean}
 
 var isPalindrome = function(nums) {
   let str = nums.toString();
   let arr = Array.from(str);
   var rra = [];

   for (i=0; arr.length > i ;i++){
       rra.unshift(arr[i]);
   }

   var palindromo = rra.join('');


   if (palindromo == nums){
       return true;
   } else {
       return false;
   }

};
 
cuestiones a mejorar ¡¡¡¡¡¡

Runtime
243 ms
Memory
51.4 MB

QUE CHULADA ¡¡¡¡
**/