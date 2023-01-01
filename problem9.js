var strStr = function(haystack, needle) {
    if(!haystack.includes(needle)){
        return -1;
    }
    else{
        for(i=0;i<haystack.length; i++){
            let k=i;
            for(j=0;j<needle.length;j++){
                if(haystack[k].localeCompare(needle[j]) != 0){
                    break;
                }
                k++
                if(j===needle.length-1){
                    return i;
                }
            }
        }
    }
};
console.log(strStr("hhhbhuvnesh", "bhu"));