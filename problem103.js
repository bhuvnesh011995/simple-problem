// 319. Bulb Switcher

// There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second
//  bulb.

// On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For
//  the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb.

// Return the number of bulbs that are on after n rounds.


//leetcode solution of the question 319

// fatel error reached heap limit allocation failed - javascript heap out of memory
// var bulbSwitch = function(n) {
//     if(!n) return 0
//     else if(n==1) return 1;
//     let arr = new Array(n).fill(1)
//     let round = 2;
//     for(round;round<=n;round++){
//         for(i=round-1;i<n;i=i+round){
//             if(arr[i]) arr[i]=0
//             else arr[i]=1;
//         }}
// let count = 0;
//     arr.map((e)=>{ if(e) return count++})
// return count;
// };
// for(j=1;j<=50;j++){
//     console.log(j , " : ", bulbSwitch(j))
// }

// test case pass but time taking O(n)
// var bulbSwitch = function (n){
//     if(!n) return 0;
//     let count =1;
//     let incriment =3;
//     for(i = incriment;i<n;i=i+incriment){
//         incriment += 2;
//         count++
//     }
//     return count;
// }

function bulbSwitch(n){
    return Math.floor(Math.sqrt(n))
}

console.log(bulbSwitch(9))
