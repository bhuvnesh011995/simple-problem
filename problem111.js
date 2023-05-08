/*1572. Matrix Diagonal sum


Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the 
elements on the secondary 
diagonal that are not part of the primary diagonal.*/

// leetcode solution of question 1572

// var diagonalSum = function(mat,sum=0) {
//     let n = mat.length-1;
//     for(i=0;i<=n;i++){
//         sum += mat[i][i]+mat[i][n-i]
//     }
//     if(n%2==0) sum -= mat[n/2][n/2];
//     return sum

// };
let diagonalSum = (mat,sum=0)=>{
    return mat.reduce((acc,curr,index)=>acc+curr[index]+(curr[mat.length-1-index])*(index!=mat.length-1-index),0)
}
console.log(diagonalSum([[1,2,3],
    [4,5,6],
    [7,8,9]]))