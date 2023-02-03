// leetcode solution of the question 6
var convert = function(s, numRows) {
    if(numRows==1){
        return s;
    }
    let zigArr = [];
    let a = false;
    let b =0;
    let k=0
    for(i=0;i<numRows;i++){
        zigArr.push([]);
    }
    for(j=0;j<s.length;j++){
        
        if(!a){
            zigArr[b].push(s[j]);
            if(k==numRows-1){
                a =!a;
                b--;
                k=0;
                continue;
            }
            b++;
            k++;
        }else{
            zigArr[b].push(s[j]);
            if(b==0){
                a = !a;
                b++;
                k++;
                continue;
            }
            b--
        }
    }
    a=""
    zigArr = zigArr.flat();
    for(i=0;i<zigArr.length;i++){
        a = a + zigArr[i]
    }
    return a;

};
console.log(convert("PAYPALISHIRING",3))