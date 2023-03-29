// leetcode solution of the question 413
var numberOfArithmeticSlices = function(nums) {
    let len = nums.length-1;
    let count = 0
    let NoOfSubArr = 0;
    for(i =1;i<len;i++){
        if(nums[i]-nums[i-1]==nums[i+1]-nums[i]){
            NoOfSubArr = ++count + NoOfSubArr
        }else{
            count = 0;
        }
    }
    return NoOfSubArr;
};
console.log(numberOfArithmeticSlices([1,2,3,4]))