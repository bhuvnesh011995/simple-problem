// lletcode solution of the question 2348

//time limit exceeded of below solution
// var zeroFilledSubarray = function(nums) {
//     let count = 0;
//     let sub = 0;
//     let pre = false;
//     for(i=0;i<nums.length;i++){
//         if(pre&&nums[i]==0){
//             count++
//         }else if(pre&&nums!=0){
//             if(count==1){
//                 sub++;count =0;
//                 pre=false;
//                 continue;
//             }
//             sub=sub+(count*(count+1))/2;
//             pre = false;
//             count=0;
//         }else if(!pre&&nums[i]==0){
//             count= 1;
//             pre = true;
//         }
//     }
//     if(count!=0){
//         sub = sub + (count*(count+1))/2
//     }
//     return sub
// };



var zeroFilledSubarray = function(nums) {
    let count =0,sub=0;
    for(i=0;i<nums.length;i++){
        if(nums[i]==0){
            count++
            sub = count+sub;
        }else count=0;
    }
    return sub;
}
console.log(zeroFilledSubarray([0,1,0,0,1,0,0,0]))