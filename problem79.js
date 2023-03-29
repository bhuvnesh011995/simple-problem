// leetcode solution of the question 1402
var maxSatisfaction = function(satisfaction) {
    satisfaction = satisfaction.sort((a,b)=>a-b);
    let k = 1;
    let temp = 0;
    let ans = 0;if(satisfaction[satisfaction.length-1]<0){return 0;}
    for(i=0;i<satisfaction.length;i++){
        for(j=i;j<satisfaction.length;j++){
            ans = ans + satisfaction[j]*k++;
        }
        if(temp<ans){
            temp = ans;
            
        }
        ans = 0;
        k =1;
    }
    return temp;
};
console.log(maxSatisfaction([-1,-8,0,5,-9]))