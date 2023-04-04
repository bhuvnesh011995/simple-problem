// 2405. Optimal Partition of String
// Given a string s, partition the string into one or more substrings such that the characters 
// in each substring are unique. That is, no letter appears in a single substring more than once.

// Return the minimum number of substrings in such a partition.

// Note that each character should belong to exactly one substring in a partition.


//leetocde solution of the question 2405

var partitionString = function(s) {
    let noOfSubPart = 1;
    let temp = "";
    for(i=0;i<s.length;i++){
        if(!temp.includes(s[i])){
            temp = temp + s[i]
        }else{
            temp = s[i], noOfSubPart++
        }
    }
    return noOfSubPart;
};
console.log(partitionString("abacaba"))