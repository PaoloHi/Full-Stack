/*
Para progrmar todas las veces que podriamos combinar un arreglo 
*/

let str = ["a","b","c","d","e"];

let combinar = (s) => {
    let combinatorias = []
    for (let i = 0; i < s.length; i++) {
        for(let j = i+1; j < s.length+1; j++) {
            combinatorias.push(str.slice(i,j+1))
        }
    } 
    console.log(combinatorias)
}


combinar(str)