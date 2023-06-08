/*1351. Count Negative Numbers in a Sorted Matrix

Given a m x n matrix grid which is sorted in non-increasing order both
 row-wise and column-wise, return the number of negative numbers in 
 grid.*/

 // leetcode soultion of the question 1351

 // time complexity O(n2)
// var countNegatives = function(grid) {
//       let ans = 0;
//     for(i=0;i<grid.length;i++){
//       for(j=grid[0].length-1;j>=0;j--){
//         if(grid[i][j]<0) ans++
//         else break
//       }
//     }
//     return ans;
//   };
  

// using Binary search 
// var countNegatives = function (grid){
//     let ans = 0;
//      function findNagetive(arr){
//         if(arr[0]<0) return arr.length
//         let l = 0;
//         let r = arr.length-1;
//          while(l<=r){
//            let mid = l+Math.floor((r-l)/2)
//             if(arr[mid-1]>=0 && arr[mid]<0) return arr.length-mid
//             else if(arr[mid]>=0&&arr[mid+1]<0) return arr.length -mid -1
//             else if(arr[mid]>=0) l = mid+1
//             else if(arr[mid]<0) r = mid-1
//          }
//          return 0
//     }
//     for(i=0;i<grid.length;i++){
//         ans += findNagetive(grid[i])
//     }
//  return ans
// }
 var countNegatives = function (grid){
    function findNagetive(arr){
        if(arr[0]<0) return arr.length
        let l = 0;
        let r = arr.length-1;
         while(l<=r){
           let mid = l+Math.floor((r-l)/2)
            if(arr[mid-1]>=0 && arr[mid]<0) return arr.length-mid
            else if(arr[mid]>=0&&arr[mid+1]<0) return arr.length -mid -1
            else if(arr[mid]>=0) l = mid+1
            else if(arr[mid]<0) r = mid-1
         }
         return 0
    }
    for(i=0;i<grid.length;i++){
        grid = grid.flat();
    }
    grid = grid.sort((a,b)=> b-a)
    return findNagetive(grid)
 }

  console.log(countNegatives([[3,-2],[1,0]]))