// leetcode soultion of the question 4
var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = nums1.concat(nums2).sort(function(a, b) {
        return a - b;
      });
    //   nums1 = sortList(nums1);
    if(nums1.length%2!=0){
        return nums1[(nums1.length-1)/2];
    }
    else{
        let a = nums1.length/2;
        return (nums1[a]+nums1[a-1])/2
    }
};
// var sortList = function(head) {
//     let a;
//     let b = head.length;
//     for(i=0;i<b;i++){
//         let k= i;
//         for(j=i-1;j>=0;j--){
//             if(head[j]>head[k]){
//                 a = head[j];
//                 head[j]= head[k];
//                 head[k]= a;
//                 k--
//             }
//         }
//     }
//     return head;
//   };
console.log(findMedianSortedArrays([3],[-2,-1]));