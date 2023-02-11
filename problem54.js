// leetcode solution of the question 287
var findDuplicate = function(nums) {
    nums = nums.sort((a,b)=>a-b);
    for(i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]){
            return nums[i]
        }
    }
};