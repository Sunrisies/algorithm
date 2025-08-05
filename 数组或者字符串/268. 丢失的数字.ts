/**
 * 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。

    示例 1：
    输入：nums = [3,0,1]
    输出：2
    解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。

    示例 2：
    输入：nums = [0,1]
    输出：2
    解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。2 是丢失的数字，因为它没有出现在 nums 中。

    示例 3：
    输入：nums = [9,6,4,2,3,5,7,0,1]
    输出：8
    解释：n = 9，因为有 9 个数字，所以所有的数字都在范围 [0,9] 内。8 是丢失的数字，因为它没有出现在 nums 中。
 */

function missingNumber(nums: number[]): number {
    // 判断一个数组是否是正常自增的
    const len = nums.length;
    for (let i = 0; i <= len; i++) {
        if (nums.indexOf(i) == -1) {
            return i;
        }
    }
    return -1
};
console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([1, 2, 0])); // 3
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log(missingNumber([0])); // 1
console.log(missingNumber([1])); // 0
console.log(missingNumber([1, 2])); // 1
// 数学求和法
function missingNumber2(nums: number[]): number {
    const n = nums.length
    const sum = (n * (n + 1)) / 2
    const sum2 = nums.reduce((acc, cur) => acc + cur, 0)
    return sum - sum2
}
