// leetcode solution of the question 3
var lengthOfLongestSubstring = function(s) {
    let a = "";
    let b="";
    for(i=0;i<s.length;i++){
        if(!b.includes(s[i])){
            b=b+s[i];
        }else{
         b= b.slice(b.indexOf(s[i])+1)
            b= b+s[i];
        }
        if(a.length<b.length){
            a=b;
        }

    }
   return a.length; 
};

console.log(lengthOfLongestSubstring("bbbbb"));