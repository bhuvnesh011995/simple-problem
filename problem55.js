/*228. Summary Rangeses

You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly.
 That is, each element of nums is covered by exactly one of the ranges, and there is no
  integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

    "a->b" if a != b
    "a" if a == b*/


// leetcode solution of the question 228

//bad time complexity run time 66ms
// var summaryRanges = function (nums) {
//   let ans = [];
//   let i, j, k;
//   j = nums[0];
//   k = nums[0];
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] + 1 == nums[i + 1]) {
//       k = nums[i + 1];
//       continue;
//     }
//     if (nums[i + 1] == undefined) {
//       if (j == k) {
//         ans.push(`${j}`);
//       } else {
//         ans.push(`${j}->${k}`);
//       }
//       return ans;
//     } else {
//       if (j == k) {
//         ans.push(`${j}`);
//         j = nums[i + 1];
//         k = nums[i + 1];
//       } else {
//         ans.push(`${j}->${k}`);
//         j = nums[i + 1];
//         k = nums[i + 1];
//       }
//     }
//   }
// };

function summaryRanges(arr){
  let ans = [];
  let i= 0,j;
  function findElement(arr,i){
    let l = i;
    let r = arr.length-1;
    let mid;
    while(l<=r){
      mid = l+Math.floor((r-l)/2);
      if((arr[mid+1]-arr[mid])!=1&&(arr[mid]-arr[i])==(mid-i)) return mid;
      if((arr[mid]-arr[i])===(mid-i)) l = mid+1;
      else if(arr[mid]-arr[i]!=(mid-i)) r = mid-1;
    }
    return i;
  }

  while(i<arr.length){
    j = findElement(arr,i);
    if(j==i) ans.push(`${arr[i]}`)
    else ans.push(`${arr[i]}->${arr[j]}`)
    i = j+1;
  }
  return ans;
}
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
