// leetcpde solution of the question 28
var strStr = function(haystack, needle) {
    if(!haystack.includes(needle)){
        return -1;
    }
    // else{
    //     for(i=0;i<haystack.length; i++){
    //         let k=i;
    //         for(j=0;j<needle.length;j++){
    //             if(haystack[k].localeCompare(needle[j]) != 0){
    //                 break;
    //             }
    //             k++
    //             if(j===needle.length-1){
    //                 return i;
    //             }
    //         }
    //     }
    // }
    else{
        return haystack.indexOf(needle);
    }
};
console.log(strStr("hhhbhuvnesh", "bhu"));