// 881. Boats to Save People

// You are given an array people where people[i] is the weight of the ith person,
//  and an infinite number of boats where each boat can carry a maximum weight of limit. 
//  Each boat carries at most two people at the same time, 
//  provided the sum of the weight of those people is at most limit.

// Return the minimum number of boats to carry every given person.

//leetcode solution of the question 881

   //worse time complexity and space complexity

// var numRescueBoats = function(people, limit) {
//     let noOfBoat = 0;
//     people = people.sort((a,b)=>a-b)
//     while(people.length){
//     let temp = 0;
//         if(people[people.length-1]==limit){
//             noOfBoat++;
//             people.pop();
//         }else{
//             temp = limit - people[people.length-1];
//             people.pop();
//             nextPerson(people,0,people.length-1,temp)
//         }
//     }

//     function nextPerson(arr,l,r,limits){
//         let mid = l+Math.floor((r-l)/2);
//         if(people[mid]==limits){
//             noOfBoat++;
//             remove(people,mid);
//             return;
//         }else if(people[mid]>limits){
//             r = mid-1;
//             return nextPerson(people,l,r,limits)
//         }else if(people[mid]<limits){
//             if(people[mid+1]>limits || l==r){
//                 limits = limits-people[mid];
//                 remove(people,mid)
//                 return noOfBoat++
//             }else{
//                 l = mid+ 1;
//                 return nextPerson(people,l,r,limits)
//             }
//         }
//         noOfBoat++;
//         return;

//     }

//     function remove(arr,i){
//         for(i;i<arr.length-1;i++){
//             arr[i]=arr[i+1];
//         }
//         arr.pop();
//         return;
//     }

//     return noOfBoat;

// };
// console.log(numRescueBoats([2,2],6))


var numRescueBoats = function(people, limit) {
    people = people.sort((a,b)=>a-b)
let l =0,r = people.length-1,noOfBoat =0;
while(l<=r){
    if((people[l]+people[r])<=limit){
        l++
    }
    r--,noOfBoat++;
}
return noOfBoat;

}
console.log(numRescueBoats([3,1,7],7))