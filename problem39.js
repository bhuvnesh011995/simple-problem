//leetcode solution of the question 74
var searchMatrix = function(matrix, target) {
    let len;
    for(i=0;i<matrix.length;i++){
        len = matrix[i].length-1;
        if(matrix[i][len]>=target){
            for(j=0;j<matrix[i].length;j++){
                if(matrix[i][j]===target){
                    return true;
                }
            }
         return false;  
        }
    }
    return false;
};
console.log(searchMatrix([[1]],0));