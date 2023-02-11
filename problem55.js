// leetcode solution of the question 228
var summaryRanges = function (nums) {
  let ans = [];
  let i, j, k;
  j = nums[0];
  k = nums[0];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] + 1 == nums[i + 1]) {
      k = nums[i + 1];
      continue;
    }
    if (nums[i + 1] == undefined) {
      if (j == k) {
        ans.push(`${j}`);
      } else {
        ans.push(`${j}->${k}`);
      }
      return ans;
    } else {
      if (j == k) {
        ans.push(`${j}`);
        j = nums[i + 1];
        k = nums[i + 1];
      } else {
        ans.push(`${j}->${k}`);
        j = nums[i + 1];
        k = nums[i + 1];
      }
    }
  }
};
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
