//LEETCODE  SOLUTION of the question 1539
var findKthPositive = function(arr, k) {
    let missingNumArr= [],j=0;
    let i =0;
    let l=1;
    while(i>-1){
        if(arr[j]==l){
            l++
            j++
        }else{
            missingNumArr[i]=l;
            l++
            i++
        }
        if(missingNumArr.length==k){
            return missingNumArr[i-1]
        }
    }
};
console.log(findKthPositive([1,2,3,4],2))