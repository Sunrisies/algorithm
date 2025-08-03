/**
 * 给定一个表示 大整数 的整数数组 digits，其中 digits[i] 是整数的第 i 位数字。这些数字按从左到右，从最高位到最低位排列。这个大整数不包含任何前导 0。

    将大整数加 1，并返回结果的数字数组。

    示例 1：
    输入：digits = [1,2,3]
    输出：[1,2,4]
    解释：输入数组表示数字 123。
    加 1 后得到 123 + 1 = 124。
    因此，结果应该是 [1,2,4]。

    示例 2：
    输入：digits = [4,3,2,1]
    输出：[4,3,2,2]
    解释：输入数组表示数字 4321。
    加 1 后得到 4321 + 1 = 4322。
    因此，结果应该是 [4,3,2,2]。
    
    示例 3：
    输入：digits = [9]
    输出：[1,0]
    解释：输入数组表示数字 9。
    加 1 得到了 9 + 1 = 10。
    因此，结果应该是 [1,0]。
 
 */
// 时间复杂度 O(n) 空间复杂度 O(1)
function plusOne(digits: number[]): number[] {
    const n = digits.length;
    for (let i = n - 1; i >= 0; i--) {
        digits[i] += 1;
        if (digits[i] < 10) {
            return digits;
        }
        digits[i] = 0;
    }

    return [1, ...digits]
};

// console.log(plusOne([1, 2, 3])); // [1,2,4]
// console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
// console.log(plusOne([9])); // [1,0]
console.log(plusOne1([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
// console.log(plusOne([1, 2, 3, 9, 2, 9, 2, 9, 9]))
// 新特性
function plusOne1(digits: number[]): number[] {
    return ((BigInt(digits.join('')) + 1n) + '').split('').map(Number)
}