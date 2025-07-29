/**
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

    题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

    请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
    示例 1:
    输入: nums = [1,2,3,4]
    输出: [24,12,8,6]

    示例 2:
    输入: nums = [-1,1,0,-3,3]
    输出: [0,0,9,0,0]
 */
function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const result: number[] = new Array(n).fill(1);
    // 计算左边乘积
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }
    // 计算右边乘积并合并结果
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
};
console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
// console.log(productExceptSelf([0, 0])); // [120,60,40,30,24]

function productExceptSelf1(nums: number[]): number[] {
    const n = nums.length;
    const prefix: number[] = new Array(n).fill(1);
    const suffix: number[] = new Array(n).fill(1);
    const result: number[] = new Array(n);

    // 计算前缀乘积
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    // 计算后缀乘积
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    // 合并结果
    for (let i = 0; i < n; i++) {
        result[i] = prefix[i] * suffix[i];
    }

    return result;
}