// 1768. Merge Strings Alternately

// You are given two strings word1 and word2. Merge the strings by adding letters
//  in alternating order, starting with word1. If a string is longer than the other,
//   append the additional letters onto the end of the merged string.

// Return the merged string.


// leetcode solution of the question 1768

// runtime beat 45%

// var mergeAlternately = function(word1, word2) {
//     word1 = word1.split("")
//     word2 = word2.split("")
//     let ans = "";
//     let i = 0;
//     while(word1.length || word2.length){
//         if(word1[i]) ans = ans+word1[i];
//         if(word2[i]) ans = ans + word2[i];
//         word1.shift();
//         word2.shift();
//     }

// return ans
// };

// var mergeAlternately = function(word1, word2) {
//     let ans = "";
//     let i = 0;
//     while(i<Math.max(word1.length,word2.length)){
//         if(word1[i]) ans = ans+word1[i];
//         if(word2[i]) ans = ans + word2[i];
//         i++
//     }

// return ans
// };


var mergeAlternately = function(word1, word2) {
    word1 = word1.split("")
    word2 = word2.split("")
    let ans = "";
    let i = 0;
    while(i<Math.max(word1.length,word2.length)){
        if(word1[i]) ans = ans+word1[i];
        if(word2[i]) ans = ans + word2[i];
        i++
    }

return ans
};

console.log(mergeAlternately("abc","pqrs"))