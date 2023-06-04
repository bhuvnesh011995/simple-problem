/*59. Spiral Matrix II
Medium
5.1K
218
Companies

Given a positive integer n, generate an n x n matrix filled with elements from 1 to
 n2 in spiral order.*/

 // leetcode solution of the question 59

 let generateMatrix = function (n){
    let ans = Array.from(Array(n),()=>new Array(n))
    let count = 0;
    let l = 0,u=0,r=n-1,d = n-1
    while(count<n*n){
        for(i=u;i<=r;i++){
            ans[u][i] = ++count;
        }
        for(i=u+1;i<=d;i++){
            ans[i][r] = ++count;
        }
        for(i=r-1;i>=l;i--){
            ans[d][i] = ++count
        }
        for(i=d-1;i>u;i--){
            ans[i][l]= ++count
        }
        u++,l++,r--,d--
    }
    return ans
 }

 // other person solution but got impressed with algo
 /*var generateMatrix = function(n) {
    // k: keep track of current number
    let k = n*n; const ans = [[k--]];

    while(k) {
        // Reverse each row and add k to the last then k = k - 1
        for(const row of ans) row.reverse().push(k--);
        // Create a new row containing numbers in dec order then reverse it
        ans.push(Array(ans[0].length).fill().map(() => k--).reverse());
        // Reverse column
        ans.reverse();
    }

    return ans;
};*/

 console.log(generateMatrix(5))