// 976. Largest Perimeter triangle


// Given an integer array nums, return the largest perimeter of a triangle with a non-zero
//  area, formed from three of these lengths. If it is impossible to form any triangle of a 
//  non-zero area, return 0.


//leetcode solution of the question 976


var largestPerimeter = function(nums) {
    nums= nums.sort((a,b)=>a-b);
    let i = nums.length-1
    for(i;i>1;i--){
        if(nums[i]>=nums[i-1]+nums[i-2] || nums[i-1]>=nums[i]+nums[i-2] || nums[i-1]>=nums[i-1]+nums[i]) continue;
        else return nums[i]+nums[i-1]+nums[i-2]
    }
    return 0;
};
console.log(largestPerimeter([1,2,1,10]))