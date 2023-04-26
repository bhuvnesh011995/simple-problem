// 258. Add digits

// Given an integer num, repeatedly add all its digits until the result has only one digit,
//  and return it.


// leetcode solution of the question 258

// var addDigits = function(num) {
//     num = String(num).split("")
//     while(num.length>1){
//        num =  num.reduce((a,b)=>Number(a)+Number(b))
//        num = String(num).split("");
//     }

//     return num[0]
// };


var addDigits = function(num) {
    return 1+(num-1)%9
  };

console.log(addDigits(0))