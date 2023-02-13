// leetcode solution of the question 593
var validSquare = function(p1, p2, p3, p4) {

    if(p1[0]==p2[0]&&p1[1]==p2[1]){
        return false;
    }
    let lenArr = []
lenArr.push(Math.sqrt(Math.pow((p1[0]-p2[0]),2)+ Math.pow((p1[1]-p2[1]),2)));
lenArr.push(Math.sqrt(Math.pow((p1[0]-p3[0]),2)+ Math.pow((p1[1]-p3[1]),2)));
lenArr.push(Math.sqrt(Math.pow((p1[0]-p4[0]),2)+ Math.pow((p1[1]-p4[1]),2)));
lenArr.push(Math.sqrt(Math.pow((p2[0]-p3[0]),2)+ Math.pow((p2[1]-p3[1]),2)));
lenArr.push(Math.sqrt(Math.pow((p2[0]-p4[0]),2)+ Math.pow((p2[1]-p4[1]),2)));
lenArr.push(Math.sqrt(Math.pow((p3[0]-p4[0]),2)+ Math.pow((p3[1]-p4[1]),2)));
lenArr.sort((a,b)=>a-b);
if((lenArr[0]===lenArr[1])&&(lenArr[1]===lenArr[2])&&(lenArr[2]===lenArr[3])&&(lenArr[4]===lenArr[5])){
    return true;
}
else{ return false;}
};
console.log(validSquare([0,0],[0,0],[0,0],[0,0]))