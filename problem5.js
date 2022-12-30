//leetcode solution of the qestion 27- remove the particular element form the given array
var removeElement = function(nums, val) {
    for(i=0;i<nums.length;i++)
    if(nums[i]===val){
        nums.splice(i,1);
        i--
    }
    return nums.length;
};