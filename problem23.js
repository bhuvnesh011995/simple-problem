var myAtoi = function(s) {
    let num = ["0","1","2","3","4","5","6","7","8","9"];
    let FirstChar;
    if(s[0]==" "){
        s = s.trimStart();
    }
    if(s[0]=="-"){
            s = s.replace(s[0],"");
            FirstChar = true;
        }
        else if(s[0]=="+"){
            s = s.replace("+","");
            FirstChar = false;
        }
    let count=0;
    for(i=0;i<s.length;i++){
        if(num.indexOf(s[i])!=-1){
            count++
        }
        else{
            break;
        }}
        if(count==0){
            return 0;
        }
            s= s.slice(0,count)
            s= parseInt(s);
            if(FirstChar ==true){
                if(s<2147483648)
            return -s;
            else{
                return -2147483648;
            }
        } 
        else{
            if(s<=2147483648){
                return s;
            }else{
                return 2147483648;
            }
        }
    
};
console.log(myAtoi("   -42"));