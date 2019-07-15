var num=5;
var fact=1;
if(num<0){
    console.log("Factorial is not possible");
}
else if(num==0){
    console.log(fact)
}
else{
for(let i=1;i<=num;i++){
    fact=fact*i;
}
console.log(factorial(num))
console.log(fact);
}

function factorial(num){
    if(num==1){
        return 1;
    }
    else {
        return num*factorial(num-1);
    }
}
