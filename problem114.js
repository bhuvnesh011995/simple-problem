/*347. Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements
. You may return the answer in any order.*/

//leetcode solution of the question 347


var topKFrequent = function(nums, k) {
    let freq = new Map();
    for(let e of nums){
        if(!freq.has(e)) freq.set(e,1)
        else freq.set(e,freq.get(e)+1)
    }
    let ele = freq.keys();
    let arr = [];
    for(let e of ele){
        arr.push([e,freq.get(e)])
    }
    arr = arr.sort((a,b)=>b[1]-a[1])
    ele = [];
    for(i=0;i<k;i++){
        ele.push(arr[i][0])
    }
    return ele;
};

console.log(topKFrequent([3,1,4,4,5,2,6,1],2))