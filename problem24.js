// 9. Palindrome Number
// Given an integer x, return true if x is a palindrome , and false otherwise.


// leetcode solution of question 9


var isPalindrome = function(x) {
    x = x.toString();
    let Len = x.length-1
    for(i=0;i>=0;i++){
        if(x[i]!=x[Len-i]){
            return false;
        }
        if(i==Len-i||i>(Len-i)){
            return true;
        }
    }
};

console.log(isPalindrome(121));
