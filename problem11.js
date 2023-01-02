//1929 solution of leetcode 
var getConcatenation = function (nums){
    let arr = nums;
    let i=0
    let j=nums.length;
    for(i;i<j;i++){
        arr[arr.length] = nums[i];
    }
    return arr;
};
console.log(getConcatenation([1,2,3]));