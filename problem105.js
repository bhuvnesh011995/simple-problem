// 1823. Find the Winner of the Circular Gamep

// There are n friends that are playing a game. The friends are sitting in a circle and are numbered 
// from 1 to n in clockwise order. More formally, moving clockwise from the ith friend brings you to
//  the (i+1)th friend for 1 <= i < n, and moving clockwise from the nth friend brings you to the 1st friend.

// The rules of the game are as follows:

//     Start at the 1st friend.
//     Count the next k friends in the clockwise direction including the friend you started at. The 
//     counting wraps around the circle and may count some friends more than once.
//     The last friend you counted leaves the circle and loses the game.
//     If there is still more than one friend in the circle, go back to step 2 starting from the friend 
//     immediately clockwise of the friend who just lost and repeat.
//     Else, the last friend in the circle wins the game.

// Given the number of friends, n, and an integer k, return the winner of the game.


// leetcode solution of the question 1823


var findTheWinner = function(n, k) {
    let index;
    let arr = [];
    for(i=0;i<n;i++){
        arr.push(i+1);
    }
    let currIndex = 0;
    while(arr.length!=1){
        // index to be removed
        index = currIndex + (k-1)
        if(index>=arr.length) index = index%arr.length;
        // if(index==arr.length) currIndex =0;
        /*else*/ currIndex = index;
        arr.splice(index,1);
    }
    return arr[0]
};

// crazy solution not mine took from leetcode solutions
// var findTheWinner = function(n, k) {
//     let i=1, ans=0;
//     while(i<=n){
//         ans = (ans+k)%i
//         i++
//     }
//     return ans+1
    
// };
console.log(findTheWinner(5,2))