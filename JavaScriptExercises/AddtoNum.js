
var l1 = [2,4,3];
var l2 = [5,6,4];

var inveresel1 = [];
var inveresel2 = [];

for(i=0; i<l1.length ;i++){
    inveresel1.unshift(l1[i]);
}
for(i=0;i<l2.length;i++){
    inveresel2.unshift(l2[i])
}
console.log(inveresel2)

var l1str = inveresel1.join("");
var l2str = inveresel2.join("");
    console.log(l1str)
    console.log(l2str)

var sum = parseInt(l1str,10) + parseInt(l2str,10);
console.log(Array.from(sum.toString()))


