// leetcode solution of the question 1837
var sumBase = function(n, k) {
    // let sum = 0;
    // let temp
    // if(k>0){
    // while(n!=0){
    //     temp = n%k;
    //     while(temp>9){
    //         sum = temp%10;
    //         temp = Math.floor(temp/10)
    //     }
    //     sum = sum + temp;
    //     n = Math.floor(n/k)
    // }}else {
    //     while(n!=1){
    //         temp = n%k;
    //         while(temp>9){
    //             sum = temp%10;
    //             temp = Math.floor(temp/10)
    //         }
    //         sum = sum + temp;
    //         n = Math.ceil(n/k)
    //     }
    // }
    // return sum;
    n = n.toString(k)
    let sum =0;
    while(n>0){
        sum = sum + n%10;
        n = Math.floor(n/10);
    }
    return sum;
};
console.log(sumBase(34,6))