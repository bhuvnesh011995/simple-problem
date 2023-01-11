//leetcode solutionof question 7
var reverse = function(x){
    let b = x;
    x = x.toString();
    x = x.split("");
    let a;
    let length = x.length-1;
    for(i=0;i<=length/2;i++){
        a=x[i];
        x[i]=x[length-i];
        x[length-i] = a;
       a = x.join("");
       a = parseInt(a);
    }
    if(a>=2147483648 || a<-2147483648){
        return 0;
    }
    if(b < 0){
        return -a
    }
 return a;
};