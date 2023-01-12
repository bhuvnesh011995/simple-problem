// leetcode solution of the question 14
var longestCommonPrefix = function(strs) {
    let com = "";
    for(i=1;i<=strs[0].length;i++){
        for(j=1;j<strs.length;j++){
            if(strs[0].slice(0,i)!=strs[j].slice(0,i)){
                return com;
            }
        }
        com = strs[0].slice(0,i);
    }
    return com;
};
console.log(longestCommonPrefix(["a"]))