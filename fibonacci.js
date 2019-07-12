/*var num=10;  //given number - 2
var a=0,b=1,c=a+b;
if(num>1){
console.log(a);}
else if (num==2){
    console.log(a);
console.log(b);
}
for(let i =1;i<=num;i++){
    console.log(c);
    a=b;
    b=c;
    c=a+b;
}

function fibon(n,a,b){
    if(n==0){
        return;
    }
    else{
        n--;
       var c=a+b;
       console.log(c);
        return fibon(n,b,c);
    }
}
console.log(0);
console.log(1);
fibon(8,0,1);
*/



var a=[0,1];
var sum=a[0]+a[1];

var num =10;
if(num<=0){
    console.log(a[0]);
}
else if(num==2){
    console.log(a);
}
/*else{
    for(i=2;i<num;i++){
        a.push(sum);
        sum=a[i-1]+a[i];
    }
    console.log(a);
}
*/
else{
console.log(fiboni(num));
//faboni(num,a[0],a[1]);
}

function fiboni(num){
if(num<=1){
    return num;
}
else{
    return fiboni(num-1)+fiboni(num-2);
}
}


/*function faboni(n,a,b){
    if(n<3){
        return;
    }
    else{
        n--;
       var c=a+b;
       console.log(c);
        return faboni(n,b,c);
    }
}
*/

