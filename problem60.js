// leetcode solution of the question 162
var findPeakElement = function(nums) {
    if(nums.length==0){
        return 0;
    }
    let j =0;
  for(i=0;i<nums.length;i++){
    if(nums[i]>nums[j]){
        j=i;
    }
  }  
  return j;
};
console.log(findPeakElement([1,2,3,1]))