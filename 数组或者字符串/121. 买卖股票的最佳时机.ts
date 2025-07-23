/**
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

    你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

    返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

    示例 1：

    输入：[7,1,5,3,6,4]
    输出：5
    解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
        注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
    示例 2：

    输入：prices = [7,6,4,3,1]
    输出：0
    解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 */
/**
 * 
    下面用 **“今天到底手里有没有股票”** 的视角，把这段代码 **逐行、逐状态** 讲一遍。  
    你先记住两个角色：

    - `dp[0]`：今天 **结束后** 我手里 **没有股票** 时，口袋里最多有多少钱。  
    - `dp[1]`：今天 **结束后** 我手里 **拿着 1 股** 时，口袋里最多有多少钱（注意：手里有股，钱会变少）。

    ---

    ### 🧮 变量初始化

    ```ts
    dp[0] = 0              // 一开始手里没股，利润自然是 0
    dp[1] = -prices[0]     // 一开始就把第 0 天（第一根柱子）的股票买了，
                        // 钱少了 prices[0]，所以利润是 -prices[0]
    ```

    ---

    ### 🔁 主循环：一天一天往下看

    每一天 `i`，我们只做两件事：

    1. **今天结束后不持股**（`dp[0]`）  
    可能来自两条路：  
    - 昨天本来就没股 → 今天不动，利润还是 `dp[0]`  
    - 昨天手里有股 → 今天卖掉，利润变成 `dp[1] + prices[i]`  
    取这两条路的较大者。

    ```ts
    dp[0] = Math.max(dp[0], dp[1] + prices[i])
    ```

    2. **今天结束后持股**（`dp[1]`）  
    可能来自两条路：  
    - 昨天就持股 → 今天不买不卖，利润还是 `dp[1]`  
    - 昨天没股 → 今天第一次买，利润变成 `-prices[i]`（因为只能买一次）  
    取这两条路的较大者。

    ```ts
    dp[1] = Math.max(dp[1], -prices[i])
    ```

    ---

    ### 🎯 举个例子：prices = [7, 1, 5, 3, 6, 4]

    | i | prices[i] | 解释 | dp[0]（不持股） | dp[1]（持股） |
    |---|---|---|---|---|
    | init | – | – | 0 | -7 |
    | 0 | 7 | 第 0 天只能买/不买 | 0 | max(-7, -7) = -7 |
    | 1 | 1 | 可以 1 元买，更便宜 | max(0, -7+1)=0 | max(-7, -1)=**-1** |
    | 2 | 5 | 可以 5 元卖，赚 4 | max(0, -1+5)=**4** | max(-1, -5)=-1 |
    | 3 | 3 | … | 4 | max(-1,-3)=-1 |
    | 4 | 6 | 6 元卖掉赚 5 | max(4, -1+6)=**5** | -1 |
    | 5 | 4 | … | 5 | -1 |

    循环结束时 `dp[0] = 5`，就是最大利润。

    ---

    ### 🧩 为什么最后 `return dp[0]`？
    结束时手里 **不持股** 的钱一定 ≥ **持股** 的钱（因为股票可以卖掉换成钱），所以答案就是 `dp[0]`。

    ---

    ### ✅ 一句话总结
    > 用两个变量跟踪“今天之后手里 **有没有股票** 时的最大利润”，每天只根据“昨天状态”更新“今天状态”，这就是最简 DP。
 */

// 超时
function maxProfit13(prices: number[]): number {
    if (isDecrease(prices)) return 0
    let max = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i + 1]) {
            let temp = Math.max(...prices.slice(i + 1))
            max = Math.max(max, temp - prices[i])
        }
    }

    function isDecrease(arr: number[]): boolean {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[i + 1]) {
                return false
            }
        }
        return true
    }
    return max
};
// 检查一个数组是否降序

console.log(maxProfit12([7, 1, 5, 3, 6, 4]))
// console.log(maxProfit([7, 6, 4, 3, 1, 4]))
// console.log(maxProfit([2, 4, 1]))
// console.log(maxProfit11([3, 2, 6, 5, 0, 3]))
// 贪心 时间复杂度 O(n)，空间复杂度 O(1)
function maxProfit11(prices: number[]): number {
    if (isDecrease(prices)) return 0
    let max = 0
    let min = prices[0]
    for (let curr of prices) {
        console.log(curr)
        min = Math.min(min, curr)
        max = Math.max(max, curr - min)
    }

    function isDecrease(arr: number[]): boolean {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[i + 1]) {
                return false
            }
        }
        return true
    }
    return max
};

function maxProfit12(prices: number[]): number {
    let dp = new Array(2).fill(0)
    dp[0] = 0 // 不持有股票
    dp[1] = -prices[0] // 持有股票
    console.log(dp)
    for (let i = 0; i < prices.length; i++) {
        dp[0] = Math.max(dp[0], dp[1] + prices[i]) // 第i天不持有股票，则最大利润取决于前一天不持有股票和第i天卖出股票的最大利润
        dp[1] = Math.max(dp[1], -prices[i]) // 第i天持有股票，则最大利润取决于前一天持有股票和第i天买入股票的最大利润
        console.log(dp, '=1=1=1=')
    }
    console.log(dp)
    return dp[0]
}
