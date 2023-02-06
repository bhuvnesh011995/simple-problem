/// leetcode solution of the question 1470 
var shuffle = function(nums, n) {
    let index =1;
    let N = nums.slice(n,nums.length);
    let index2 =0
    while(n){
        nums.splice(index,0,N[index2]);
        index = index+2;
        index2++
        if(index2==n){
            nums.length = 2*n;
            return nums;
        }

    }
};
console.log(shuffle([2,5,1,3,4,7],3))