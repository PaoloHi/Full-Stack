/** 
 * si necesitas una descripcion ahi esta en leetcode buscalo asi 
 */

 var fibonacci = [1,1,2,3]
 var n = 5;
 
 
 for (let i = 3; i < n; i++) {
     next = fibonacci[i] + fibonacci[i - 1];
     fibonacci.push(next);
 }
 
 console.log(fibonacci)
 