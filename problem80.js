// Given an array of integers nums which is sorted in ascending order, 
// and an integer target, write a function to search target in nums.
//  If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.


// leetcode solution of the question 704

var search = function(nums, target) {
    let l = 0,r = nums.length-1;
    while(r=>l){
        let mid = l+Math.floor((r-l)/2);
        if(nums[mid]==target) return mid;
        if(nums[mid]<target){
            l = mid+1;
        }else r = mid-1;
    }
    return -1;
};

console.log(search([5],5))