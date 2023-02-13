// leetcode solution of the question 540
var singleNonDuplicate = function(nums) {
    for(i=0;i<nums.length;i=i+2){
        if(nums[i]!=nums[i+1]){
            return nums[i]
        }
    }
};
console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))