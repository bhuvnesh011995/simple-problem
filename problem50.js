// 345. Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases,
//  more than once.

// leetcode solution of the question 345

var reverseVowels = function(s) {
    let vowel =new Set();
    vowel.add("a")
    vowel.add("e")
    vowel.add("i")
    vowel.add("o")
    vowel.add("u")
    vowel.add("A")
    vowel.add("E")
    vowel.add("I")
    vowel.add("O")
    vowel.add("U")
    s= s.split("")
   let index = [];
   for(i=0;i<s.length;i++){
    if(vowel.has(s[i])){
        index.push(i);
    }
   }

   while(index.length){
    let temp;
    temp =s[index[0]];
    s[index[0]] = s[index[index.length-1]];
    s[index[index.length-1]] = temp;
    index.pop();index.shift();
   }
   return s.join("")
};
console.log(reverseVowels("leetcode"))