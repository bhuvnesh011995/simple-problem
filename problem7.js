// leetcode problem of Given a string s consisting of words and spaces,
// return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.
var lengthOfLastWord = function(s) {
    let splittedArray = s.split(" ");
    let len = splittedArray.length-1;
    for(len;len>=0;len--){
     if(splittedArray[len].length===0){
     splittedArray.pop();
     }
     else{
        return splittedArray[len].length;
     }
    }
    return splittedArray[len].length;
 };
 console.log(lengthOfLastWord("hello world  "))