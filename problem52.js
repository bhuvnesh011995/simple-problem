// 394. Decode String

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets 
// is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square 
// brackets are well-formed, etc. Furthermore, you may assume that the original data does not 
// contain any digits and that digits are only for those repeat numbers, k. For example, there
//  will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.


// leetcode solution of the question 394

var decodeString = function(s) {
    let pointers = s;
    s = [];
    let num;
    let str;
    for(i=0;i<pointers.length;i++){
       if(!isNaN(pointers[i])){
        str = false;
        if(num){
            s[s.length-1] = s[s.length-1]+pointers[i]
        }else{
            s.push(pointers[i]);
            num = true;
        }
       }else if(pointers[i]=='[' || pointers[i]==']'){
        str = false;num = false;
        s.push(pointers[i]);
       }else{
        if(str){
            s[s.length-1] = s[s.length-1]+pointers[i]
        }else s.push(pointers[i]), str = true;
        num = false
       }
    }
    pointers = [];
    let string = ''
    for(i=0;i<s.length;i++){
        if(s[i]=="["){pointers.push(i-1)}
        else if(s[i]==']'){
            string = s.slice(pointers[pointers.length-1]+2,i).join("").repeat(s[pointers[pointers.length-1]])
            s[pointers[pointers.length-1]] = string;
            s = s.slice(0,pointers[pointers.length-1]+1).concat(s.slice(i+1,s.length));
            i = pointers[pointers.length-1];
            pointers.pop();
        }
    }
    return s.join("")
};

console.log(decodeString("3[a2[c]]"))