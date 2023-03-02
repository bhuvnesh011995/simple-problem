//leet code solution of the question 443
var compress = function(chars) {
    let s = "";
    let count=0;
    for(i=0;i<=chars.length;i++){
        if(chars[i]!=chars[i-1]){
            count++
            if(count>1){
                s = s+String(count);}
                count =0;
                if(chars[i]!=undefined)
                {s = s+chars[i]}
        }else{
            count++
        }
    }
    chars.length=0;
    for(j=0;j<s.length;j++){
        chars.push(s[j])
    }
    console.log(chars)
    return chars.length;
};
console.log(compress(["a","a","b","b","c","c","c"]))