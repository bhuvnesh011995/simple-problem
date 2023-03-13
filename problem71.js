// leetcode aolution of the question 125
// var isPalindrome = function(s) {
//     s= s.toLowerCase();
//     let char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','0']
//     let l =0;
//     let r = s.length-1;
//     while(r>=l){
//         if(r==l){
//             return true;
//         }
//         if(!char.includes(s[r])){
//             r--;
//             continue;
//         }else if(!char.includes(s[l])){
//             l++;
//             continue
//         }else if(s[r]===s[l]){
//             r--;l++;continue
//         }else return false;

        
//     }
//     return true;

// };

// var isPalindrome = function(s) {
//     s= s.toLowerCase();
//     let char = new Set();
//     char.add("a");
//     char.add("b");
//     char.add("c");
//     char.add("d");
//     char.add("e");
//     char.add("f");
//     char.add("g");
//     char.add("h");
//     char.add("i");
//     char.add("j");
//     char.add("k");
//     char.add("l");
//     char.add("m");
//     char.add("n");
//     char.add("o");
//     char.add("p");
//     char.add("q");
//     char.add("r");
//     char.add("s");
//     char.add("t");
//     char.add("u");
//     char.add("v");
//     char.add("w");
//     char.add("x");
//     char.add("y");
//     char.add("z");
//     char.add("0");
//     char.add("1");
//     char.add("2");
//     char.add("3");
//     char.add("4");
//     char.add("5");
//     char.add("6");
//     char.add("7");
//     char.add("8");
//     char.add("9");

//     let l =0;
//     let r = s.length-1;
//     while(r>=l){
//         if(r==l){
//             return true;
//         }
//         if(!char.has(s[r])){
//             r--;
//             continue;
//         }else if(!char.has(s[l])){
//             l++;
//             continue
//         }else if(s[r]===s[l]){
//             r--;l++;continue
//         }else return false;

        
//     }
//     return true;

// };


console.log(isPalindrome("0P"))