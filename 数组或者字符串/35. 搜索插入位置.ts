/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

    请必须使用时间复杂度为 O(log n) 的算法。
    示例 1:
    输入: nums = [1,3,5,6], target = 5
    输出: 2

    示例 2:
    输入: nums = [1,3,5,6], target = 2
    输出: 1

    示例 3:
    输入: nums = [1,3,5,6], target = 7
    输出: 4
 */
// 时间复杂度 O(log n) 空间复杂度 O(1)
function searchInsert(nums: number[], target: number): number {
    if (target > nums[nums.length - 1]) return nums.length
    const index = nums.findIndex((num) => num === target)
    return index === -1 ? nums.findIndex((num) => num > target) : index
};
console.log(searchInsert2([1, 3, 5, 6], 5)); // 2
console.log(searchInsert2([1, 3, 5, 6], 2)); // 1
console.log(searchInsert2([1, 3, 5, 6], 7)); // 4
function searchInsert2(nums: number[], target: number): number {
    if (target > nums[nums.length - 1]) return nums.length
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) return i
    }
    return nums.length
}