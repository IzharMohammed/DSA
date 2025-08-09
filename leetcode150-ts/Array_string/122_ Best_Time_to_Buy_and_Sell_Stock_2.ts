/**
 * Calculates the maximum profit from buying and selling a stock multiple times.
 * 
 * Approach:
 * 1. Initialize `profit` to 0 (since no transactions have been made yet).
 * 2. Iterate through the prices starting from the second day (`i = 1` to `i = prices.length - 1`):
 *    - If the current day's price (`prices[i]`) is higher than the previous day's price (`prices[i-1]`),
 *      it means we can make a profit by buying on the previous day and selling on the current day.
 *    - Add the difference (`prices[i] - prices[i-1]`) to `profit`.
 * 3. Return `profit`, which accumulates all possible profits from consecutive increasing prices.
 * 
 * Intuition:
 * - The strategy exploits every possible price increase. Instead of holding for the highest peak,
 *   we sell whenever there's a profit opportunity (next day's price is higher) and immediately
 *   look for the next opportunity.
 * - This works because the sum of all small profits from consecutive increases equals the profit
 *   from buying at the lowest and selling at the highest (if prices are strictly increasing).
 * 
 * Time Complexity (TC): O(n), where n is the number of days (prices). We traverse the array once.
 * Space Complexity (SC): O(1), as we use a constant amount of extra space.
 * 
 * Problem Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * 
 * @param prices Array of stock prices where prices[i] is the price on the ith day.
 * @returns Maximum cumulative profit achievable from multiple transactions.
 */
function maxProfit(prices: number[]): number {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }

    return profit;
}

// Example Test Cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 7 (Buy at 1, sell at 5; buy at 3, sell at 6)
console.log(maxProfit([1, 2, 3, 4, 5]));    // Output: 4 (Buy at 1, sell at 5)
console.log(maxProfit([7, 6, 4, 3, 1]));    // Output: 0 (No profitable transactions)