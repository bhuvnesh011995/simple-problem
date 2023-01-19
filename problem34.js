// leetcode soultion of the question 4
var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = nums1.concat(nums2).sort(function(a, b) {
        return a - b;
      });
    if(nums1.length%2!=0){
        return nums1[(nums1.length-1)/2];
    }
    else{
        let a = nums1.length/2;
        return (nums1[a]+nums1[a-1])/2
    }
};
console.log(findMedianSortedArrays([3],[-2,-1]));