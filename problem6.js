// leetcode problem solution of return a array of index whose some is given argument target
var twoSum = function(nums, target) {
    let newArary = []
    for(i=0; i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                newArary.push(i,j)
            return newArary;
            }
            
        }
    }
};