var matrix=[[[11,2,3],[4,5,6],[7,8,9]]];
var diag1=0,diag2=0;

for(let i=0;i<1;i++){
    for(let j=0;j<3;j++){
        for(let k=0;k<3;k++){
            if(k==j){
                diag1+=matrix[i][j][k];
            }
        }
       
    }
    for(let k=2,j=0;k>=0;k--,j++){
        diag2+=matrix[i][j][k];
    
    }
}
var diff;
diff=Math.abs(diag1-diag2);
console.log(diff)