function maxProfit(prices: number[]): number {

    let buy_price = prices[0];
    let max_profit = 0;
    let curr_profit = 0;
    for (const price of prices) {
        buy_price = Math.min(buy_price, price);
        curr_profit = price - buy_price;
        if (curr_profit > max_profit) {
            max_profit = curr_profit;
        }
    }

    return max_profit;
}