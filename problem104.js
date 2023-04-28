// 839. Similar String Groups
// Two strings X and Y are similar if we can swap two letters (in different positions) of X, so that 
// it equals Y. Also two strings X and Y are similar if they are equal.

// For example, "tars" and "rats" are similar (swapping at positions 0 and 2), and "rats" and "arts"
//  are similar, but "star" is not similar to "tars", "rats", or "arts".

// Together, these form two connected groups by similarity: {"tars", "rats", "arts"} and {"star"}.  Notice
//  that "tars" and "arts" are in the same group even though they are not similar.  Formally, each group 
//  is such that a word is in the group if and only if it is similar to at least one other word in the 
//  group.

// We are given a list strs of strings where every string in strs is an anagram of every other string in
//  strs. How many groups are there?

// leetcode solution of the question 839


let check = function(str1,str2){
    if(str1 == str2){
        return true;
    }
    let pre;
    let diff = 0;
    for(k=0;k<str1.length;k++){
        if(str1[k]!=str2[k]){
            if(!pre){
                pre = k;
            }
            if(++diff==3) return false;
            if(pre!=k) if(!(str1[pre]==str2[k]&&str2[pre]==str1[k])){
                return false;
            }
        }
    }
    return true;
}

var numSimilarGroups = function(strs) {
    // strs = strs.map((e)=>{
    //     return e.split('')
    // })
    let ans=[]
    while(strs.length){
        ans.push(new Array(1).fill(strs[0]))
        strs.shift();
        if(!strs.length) return ans.length
        for(i=0;i<ans[ans.length-1].length;i++){
            for(j=0;j<strs.length;j++){
                if(check(ans[ans.length-1][i],strs[j])){
                    ans[ans.length-1].push(strs[j]);
                    strs[j]=null;
                }
            }strs = strs.filter((e)=>{if(e) return e})
            
        }
    }
    return ans.length
};

console.log(numSimilarGroups(["tars","rats","arts","star"]))