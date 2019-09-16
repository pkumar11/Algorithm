var matt=[[7,8,9],
        [4,5,6],
        [6,2,15]];

var j=matt.length - 1;
var diag1=0;
var diag2=0;

for(let i=0;i<matt.length;i++ ,j--){
    diag1+=matt[i][i];   //finds the sum of the first diagonal
    diag2+= matt[i][j];    //finds the sum of the second diagonal
}
 var diff=Math.abs(diag1-diag2);
 console.log("The difference between first and second diagonal is : "+ diff);