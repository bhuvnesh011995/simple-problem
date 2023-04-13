//leetcode solution of the question 26 - remove the duplicate element form a given array



// var removeDuplicates = function(nums) {
//     for(i=0;i<nums.length;i++){
//         if(nums[i]===nums[i+1]){
//             nums.splice(i,1);
//             i--
//         }
        
//     }
//     return nums.length;
// };


// var removeDuplicates = function(nums){
//     let ans = [];
//     for(i=0;i<nums.length;i++){
//         if(nums[i]==ans[ans.length-1]) continue
//         else ans.push(nums[i])
//     }
//     nums.length = 0;
//     nums.push(...ans)
//     return ans.length;
// }



var removeDuplicates = function(nums){
    let len = nums.length
    let count = 1;
    for(i=1;i<nums.length;i++){
        if(nums[i]==nums[i-count]){
            nums[i]=undefined;
            len--,count++;
        }else count=1;
    }
    nums = nums.sort((a,b)=>a-b)
    console.log(nums)
    return len
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))