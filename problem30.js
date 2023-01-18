// leetcode solution of the question 34
var searchRange = function(nums, target) {
    let arr = [];
    let i = nums.indexOf(target);
    arr.push(i);
    if(i===-1){
        arr.push(i);
        return arr;
    }
    for(i;i<nums.length;i++){
        if(nums[i+1]!=target){
            arr.push(i)
            break;
        }
    }
    return arr;
};
console.log(searchRange([1,2,3,4,4,4,5,6,7,8],4))