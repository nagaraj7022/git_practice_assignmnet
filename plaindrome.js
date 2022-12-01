let str = 'naman'
let rev = ''

for(let i=str.length-1; i>=0; i--){
    rev += str[i]
}
if(str===rev){
    console.log("Yes, It is Plaindrome");
}else{
    console.log("No, It is not plaindrome");
}