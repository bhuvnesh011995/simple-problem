// 459. Repeated Substring CanvasPattern
// Given a string s, check if it can be constructed by taking a substring 
// of it and appending multiple copies of the substring together.

//leetcode solution of the question 459

var repeatedSubstringPattern = function(s) {
    for(i=1;i<s.length/2+1;i++){
      let temp = s.slice(i,s.length+1);
      if(temp=="") return false
          while(s.slice(0,i)===temp.slice(0,i)){
              temp = temp.slice(i,temp.length)
          }
          if(temp=="") return true
      }
    return false; 
  };
console.log(repeatedSubstringPattern("abab"))