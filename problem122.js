/*744. Find Smallest Letter Greater Than Target

You are given an array of characters letters that is sorted in

 non-decreasing order, and a character target. There are at least
  two different characters in letters.

Return the smallest character in letters that is lexicographically
 greater than target. If such a character does not exist, return the
  first character in letters.*/


  // leetcode solution of the question 744


  // time complexity O(n)
//   var nextGreatestLetter = function(letters, target) {
//     for(i=0;i<letters.length;i++){
//         if(letters[i]>target) return letters[i]
//     }
//     return letters[0]
//   };


// binary search solution time complexity O(logn)
var nextGreatestLetter = function (letters,target){
    let l = 0, r = letters.length-1
    if(letters[0]>target || letters[r]<=target) return letters[0]
    while(l<=r){
        let mid = l+ Math.floor((r-l)/2)
        if(letters[mid]>target && letters[mid-1]<=target) return letters[mid]
        if(letters[mid]<=target && letters[mid+1]>target) return letters[mid+1]
        if(letters[mid]<=target) l = mid+1
        else if( letters[mid]>target) r = mid-1
    }
    return letters[0]
}
  console.log(nextGreatestLetter(["e","e","e","e","e","e","n","n","n","n"],'e'))