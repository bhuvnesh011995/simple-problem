/*2215. Find the Difference of Two Arrayses

Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

    answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
    answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

Note that the integers in the lists may be returned in any order.*/


// leetcode solution of the question 2215

var findDifference = function(nums1, nums2) {
    let present = new Map();
    let ans = [[],[]]
    for(i of nums1){
        present.set(i,true)
    }
    for(i of nums2){
        if(!present.has(i)) {
            if(ans[1].includes(i)) continue;
            ans[1].push(i)
        }
        else present.set(i,false)
    }
    present.forEach((value,key)=>{
        if(value) ans[0].push(key)
    })
    return ans
};
console.log(findDifference([-80,-15,-81,-28,-61,63,14,-45,-35,-10],[-1,-40,-44,41,10,-43,69,10,2]))