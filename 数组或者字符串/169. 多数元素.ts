/**
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

    你可以假设数组是非空的，并且给定的数组总是存在多数元素。

    示例 1：

    输入：nums = [3,2,3]
    输出：3
    示例 2：

    输入：nums = [2,2,1,1,1,2,2]
    输出：2
    

    提示：
    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109
    

    进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 */
function majorityElement(nums: number[]): number {
    const count = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        count.set(nums[i], (count.get(nums[i]) || 0) + 1)
    }
    let temp = {
        value: 0,
        label: 0
    }
    for (let [key, value] of count.entries()) {
        if (value > temp.value) {
            temp.value = value;
            temp.label = key;
        }

    }
    return temp.label;

};
// const nums = [3, 2, 3];
// console.log(majorityElement(nums));
// const nums2 = [2, 2, 1, 1, 1, 2, 2];
// console.log(majorityElement(nums2));
const nums3 = [1, 2, 3, 1, 5, 6, 6, 1];
console.log(majorityElement2(nums3));
function majorityElement2(nums: number[]): number {
    let mode,// 当前众数
        maxCount = 0,// 众数出现的次数
        cur,// 当前元素
        curCount = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === cur) {
            curCount++
        } else {
            cur = nums[i]
            curCount = 1
        }
        // 获取最大众数
        if (curCount > maxCount) {
            maxCount = curCount
            mode = cur
        }
    }
    console.log(cur, curCount, mode, maxCount)
    return mode;

};

// 排序取中法
function majorityElement3(nums) {
    // 先进行排序，取中间值
    return nums.sort((a, b) => a - b).at(nums.length / 2)
};