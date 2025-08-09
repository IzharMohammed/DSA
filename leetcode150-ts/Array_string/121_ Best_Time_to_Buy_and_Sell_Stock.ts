/**
 * Calculates the maximum profit from buying and selling a stock once.
 *  Problem link:- https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150
 * Approach:
 * 1. Initialize `buy_price` to the first price in the array (potential buying price).
 * 2. Initialize `max_profit` to 0 (since no profit can be made if no transaction is done).
 * 3. Iterate through each price in the array:
 *    - Update `buy_price` to the minimum of the current `buy_price` and the current price.
 *      This ensures we always track the lowest price seen so far (best day to buy).
 *    - Calculate `curr_profit` as the difference between the current price and `buy_price`.
 *    - Update `max_profit` if `curr_profit` is greater than the current `max_profit`.
 * 4. Return `max_profit`, which holds the maximum profit achievable.
 * 
 * Time Complexity (TC): O(n), where n is the number of days (prices). We traverse the array once.
 * Space Complexity (SC): O(1), as we use a constant amount of extra space.
 * 
 * @param prices Array of stock prices where prices[i] is the price on the ith day.
 * @returns Maximum profit achievable or 0 if no profit is possible.
 */
function maxProfit(prices: number[]): number {
    // Initialize the buying price to the first day's price.
    let buy_price = prices[0];
    // Initialize maximum profit to 0 (no transaction done yet).
    let max_profit = 0;
    // Temporary variable to store the current profit.
    let curr_profit = 0;

    // Iterate through each day's price.
    for (const price of prices) {
        // Update the buying price to the minimum seen so far.
        buy_price = Math.min(buy_price, price);
        // Calculate profit if sold at the current price.
        curr_profit = price - buy_price;
        // Update max_profit if current profit is higher.
        if (curr_profit > max_profit) {
            max_profit = curr_profit;
        }
    }

    // Return the maximum profit found.
    return max_profit;
}

// Example Test Cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5 (Buy at 1, sell at 6)
console.log(maxProfit([7, 6, 4, 3, 1]));    // Output: 0 (No profitable transaction)