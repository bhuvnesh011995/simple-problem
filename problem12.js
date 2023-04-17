// 1431. Kids With the Greatest Number of Candies

// There are n kids with candies. You are given an integer array candies,
//  where each candies[i] represents the number of candies the ith kid has, and an integer
//   extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid 
// all the extraCandies, they will have the greatest number of candies among all the kids, 
// or false otherwise. Note that multiple kids can have the greatest number of candies.


// leetcode solution of question 1431 



// var kidsWithCandies = function(candies, extraCandies){
//     let i;
//     let j= candies[0];
//     let result = [];
//     for(i=0;i<candies.length;i++){
//         if(j<candies[i+1]){
//             j=candies[i+1];
//         }
//     }
//     for(i=0;i<candies.length;i++){
//         if(candies[i]+extraCandies>=j){
//             result[i]= true;
//         }
//         else{
//             result[i] = false;
//         }
//     }
//     return result;
// };


var kidsWithCandies = function(candies, extraCandies){
    let max = Math.max(...candies)

    max -= extraCandies;
    candies = candies.map((e)=>{
        if(e>=max) return true
        else return false
    }) 
return candies;
}

console.log(kidsWithCandies([2,3,5,1,3], 3));