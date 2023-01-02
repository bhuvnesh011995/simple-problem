// leetcode solution of question 1431 
var kidsWithCandies = function(candies, extraCandies){
    let i;
    let j= candies[0];
    let result = [];
    for(i=0;i<candies.length;i++){
        if(j<candies[i+1]){
            j=candies[i+1];
        }
    }
    for(i=0;i<candies.length;i++){
        if(candies[i]+extraCandies>=j){
            result[i]= true;
        }
        else{
            result[i] = false;
        }
    }
    return result;
};
console.log(kidsWithCabdues([2,3,5,1,3], 3));