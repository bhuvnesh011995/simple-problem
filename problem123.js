/*1802. Maximum Value at a Given Index in a Bounded Array

You are given three positive integers: n, index, and maxSum. You want
 to construct an array nums (0-indexed) that satisfies the following 
 conditions:

    nums.length == n
    nums[i] is a positive integer where 0 <= i < n.
    abs(nums[i] - nums[i+1]) <= 1 where 0 <= i < n-1.
    The sum of all the elements of nums does not exceed maxSum.
    nums[index] is maximized.

Return nums[index] of the constructed array.

Note that abs(x) equals x if x >= 0, and -x otherwise.*/


// leetcode solution of the question 1802

var maxValue = function(n, index, maxSum) {
  let l = index,r = n-(index+1);
  let max = 1;
  let sum = n ;
  let count = 0;
  let increment = 1;
  let preInce;
  while(sum<=maxSum){
    max++;
    sum += increment;
    if(sum>maxSum) return --max
    if(++count<=l) increment++
    if(count<=r) increment++
    if(preInce==increment) return max+Math.floor((maxSum-sum)/increment)
    else preInce = increment;
  }

};


console.log(maxValue(2,0,585718607))