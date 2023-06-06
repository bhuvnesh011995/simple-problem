/*1232. Check If It Is a Straight line
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the
 coordinate of a point. Check if these points make a straight line in the XY plane.*/
 // leetcode solution of the question 1232


 var checkStraightLine = function(coordinates) {
    if(coordinates.length<=2) return true
    else{
        let x,y;
        let m = (coordinates[1][1]-coordinates[0][1])/(coordinates[1][0]-coordinates[0][0])
        function checkline(arr){
            let ans = (arr[1]-coordinates[0][1])-m*(arr[0]-coordinates[0][0])
            if(ans===0) return true
            else return false
        }

        if(m===Infinity){
            for(i=2;i<coordinates.length;i++){
                if(coordinates[i][0]===coordinates[0][0]) continue
                else return false
            }
            return true
        }
       else{for(i=2;i<coordinates.length;i++){
            if(checkline(coordinates[i])) continue
            else return false
        }
        return true;}
    }
 };

 console.log(checkStraightLine([[0,1],[0,2],[0,3]]))