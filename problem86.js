// 1404. Number of Steps to Reduce a Number in Binary Representation to One

// Given the binary representation of an integer as a string s, return 
// the number of steps to reduce it to 1 under the following rules:

//     If the current number is even, you have to divide it by 2.

//     If the current number is odd, you have to add 1 to it.

// It is guaranteed that you can always reach one for all test cases.


//leetcode solution of the question 1404




//Method didn't work for long string of binary number
// let convert=function(str){
//         let len = str.length-1;
//         let ans = 0;
//     for(i=len;i>=0;i--){
//         ans += Math.pow(2,len-i)*Number(str[i])
//     }
//     return ans
//     }
// var numSteps = function(s) {
//     let steps = 0;
//     s = convert(s);
//     if(s===1){
//         return steps;
//     }else{
//         while(s!=1)
//         if(s%2===1) s++,steps++
//         else s = s/2, steps++;
//     }
//     return steps;

// };



// Method of solving using  math operation in binary number


var numSteps = function(s){
    let steps = 0;
    if(s==1){
        return steps ;
    }else{
        while(s!='1'){
            let len = s.length-1
            if(s[len]=='0'){
                s = s.slice(0,len)
                steps++;
            }else{
                let index = -1;
                let len2 = s.length-1;
                s = s.slice(0,len2)
                for(i=len2-1;i>=0;i--){
                    if(s[i]=='0'){
                        index = i;
                        break;
                    }
                    s=s.slice(0,i)+'0'+s.slice(i+1)
                }
                if(index==-1){
                    s = "1"+s
                }else{
                    s= s.slice(0,index) + "1" + s.slice(index+1)
                }
                steps += 2;
            }
        }
    }
    return steps;
}
console.log(numSteps("1101"))