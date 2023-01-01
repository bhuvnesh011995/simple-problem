var rotateRight = function(head, k) {
    let a,b;
    for(i=1;i<=k;i++)
    {
        let j=0
        a=head[j];
        for(j; j<head.length;j++){
            b=head[j+1];
            if(j<head.length-1){
                 head[j+1] = a;
            }
            a=b;
            if(head.length-2 === j){
                head[0]=b;
                break;
            }
        }
        
    }
    return head;
};
console.log(rotateRight([1,2,3,4,5],100));