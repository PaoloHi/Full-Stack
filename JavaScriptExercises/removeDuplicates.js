/*este por alguna razon no me lo quizo aceptar pero corre bastante bien , no te deanimes padre siempre adelante */


var deleteDuplicates = function(head) {
    var remove = [];
    for(i=1; i<head.length ; i++) {
        if(remove.includes(head[i]) == false) {
            remove.push(head[i])
        }
    }
    return remove
};

console.log(deleteDuplicates([1,1,2,3,3,4,4,4,4,5,5,5]))
