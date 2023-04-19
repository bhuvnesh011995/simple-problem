// 868. Binary Gap

// Given a positive integer n, find and return the longest distance between any two adjacent
//  1's in the binary representation of n. If there are no two adjacent 1's, return 0.

// Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance 
// between two 1's is the absolute difference between their bit positions. For example, the two
//  1's in "1001" have a distance of 3.


// leetcode solution of the question 868

var binaryGap = function(n) {
    let biNumber = [];
    let dis = 0;
    while(n){
        n%2==1 ? biNumber.push(1) : biNumber.push(0)
        n = Math.floor(n/2);
    }
    let i = biNumber.indexOf(1);
    if(i==(biNumber.length-1)) return 0;
    let pre = i;
        for(++i;i<biNumber.length;i++){
        if(biNumber[i]){
            if((i-pre)>dis){
            dis = i-pre;
            pre = i;
            }else pre = i;
        }
    }
    return dis;
};
console.log(binaryGap(22))