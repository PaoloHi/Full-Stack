/*
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest 
substring
 without repeating characters.
*/

s = "abcabcbb"

function split(s){
    arr = Array.from(s);
    for(var i=0; i<arr.length; i++) {
        for(j=1; j<arr.length;j++){
            if(arr[j] == arr[i]){
                arr1 = arr.splice(0,j)
                arr2 = arr.splice(j+1,i)
                console.log(arr1,arr2)
                break;
            }
        }
    }
}

function longest(arr1,arr2){

}