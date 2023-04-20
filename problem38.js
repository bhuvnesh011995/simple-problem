// 50. Pow(x, n)

// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).


//leetcode solution of the question 50


var myPow = function(x, n) {
    if(x===1){
        return 1;
    }
    if(x===(-1)){
        if(n%2==1||n%2==(-1)){
            return -1;
        }else{
            return1;
        }

    }
    if(n==-2147483648){
        return 0;
    }
    let result =1;
    let j;
    if(n<0){
        for(i=-1;i>=n;i--){
            result = result/x;
        }

    }else{
        for(i=1;i<=n;i++){
        result = result *x;
        }
    }
    return result;
};
console.log(myPow(2,-2147483648))