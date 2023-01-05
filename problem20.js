// leetcode problem of question 151
var reverseWords = function(s) {
    let sArr = s.split(" ");
    for(i=0;i<sArr.length;i++){
        if(sArr[i]===""){
            let j = i;
            for(j;j<sArr.length;j++)
            sArr[j]=sArr[j+1];
            if(j=sArr.length-1){
                sArr.length=sArr.length-1;
                i--
            }
        }
    }
    sArr = sArr.reverse();
    return sArr.join(" ");
};
console.log(reverseWords("  hello world  "))