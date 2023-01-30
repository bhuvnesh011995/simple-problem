// leetcode solution of the question 56  bad time complexity
function merge(intervals) {
    let a;
    for(i=0;i<intervals.length-1;i++){
        if(intervals[i][0]>intervals[i+1][0]){
            a= intervals[i];
            intervals[i]=intervals[i+1];
            intervals[i+1]=a;
            if(i>=1){
                i = i-2;
            }
        }}
        for(j=0;j<intervals.length-1;j++){
            if(intervals[j][1]>=intervals[j+1][0]){
                if(intervals[j][1]<intervals[j+1][1]){
                    intervals[j][1] = intervals[j+1][1];
                }
                for(k=j+1;k<intervals.length;k++){
                    intervals[k] = intervals[k+1];
                    if(k==intervals.length-1){
                        intervals.pop();
                        j--;
                        break;
                    }
                }
            }
        }
    return intervals;
}; 
console.log(merge([[1,4],[0,2],[3,5]]));