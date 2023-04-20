// leetcode solution of the question 344
var reverseString = function(s) {
    let a = null;
    for(i=0;i<s.length/2;i++){
        a = s[i];
        s[i] = s[s.length-(i+1)];
        s[s.length-(i+1)]= a;
    }
    return s;
};
console.log(reverseString(["h","e","l","l","o"]))