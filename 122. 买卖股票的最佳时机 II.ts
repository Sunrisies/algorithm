/**
 * 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

    在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

    返回 你能获得的 最大 利润 。

    示例 1：

    输入：prices = [7,1,5,3,6,4]
    输出：7
    解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4。
    随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3。
    最大总利润为 4 + 3 = 7 。
    示例 2：

    输入：prices = [1,2,3,4,5]
    输出：4
    解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4。
    最大总利润为 4 。
    示例 3：

    输入：prices = [7,6,4,3,1]
    输出：0
    解释：在这种情况下, 交易无法获得正利润，所以不参与交易可以获得最大利润，最大利润为 0。
 */
// 时间复杂度 O(n) 空间复杂度 O(1)
function maxProfit(prices: number[]): number {
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        max += Math.max(0, prices[i] - prices[i - 1]) // 计算当前天跟下一天的利润，如果是小于0，就取0，大于0，就取利润
    }
    return max;
};
console.log(maxProfit1([7, 1, 5, 3, 6, 4])) // 7
// console.log(maxProfit([1, 2, 3, 4, 5])) // 4
// console.log(maxProfit([6, 1, 3, 2, 4, 7])) // 0
// console.log(maxProfit([7, 6, 4, 3, 1])) // 0
// console.log(maxProfit1([2, 1, 3, 4]))

function maxProfit1(prices: number[]): number {

    let n = prices.length;
    let dp = new Array(n).fill(0).map(() => new Array(2).fill(0))
    // 第一天
    dp[0][0] = 0 // 不持有股票
    dp[0][1] = -prices[0] // 持有股票
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]) // 第i天不持有股票最大值,
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]) // 第i天持有股票最大值
    }

    return dp[n - 1][0]
}