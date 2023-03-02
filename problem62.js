//leetcode solution of the question 912
var sortArray = function(nums) {
    for(i=1;i<nums.length;i++){
            for(j=i;j!=0;j--){
                if(nums[j]<nums[j-1])
               { let a = nums[j-1];
                nums[j-1]=nums[j];
                nums[j]= a;}
                else break;
            }
    }
    return nums;
};
console.log(sortArray([5,2,3,1]))