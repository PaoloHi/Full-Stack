
let str = "abc"
var rra = [];
var vol = []


let combinar = (s) => {
    let combinatorias = []
    for (let i = 0; i < s.length; i++) {
        for(let j = i+1; j < s.length+1; j++) {
            combinatorias.push(s.slice(i,j))
        }
    } 
    var palabras = []
    for(i=0;i<combinatorias.length;i++){
        palabra = Array.from(combinatorias[i])
        palabras.push(palabra)
    }
    palabras.shift();
    palabras.pop();
    /* no le muevas de aca para arriba*/
        console.log(palabras)

    for(j=0;j<palabras.length;j++){
        letra = palabras[j]
        var rra = [];
        for (i=0; i < letra.length;i++){
            rra.unshift(letra[i]);
        } vol.push(rra)
    }

    options = []
    for(i=0;i<vol.length;i++){
        options.push(vol[i].join(""))
    }
    console.log(options)
    
    palabrasJoin = []
    for(i=0;i<palabras.length;i++){
        palabrasJoin.push(palabras[i].join(""))
    }
    console.log(palabrasJoin)

    let longest = []
    for (let i = 0; i < palabrasJoin.length; i++) {
        if (palabrasJoin[i] == options[i]) {
            longest.push(palabrasJoin[i])            
        }        
    }
   /* letras = palabra.map(x => x.join(","));
    console.log(letras)

    console.log(vol)
    return combinatorias;*/
    
}
combinar(str)


