/*547. Number of Provinces
There are n cities. Some of them are connected, while some are not. If city a is 
connected directly with city b, and city b is connected directly with city c, then 
city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities
 outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city
 and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.*/

// leetcode solution of the question 547

// it took 5 hr time but without cheat bad runTime 86ms
var findCircleNum = function(isConnected) {
    let len = isConnected.length
    let ans = [];
let prov = new Map();
for(i=0;i<len;i++){
    for(j=0;j<len;j++){
       if(isConnected[i][j]==1){ if(prov.has(i)&&prov.has(j)){
        if(prov.get(i)!=prov.get(j)){
            let I = prov.get(i)
            let J = prov.get(j);
            ans[J] = null;
            for(let key of prov.keys()){
                if(prov.get(key)==J) prov.set(key,I)
            }
        }else continue;
    }
        if(!prov.has(i)&&!prov.has(j)){
            prov.set(i,ans.length);
            prov.set(j,ans.length)
            ans.push(ans.length);
        }else if(prov.has(i)){
            prov.set(j,prov.get(i));
        } else{
            prov.set(i,prov.get(j));
        }}
    }
}
let noOfNull = 0;
for(let e of ans){
    if(e===null) noOfNull++
}
return ans.length-noOfNull
};


console.log(findCircleNum([[1,1,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,1,1,0,0,0,0],[0,0,0,1,0,1,0,0,0,0,1,0,0,0,0],[0,0,0,1,0,0,1,0,1,0,0,0,0,1,0],[1,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,1,0],[0,0,0,0,1,0,0,0,0,1,0,1,0,0,1],[0,0,0,0,1,1,0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,0,1,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,1]]))