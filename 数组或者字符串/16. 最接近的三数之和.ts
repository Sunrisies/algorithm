/**
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
    返回这三个数的和。
    假定每组输入只存在恰好一个解。

    示例 1：
    输入：nums = [-1,2,1,-4], target = 1
    输出：2
    解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2)。

    示例 2：
    输入：nums = [0,0,0], target = 1
    输出：0
    解释：与 target 最接近的和是 0（0 + 0 + 0 = 0）。
 */
function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let result = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                return sum;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum;
            }
        }
    }
    return result;

};
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
// console.log(threeSumClosest([0, 0, 0], 1)); // 0