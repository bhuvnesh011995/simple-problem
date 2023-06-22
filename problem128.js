/*2448. Minimum Cost to Make Array Equal

You are given two 0-indexed arrays nums and cost 
consisting each of n positive integers.

You can do the following operation any number of
 times:

    Increase or decrease any element of the array 
    nums by 1.

The cost of doing one operation on the ith element 
is cost[i].

Return the minimum total cost such that all the 
elements of the array nums become equal.*/

// leetcode solution of the question 2448
// time limit exceeds
var minCost = function(nums, cost) {
    let make;;
    let costs = 0
    let mincost = Number.POSITIVE_INFINITY

    for(i=0;i<nums.length;i++){
        make = nums[i]
        for(j=0;j<nums.length;j++){
            costs += (Math.abs(nums[j]-make))*cost[j];
            
        }
        if(costs<mincost) {
            mincost=costs
        };
        costs = 0;
    }

    return mincost
};

console.log(minCost([1,3,5,2],[2,3,1,14]))