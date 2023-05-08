// 80. Remove Duplicates from Sorted Array II

// Given an integer array nums sorted in non-decreasing order, remove some duplicates 
// in-place such that each unique element appears at most twice. The relative order of
//  the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must 
// instead have the result be placed in the first part of the array nums. More formally, 
// if there are k elements after removing the duplicates, then the first k elements of nums 
// should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input 
// array in-place with O(1) extra memory.



// leetcode solution of question  80 

/*var removeDuplicates = function(nums) {
    for(i=0;i<nums.length;i++){
            if(nums[i]==nums[i+2]){
                let j = i+2
                for(j;j<nums.length;j++){
                    nums[j]=nums[j+1]
                }
                nums.pop();i--
            }

        }
    return nums.length
};*/
/*var removeDuplicates = (nums)=>{
let i=0,j=0;
for(i;i<nums.length;i++){
    if(nums[i]!=nums[j]&&i-j>2){
        nums.splice(j+2,i-j-2);
        j=i;
    }else if(nums[i]!=nums[j]) j=i;
    if(i==nums.length-1&&i-j>2) nums.splice(j+2,i-j-1)
}
return nums
}*/

var removeDuplicates = (nums)=>{
    let l=2,r=2;
    while(r<nums.length){
        if(nums[r]===nums[l-1]&&nums[r]===nums[l-2]) r++
        else nums[l++]=nums[r++]
    }
    while(nums[nums.length-1]===nums[nums.length-3]) nums.pop()
    return nums
}
console.log(removeDuplicates([1,2,2]))