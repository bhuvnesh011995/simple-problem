/*1785. Minimum Elements to Add to Form a Given Sum
Medium
221
173
Companies

You are given an integer array nums and two integers limit and goal. 
The array nums has an interesting property that abs(nums[i]) <= limit.

Return the minimum number of elements you need to add to make the sum 
of the array equal to goal. The array must maintain its property that
 abs(nums[i]) <= limit.

Note that abs(x) equals x if x >= 0, and -x otherwise.*/

// leetcode solution of the question 1785

/*var minElements = function(nums, limit, goal) {
    let diff = goal - nums.reduce((a,b)=>a+b)
    if(Math.abs(diff)<=limit) return 1;
    else {
        return Math.ceil(Math.abs(diff)/limit)
    }
};*/

var minElements = function(nums, limit, goal) {
    let diff = goal - nums.reduce((a,b)=>a+b)
        return Math.ceil(Math.abs(diff)/limit)
};