// 2390. Removing Stars From a String
// You are given a string s, which contains stars *.

// In one operation, you can:

//     Choose a star in s.
//     Remove the closest non-star character to its left, as well as remove the star itself.

// Return the string after all stars have been removed.

// Note:

//     The input will be generated such that the operation is always possible.
//     It can be shown that the resulting string will always be unique.



// leetcode solution of the question 2390


// bad run time beat only 5%
// function removeStars(s){
//     for(i=0;i<s.length;i++){
//         if(i==0&& s[i]=="*"){
//             s = s.slice(1);
//             i--
//         }else if(s[i]=="*"){
//             s = s.slice(0,i-1)+s.slice(i+1);
//             i -= 2;
//         }
//     }
//     return s;
// }


// again too  much runtime 7352ms
// function removeStars(s){
//    let i = s.indexOf("*");
//     while(i!=-1){
//         s = s.slice(0,i-1)+s.slice(i+1);
//         i = s.indexOf("*")
//     }
//     return s;
// }

//good beat 90%
// function removeStars(s){
// let ans = [];
// for(i=0;i<s.length;i++){
//     if(s[i]=="*") ans.pop();
//     else ans.push(s[i])
// }
// return ans.join("")
// }

// not good as previous one bc too many conditions
// function removeStars(s){
//     let count = 0, str = false,ans = [];
//     for(i=0;i<s.length;i++)
//     if(s[i]!="*"){
//         if(str){
//             ans.length=ans.length-count;
//             str = false, count = 0;
//         }
//         ans.push(s[i]);
//     }else{
//         str = true;
//         count++;
//     }
//     if(str){
//         ans.length = ans.length-count;
//     }
//     return ans.join("")
// }


function removeStars(s){
    let ans = ''
    for(i=0;i<s.length;i++){
        if(s[i]=="*") ans = ans.slice(0,-1);
        else ans = ans + s[i]
    }
    return ans
}
console.log(removeStars("leet**cod*e"))
