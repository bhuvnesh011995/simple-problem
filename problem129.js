/*714. Best Time to Buy and Sell Stock with Transaction Fee



You are given an array prices where prices[i] is the price of a given
 stock on the ith day, and an integer fee representing a transaction
  fee.

Find the maximum profit you can achieve. You may complete as many 
transactions as you like, but you need to pay the transaction fee 
for each transaction.

Note: You may not engage in multiple transactions simultaneously 
(i.e., you must sell the stock before you buy again).*/

// leetcode solution of the the question 714

var maxProfit = function(prices, fee){
    let profit = 0;
    let holdStok = -Infinity;
    for(i=0;i<prices.length;i++){
        profit = Math.max(profit,holdStok + prices[i]);
        holdStok = Math.max(holdStok,profit-prices[i]-fee);
    }
    return profit;
}
console.log(maxProfit([1,5,9],2))