function temp(num1,num2){ //passing (4,5) as values
    var temp ;
    temp=num1; // temp=4
    num1=num2; //num1=5
    num2=temp;  //num2=4
    console.log(num1,num2);  // now the variables becomes (5,4)
}

function airthmetic(num1,num2){  //passing (4,5) as values
    num1=num1+num2;  //num1=9
    num2=num1-num2;  //num2=4
    num1=num1-num2;  //num1=5
    console.log(num1,num2);  //   now the variables becomes (5,4)

}

function airth (num1,num2){   //passing (4,5) as values
    num1=num1*num2;    //num1=20
    num2=num1/num2;    // num2=4
    num1=num1/num2;     //num1=5
    console.log(num1,num2)  // //   now the variables becomes (5,4)

}

function xor( num1,num2){   //passing (4,5) as values
    num1=num1^num2;  //num1= 1
    num2=num1^num2;   //num2=4
    num1=num1^num2;   //num1=5
    console.log(num1,num2)   //   now the variables becomes (5,4)

}

function xnor(num1,num2){    //passing (4,5) as values
    num1=~(num1^num2);      // num1=-2
    num2=~(num1^num2);       //num2=4
    num1=~(num1^num2);       //num1=5
    console.log(num1,num2)   //   now the variables becomes (5,4)

}


var num1=4;
var num2=5;
temp(num1,num2);
airthmetic(num1,num2);
airth(num1,num2);
xor(num1,num2);
xnor(num1,num2);

