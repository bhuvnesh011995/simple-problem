// leetcode solution of the question 134
var canCompleteCircuit = function(gas, cost) {
    let j,k;
    let gases=0;
    let costs = 0;
    for(i=0;i>=0;i++){
        if(i==gas.length){
            k=null;
            i=0;
        }
        if(j===i){
            return j;
        }
        if(i==gas.length&&j==undefined){
            return -1;
        }
        
        gases = gases+gas[i];
        costs = costs + cost[i]
        if(gases>=costs){
            if(j==undefined){
                j= i;
            }
            // if(i==j-1){
            //     return j;
            // }
            gases = gases - costs;
            costs = 0;
        }
        else if(costs>gases&&k===null){
            return -1;
        }
        else{
            gases =0;
            costs=0;
            j=undefined;
        }

    }
};
console.log(canCompleteCircuit([3,1,1],[1,2,2]))