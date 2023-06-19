/*1732. Find the Highest altitude
There is a biker going on a road trip. The road trip consists of
 n + 1 points at different altitudes. The biker starts his trip 
 on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is
 the net gain in altitude between points i​​​​​​ and i + 1 for all
  (0 <= i < n). Return the highest altitude of a point*/

  // leetcode solution of the question 1732


  var largestAltitude = function(gain) {
    let max =0;
    gain.reduce((a,b)=>{
        if(a+b>max) max = a+b
        return a+b
    },max)
    return max
};