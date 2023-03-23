// leetcode solution of the question 413
var numberOfArithmeticSlices = function(nums) {
    let len = nums.length-1;
    let count = 2;
    let NoOfSubArr = 0;
    let diff = 0;
    let subEle = 1;
    for(i =1;i<len;i++){
        if(nums[i]-nums[i-1]==nums[i+1]-nums[i]){
            NoOfSubArr = ++count + NoOfSubArr-2;
        }else{
            count = 2;
        }
    }
    return NoOfSubArr;
};
console.log(numberOfArithmeticSlices([1,2,3,4]))