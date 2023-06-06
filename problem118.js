/*1502. Can Make Arithmetic Progression From Sequence
A sequence of numbers is called an arithmetic progression if the 
difference between any two consecutive elements is the same.

Given an array of numbers arr, return true if the array can be 
rearranged to form an arithmetic progression. Otherwise, return false.*/

// leetcode solution of the question 1502

// my code my approach
// var canMakeArithmeticProgression = function(arr) {
//     if(arr.length<=2) return true
//     arr = arr.sort((a,b)=>a-b)
//     let d = arr[1]-arr[0]
//     for(i=2;i<arr.length;i++){
//         console.log(arr[i]-arr[i-1])
//         if(arr[i]-arr[i-1]==d) continue
//         else return false
//     }
//     return true
// };

var canMakeArithmeticProgression = function (arr){
    let max = -Infinity;
    let min = Infinity;
    for(let e of arr){
        if(e<min) min = e;
        if(e>max) max = e;
    }

    let d = (max-min)/(arr.length-1)
    if(d==0){
        for(let e of arr)
        {if(e!=arr[0]) return false;}
        return true
    }

    let arr1 = new Set();
    for(let e of arr){
        if((e-min)%d!=0) return false
        arr1.add((e-min)/d)
    }
    return arr1.size===arr.length
}


console.log(canMakeArithmeticProgression([0,0,0,0]))