/*2090. K Radius Subarray Averages

You are given a 0-indexed array nums of n integers, and an integer
 k.

The k-radius average for a subarray of nums centered at some 
index i with the radius k is the average of all elements in nums
 between the indices i - k and i + k (inclusive). If there are 
 less than k elements before or after the index i, then the 
 k-radius average is -1.

Build and return an array avgs of length n where avgs[i] 
is the k-radius average for the subarray centered at index i.

The average of x elements is the sum of the x elements divided 
by x, using integer division. The integer division truncates 
toward zero, which means losing its fractional part.

    For example, the average of four elements 2, 3, 1, and 5 is
     (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75, which truncates to 2.*/

// leetcode solution of the question 2090


var getAverages = function(nums, k) {
    
    
    let total = 2*k+1
    let fill = nums.length-k;
    if(nums.length<total) return new Array(nums.length).fill(-1)
    let l = 0;r= 2*k;
    let sum = 0;
    let ans = new Array(nums.length).fill(-1)
    
    for(let i=l;i<total;i++){
        sum += nums[i];
    }
    let i = k;
    while(i<fill){
        ans[i++] = Math.floor(sum/total)
        sum -= nums[l++];
        sum += nums[++r];
    }
    return ans;
};

console.log(getAverages([7,4,3,9,1,8,5,2,6],3))