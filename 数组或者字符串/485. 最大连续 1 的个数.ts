/**
 * 给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。

    示例 1：
    输入：nums = [1,1,0,1,1,1]
    输出：3
    解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.

    示例 2:
    输入：nums = [1,0,1,1,0,1]
    输出：2
 */
// 时间复杂度 O(Nlogn) 空间复杂度 O(N)
function findMaxConsecutiveOnes(nums: number[]): number {
    return nums.join('').split('0').sort((a, b) => +a.length - +b.length).at(-1)?.length || 0
};
console.log(findMaxConsecutiveOnes2([1, 1, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes2([1, 0, 1, 1, 0, 1])); // 2

// 时间复杂度 O(N) 空间复杂度 O(1)
function findMaxConsecutiveOnes2(nums: number[]): number {
    let max = 0;
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
            max = Math.max(max, count);
        } else {
            count = 0;
        }
    }
    return max;
}

// 优化版本 时间复杂度 O(N) 空间复杂度 O(1)
function findMaxConsecutiveOnes3(nums: number[]): number {
    let max = 0;
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        count = nums[i] === 1 ? count + 1 : 0;
        if (count > max) max = count;
    }
    return max;
}