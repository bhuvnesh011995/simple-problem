// leetcode solution of the question 1314
var matrixBlockSum = function(mat, k) {
    let m = mat.length-1,n = mat[0].length-1;
    let ans = [...Array(mat.length)].map(e=>Array(mat[0].length))
    for(i=0;i<=m;i++){
        let temp = i-k;;
            r = [];
            c =[];
            let q = i+k;
            if(q>m){
                q = m;
            }
            for(temp;temp<=q;temp++){
                if(temp<0){
                    r.push(0);
                    temp=0;
                }else r.push(temp)
            }
        for(j=0;j<=n;j++){
            c.length=0;
            temp = j-k;
            let p=j+k;
            if(p>n){
                p=n;
            }
            for(temp;temp<=p;temp++){
                if(temp<0){
                    c.push(0);
                    temp =0;
                }else c.push(temp);
            }
            let sum =0;
        for(l=0;l<r.length;l++){
            for(o=0;o<c.length;o++){
                sum = sum + mat[r[l]][c[o]]
            }
        }
        ans[i][j] = sum;
        }
        
    }
    return ans;
};
console.log(matrixBlockSum([[1,2,3],[4,5,6],[7,8,9]],1))