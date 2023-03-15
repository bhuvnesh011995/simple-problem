// leetcode solution of the question 1017
var baseNeg2 = function(n) {
    let ans ='';
    while(n!=1){
        ans = Math.abs(n%-2).toString()+ans;
           n = Math.ceil(n/-2)
        
    }
    ans = "1"+ans;
    return ans;
};
console.log(baseNeg2(15))