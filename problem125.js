/*2352. Equal Row and Column Pairs
Given a 0-indexed n x n integer matrix grid, return the number of 
pairs (ri, cj) such that row ri and column cj are equal.

A row and column pair is considered equal if they contain the same
 elements in the same order (i.e., an equal array).*/

 //leetcode solution of the question 2352

//runtime 161ms 
//  var equalPairs = function(grid) {
//     let len = grid.length;
//     let count = 0;
    
//     for(i=0;i<len;i++){
//         for(j=0;j<len;j++){
//             for(k=0;k<len;k++){
//                 if(grid[i][k]!=grid[k][j]) break;
//                 if(k==(len-1)) count++
//             }
//         }
//     }
//     return count
//  };

//someone elses good apporach but my code


function equalPairs(grid){
    let n = grid.length;
    let rowHash = new Map();
    let colHash = new Map();
    let row,col,rowI,colI
    for(i=0;i<n;i++){
        let temprow = [];
        let tempcol = [];
        for(j=0;j<n;j++){
            temprow.push(grid[i][j]);
            tempcol.push(grid[j][i]);
        }
        rowI = temprow.join(",");
        colI = tempcol.join(',')
        rowHash.set(rowI,(rowHash.get(rowI)||0)+1);
        colHash.set(colI,(colHash.get(colI)||0)+1)
    }
    rowI = 0;

    for(let [rowKey,rowVal] of rowHash.entries()){
        if(colHash.has(rowKey)){
            rowI += rowVal*colHash.get(rowKey)
        }
    }
return rowI

}

 console.log(equalPairs([[3,2,1]
    ,[1,7,6]
    ,[2,7,7]]))

