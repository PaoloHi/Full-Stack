var mySqrt = function(x) {
    for (i=0;i<x+1;i++){
        var sqrt = i * i;
        if (sqrt > x ){
        return i-1;
        }
    }
};

let x = 0;

for (i=0;i<x+2;i++){
    var sqrt = i * i;
    console.log(sqrt)
    if (sqrt > x ){
    console.log(i-1)
    }
}