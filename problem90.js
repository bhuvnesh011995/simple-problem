// 946. Validate Stack Sequences
// Given two integer arrays pushed and popped each with distinct values, 
// return true if this could have been the result of a sequence of push and pop
//  operations on an initially empty stack, or false otherwise.



//leetcode solution of the question 946


var validateStackSequences = function(pushed, popped) {
    let j= 0;
    let stek = [];
    for(i=0;i<pushed.length;i++){
        stek.push(pushed[i])
        while(stek[stek.length-1]==popped[j] && stek[0]!=undefined){
            stek.pop();
            j++
        }
    }
    if(j==popped.length) return true
    else return false;
};

console.log(validateStackSequences([1,2,3,4,5],[4,5,3,2,1]))