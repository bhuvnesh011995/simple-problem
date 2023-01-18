// leetcode solution of the question 35 
var searchInsert = function(nums, target) {
    if(nums.length===0){
        return 0;
    }
    if(nums.indexOf(target)!=-1){
        return nums.indexOf(target);
    }
//     let i = Math.trunc(nums.length/2)
//     for(i;i<nums.length;i){
//         if(nums[i]>target&&nums[i-1]<target){
//             return i;
//         }
//         if(){
            
//         }
//         if(nums[i]<target){
//             i= Math.trunc(i+((nums.length-i)/2));
//         }
//     }
for(i of nums){
    if(i>target){
        return nums.indexOf(i)
    }
}
return nums.length;
};
console.log(searchInsert([3,5,7,9,10],8));