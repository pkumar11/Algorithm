var matt1=[[1,2,1],
        [1,1,5],
        [1,8,1]];

var matt2=[[2,6,2],
            [7,2,2],
            [3,3,3]];

var mult=[[],
         [],
        []];

for(let i=0;i<(matt1.length);i++){
    for(let j=0 ;j<matt2.length;j++){
        mult[i][j]=0;
        for(let k=0;k<matt1.length;k++){
                mult[i][j]+=+matt1[i][k]*matt2[k][j];
    }
}
}
console.log(mult);