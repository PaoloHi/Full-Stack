s = "ghjgapa"
var arr = Array.from(s)
var rra = [];

/** para voltear el array */
for (i=0; i < arr.length;i++){
rra.unshift(arr[i]);}
 
/*funcion para evaluar si el substring es un palindromo*/
function palindromo(arrstr,rrastr) {
    if(arrstr !== rrastr) {
        return false;
    }else {
        return true;
    }
}

/*para  convertir los arrays en string*/

var rrastring = rra.join('');
var arrstring = arr.join('');


/*para buscar */

console.log(arr.shift())

function buscar(target) {
    for(j=0;j<arr.length;j++) {
        if ( target == arr[j]) {
            return j;
            break;
        }
    }
}

var index = buscar("a");
console.log(index)

/*metodo para elmiminar sobrantes de un array*/
var arrless = arr
function eliminar(arrayeliminar){
    while(arrayeliminar.length > j ) {
        arrayeliminar.pop(); 
    }
    return arrayeliminar;
}

console.log(eliminar(arrless));


/*





while(arrNew.length != 0 || pal !== true){
    var arrNew = arr;
    if (pal != false)
}

*/

/*
while(arr.length !=0) {
    for (i=0; i < arr.length;i++){/** este es para voltear el array 
    rra.unshift(arr[i]);}

    var arrstring = arr.join('')/* este es para  convertir en string
    var rrastring = rra.join('')
    if (rrastring == arrstring) {
        console.log("es un palindromo")
    } else {
        arr.pop();
    }
}
*/
/*

while(arrless.length !== 0){
    var rra = [];
    for (i=0; arr.length > i ;i++){
    rra.unshift(arr[i]);}
    console.log(rra)
    if (rra == arr) {
        console.log("es un palindromo")
    }
}

var arr = arr.pop();
        var arr = arr.shift();
        var arrless = arrless.pop();
        var arrless = arrless.shift();  */