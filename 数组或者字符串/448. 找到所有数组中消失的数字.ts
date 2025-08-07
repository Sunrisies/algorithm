/**
 * 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。

    示例 1：
    输入：nums = [4,3,2,7,8,2,3,1]
    输出：[5,6]

    示例 2：
    输入：nums = [1,1]
    输出：[2]
 */
// 超时间
function findDisappearedNumbers(nums: number[]): number[] {
    let res: number[] = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(i + 1) === -1) {
            res.push(i + 1);
        }
    }
    return res
};
console.log(findDisappearedNumbers2([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
// console.log(findDisappearedNumbers([1, 1])); // [2]

function findDisappearedNumbers2(nums: number[]): number[] {
    const n = nums.length;
    // 第一次遍历：标记出现过的数字
    for (let i = 0; i < n; i++) {
        const index = Math.abs(nums[i]) - 1; // 获取实际索引位置
        if (nums[index] > 0) {
            nums[index] = -nums[index]; // 标记为负数
        }
    }
    const result: number[] = [];
    // 第二次遍历：收集未标记的位置
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            result.push(i + 1); // 位置i缺失的数字是i+1
        }
    }
    return result;
}