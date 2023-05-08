/*1456. Maximum Number of Vowels in a Substring of Given Length
Given a string s and an integer k, return the maximum number of vowel letters in 
any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.*/

// leetcode solution of the question 1456
//BAD TIME COMPLEXITY OF BELOW CODE O(nlogn)
/*function findIndex(arr,ele,l){
    r=arr.length-1;
    while(l<=r){
        let mid = l + Math.floor((r-l)/2);
        if(arr[mid]==ele || (arr[mid]>ele && arr[mid-1]<ele)) return mid;
        else if(arr[mid]<ele && arr[mid+1]>=ele) return mid+1;
        else if(arr[mid]<ele) l =mid+1
        else r = mid-1;
    }
    return arr.length;
}

var maxVowels = function(s, k) {
    let indexes = [];
    let max = 0,count;
    for(i in s) if(s[i]=="a"||s[i]=="e"||s[i]=="i"||s[i]=="o"||s[i]=="u") indexes.push(Number(i))
    for(i=0;i<indexes.length;i++){
        count = findIndex(indexes,indexes[i]+k,i+1)-i;
        if(count==k) return k;
        if(max<count) max = count;
    }
    return max;
};*/

// good time complexity beat 96% in leetcode without sliding window
/*let maxVowels = function (s,k){
    let indexes = [0],count=0,max = 0;
    for(i=0;i<s.length;i++){
        if(s[i]=="a"||s[i]=="e"||s[i]=="i"||s[i]=="o"||s[i]=="u"){
            indexes.push(++count);
        }else indexes.push(count)
    }
    for(i=1;i<=indexes.length-k;i++){
        count = 0;
        count = (indexes[i-1]==indexes[i]?0:1)+indexes[i+k-1]-indexes[i]
        if(max<count) max =count;
    }
    return max
}*/

// sliding window

let maxVowels = function (s,k){
    let count =0;let l =0;
    for(i=0;i<k;i++){
        if(["a","e","i","u","o"].includes(s[i])) count++
    }
    let max = count;
    for(k;k<s.length;k++,l++){
        if("aeiou".includes(s[l])) count--
        if(["a","e","i","u","o"].includes(s[k])) count++

        if(max<count) max = count;
    }
    return max
}
let a = [1,2,5,7,10,21,30,50]
// console.log(findIndex(a,8))
console.log(maxVowels("ibpbhixfiouhdljnjfflpapptrxgcomvnb",33))