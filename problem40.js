// leetcode solution of the question 41
  var firstMissingPositive = function(nums) {
    let j=1;
    nums = nums.sort(function(a, b) {
        return a - b;
      });
    for(i=0;i<nums.length;i++){
        if(j>=nums[i]){
            if(j===nums[i]){
                 j++;
            }
            else if(j>nums[i]){
                continue;
            }
           
        }else{
            return j;
        }
    }
    return j;
  };
  console.log(firstMissingPositive([3,4,-1,1]))