/*1318. Minimum Flips to Make a OR b Equal to c

Given 3 positives numbers a, b and c. Return the minimum flips
 required in some bits of a and b to make ( a OR b == c ). 
 (bitwise OR operation).
Flip operation consists of change any single bit 1 to 0 or change 
the bit 0 to 1 in their binary representation.*/

// leetcode solution of the question 1318

var minFlips = function(a, b, c) {
    let flip = 0;
    while(a!=0||b!=0||c!=0){
        let bitA = a&1
        let bitB = b&1
        let bitC = c&1
        if(bitC==1){
            if(bitA==0&&bitB==0) flip++
        }else{
            if(bitA==1) flip++
            if(bitB==1) flip++
        }
        a>>=1
        b>>=1
        c>>=1
    }
    return flip
};

console.log(minFlips(8,3,5))