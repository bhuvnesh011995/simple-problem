// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//  determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.


//leetcode solution of the question 20

var isValid = function(s){
let newS = ""
let bracket = new Map();
bracket.set(")","(");
bracket.set("}","{");
bracket.set("]","[");
  for(i=0;i<s.length;i++){
    if(s[i]==="(" || s[i]==="{" || s[i]==="["){
        newS = newS+s[i]
    } else if((s[i]===")" || s[i]==="}" || s[i]==="]")&& newS[newS.length-1]===bracket.get(s[i])){
        newS = newS.slice(0,newS.length-1)
    }else if(newS[newS.length-1]!=bracket.get(s[i])){
        newS += "{" 
    }
  }
  if(newS.length!=0) return false;
  else return true;
}
console.log(isValid("{[]}"))