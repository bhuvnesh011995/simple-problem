/*54. Spiral Matrix
Medium
11.6K
1.1K
Companies

Given an m x n matrix, return all
 elements of the matrix in spiral order.*/


 // leetcode solution of the question 54


 let spiralOrder=(matrix)=>{
    let ans = [];
    let l=0,u=0,d=matrix.length-1,r=matrix[0].length-1;
    while(ans.length<matrix.length*matrix[0].length){
        for(i=l;i<=r;i++) ans.push(matrix[u][i])
        for(i=u+1;i<=d;i++) ans.push(matrix[i][r])
        if(d!=u) for(i=r-1;i>=l;i--) ans.push(matrix[d][i])
        if(l!=r) for(i=d-1;i>u;i--) ans.push(matrix[i][l])
        l++,u++,r--,d--
    }
    return ans;
 }

 console.log(spiralOrder([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]]))