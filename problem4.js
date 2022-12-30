//leetcode solution of the question 26 - remove the duplicate element form a given array
var removeDuplicates = function(nums) {
    for(i=0;i<nums.length;i++){
        if(nums[i]===nums[i+1]){
            nums.splice(i,1);
            i--
        }
        
    }
    return nums.length;
};