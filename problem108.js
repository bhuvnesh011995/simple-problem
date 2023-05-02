/*1822. Sign of the Product of an Array

There is a function signFunc(x) that returns:

    1 if x is positive.
    -1 if x is negative.
    0 if x is equal to 0.

You are given an integer array nums. Let product be the product of all 
values in the array nums.

Return signFunc(product). */

// leetcode solution of the question 1822

var arraySign = function(nums) {
    let sign = 1;
    for(i=0;i<nums.length;i++){
        if(nums[i]<0) sign *= -1
        else if(nums[i]===0) return 0
    }
    return sign
};