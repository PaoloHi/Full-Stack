var s = "()"
var arr = Array.from(s)
if (arr[0] === "(" && arr[1] === ")" ){
    console
}


var isValid = function(s){

    const stack = []

    for (i=0; i < s.length; i++){

        let curChar = s[i];

        switch(curChar) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}')
                break;
            default:
                topElement = stack.pop()
                if (curChar !== topElement) return false;       
        }
    }
    return stack.length === 0;
}


/* intento fallido 
var s = "([)]"
var arr = Array.from(s)

if (arr.length % 2 !== 0 ){
console.log(false);}
else if (arr.length > 2) {
    if (arr[0] === "(" && arr[1] === ")" ){
        console.log(true)
    } else if (arr[0] === "[" && arr[1] === "]" ) {
            console.log(true)
    } else if (arr[0] === "{" && arr[1] === "}"  ) {
            console.log(true)
    } else{console.log(false)}
}         else {while(arr.length > 0 ) {      
    if (arr[0] === "(" ){
            if(arr[1] === ")"){
                    console.log(true)
                    arr.shift();
                    arr.shift();
            }else{console.log(false)
                    arr.shift();
                    arr.shift();}}
    else if (arr[0] === "[" ){
            if(arr[1] === "]"){
                    console.log(true)
                    arr.shift();
                    arr.shift();
            }else{console.log(false)
                    arr.shift();
                    arr.shift();}}
    else if (arr[0] === "{" ){
            if(arr[1] === "}"){
                    console.log(true)
                    arr.shift();
                    arr.shift();}
                            else{console.log(false)
                                    arr.shift();
                                    arr.shift();}
            }else{
                    console.log(false )
                    arr.shift();
                    arr.shift();
            }
}}


if (arr.length == 0) {console.log(true)}     


if (arr[0] === "(" ){
    if(arr[1] === ")"){
            console.log(true)
    }else{console.log(false)}} else if (arr[0] === "[" ){
    if(arr[1] === "]"){
            console.log(true)
    }else{console.log(false)}} else if (arr[0] === "{" ){
    if(arr[1] === "}"){
            console.log(true)}else{console.log(false)}
    }else{
            console.log(false )
            arr.shift();
            arr.shift();}*/