// leetcode solution of the question  2554


//ans 1
// var maxCount = function(banned, n, maxSum) {
//     let ans =0;
//     let sum=0;
//     for(i=1;i<=n;i++){
//         if(banned.includes(i)){
//             continue;
//         }else{
//             sum =sum+i;
//             if(maxSum<sum){
//                 break;
//             }
//             ans++
//         }
//     }
//     return ans;
// };

//ans 2
// var maxCount = function(banned, n, maxSum) {
//     let ans =[];
//     for(i=1;i<=n;i++){
//         if(banned.includes(i)){
//             continue;
//         }else{
//             ans.push(i)
//             if(maxSum<ans.reduce((e,p)=>e+p)){
//                 ans.pop();
//                 break;
//             }
//         }
//     }
//     return ans.length
// };


// ans 3
var maxCount = function(banned, n, maxSum) {
    let ans =[];
    let i = 1;
    function isban(i){
        if(i<=n){if(banned.includes(i)){
            return isban(++i)
        }else{
            ans.push(i)
            if(maxSum<ans.reduce((e,p)=>e+p)){
                ans.pop();
            }else return isban(++i)
        }
           
        }else return
    }
    isban(i)
    return ans.length
};


console.log(maxCount([1,6,5],5,6))