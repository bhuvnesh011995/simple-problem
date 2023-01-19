// var addTwoNumbers = function(l1, l2) {
//     let j = 0;
//     let c =[0]
//     if(l1.length < l2.length){
//         let b;
//         b=l1;
//         l1 = l2;
//         l2 =b;
//     }
//     for(i=0;i<l1.length;i++){
//         if(l2[j]==undefined){
//             l2[j]=0;
//         }
//         c[j] = l2[j]+l1[j];
//         if(c[j]>9){

//             let a = Math.trunc(c[j]/10);
//             c[j]= c[j]%10;
//             l2[j+1] = a+l2[j+1]
//         }
//         j++
//     }
//     return c;
// };


var addTwoNumbers = function(l1, l2) {
    if(l1.length>l2.length){
        a= l1;
        l1=l2;
        l2=a;
    }
   for(i=0;i<l2.length;i++){
        if(l1[i]==undefined){
            l1[i]=0
        }
        l1[i] = l1[i]+l2[i];
        if(l1[i]>9){
            let b = l1[i];
            l1[i] = l1[i]%10;
            if(l2[i+1]==undefined){
                l2[i+1]=0
            }
            l2[i+1] = Math.floor(b/10)+ l2[i+1]
        }

   }
return l1;
};console.log(addTwoNumbers([1,4,3,5],[2,6,4]));