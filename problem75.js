// leetcode solution of the question 1333 need improvement
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    filterRes();
    let ans =[];
    for(i=0;i<restaurants.length;i++){
        ans.push(restaurants[i][0])
    }




    


    function filterRes(){
        for(i=0;i<restaurants.length;i++){
            if(veganFriendly){if(restaurants[i][2]==0){
                restaurants[i] = restaurants[restaurants.length-1];
                restaurants.length = restaurants.length-1;
                i--
                continue
            }}
            if(restaurants[i][3]>maxPrice){
                restaurants[i] = restaurants[restaurants.length-1];
                restaurants.length = restaurants.length-1;
                i--
                continue
            }
            if(restaurants[i][4]>maxDistance){
                restaurants[i] = restaurants[restaurants.length-1];
                restaurants.length = restaurants.length-1;
                i--
                continue
            }
            
            }
            for(j=1;j<restaurants.length;j++){
                if(restaurants[j][1]>restaurants[j-1][1]||(restaurants[j][1]==restaurants[j-1][1]&&restaurants[j][0]>restaurants[j-1][0])){
                    let temp = restaurants[j];
                    restaurants[j] = restaurants[j-1];
                    restaurants[j-1]=temp;
                    j= j-2
                    if(j==-1){
                        j=0;
                    }
                }
        }
        
    }
    return ans
};
console.log(filterRestaurants([[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]],0,50,10))