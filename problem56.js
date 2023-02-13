// leetcode solution of the question 1523
var countOdds = function(low, high) {
    if(low%2!=0 && high%2!=0){
        return Math.trunc((high-low)/2)+1
    }else if(low%2!=0 || high%2!=0){
        return Math.ceil((high-low)/2)
    }else{return (high-low)/2}
};