//leetcode solution of question 81
var search = function(nums, target) {
    let a = nums.sort();
    for(i=0;i<a.length;i++){
        if(a[i]==target){
            return true;
        }
    }
    return false;
};