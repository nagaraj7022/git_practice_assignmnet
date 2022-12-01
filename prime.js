let num = 13


prime = "Yes"
if(num===2){
    console.log(prime)
}else{
    for(let i=2; i<num; i++){
        if(num%i === 0){
            prime = "No"
            break
        }
    }
    console.log(prime)
}