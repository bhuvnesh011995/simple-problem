// 1491. Average Salary Excluding the Minimum and Maximum Salary
// You are given an array of unique integers salary where salary[i] is the salary of the ith 
// employee.

// Return the average salary of employees excluding the minimum and maximum salary. Answers within 1
// 0-5 of the actual answer will be accepted.



// leetcode solution of the question 1491

// var average = function(salary) {
//     let max =0;
//     let min = Infinity;
//     let total = 0;

//     for(i=0;i<salary.length;i++){
//         if(max<salary[i]) max = salary[i]
//         if(min>salary[i]) min = salary[i]
//         total += salary[i]; 
//     }
//     return (total-(max+min))/(salary.length-2)
// };

let average = function (salary){
salary.sort((a,b)=>a-b)

salary.shift()
salary.pop()
return salary.reduce((a,b)=>a+b)/salary.length
}

console.log(average([4000,3000,1000,2000]))