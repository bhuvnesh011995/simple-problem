// leetcode solution of the question 88
var merge = function(nums1, m, nums2, n) {
    nums1.length = m;
    nums2.length = n;
       for(i=0;i<n;i++){
        nums1.push(nums2[i])
       }
       nums1 = nums1.sort(function(a,b){return a-b;})
    
   console.log(nums1)
};
merge([1,2,3,0,0,0],3,[2,5,6],3)