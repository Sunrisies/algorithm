/**
 * 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

    你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。

    示例 1 ：
    输入：nums = [2,2,1]
    输出：1

    示例 2 ：
    输入：nums = [4,1,2,1,2]
    输出：4

    示例 3 ：
    输入：nums = [1]
    输出：1
 */
// 使用map 时间复杂度O(Nlogn) ，空间复杂度O(N)
function singleNumber(nums: number[]): number {
    nums.sort((a, b) => a - b);
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
        else map.set(nums[i], 1);
    }
    for (let [key, value] of map) {
        if (value === 1) return key;
    }
    return 0
};
console.log(singleNumber3([2, 2, 1])); // 1
console.log(singleNumber3([4, 1, 2, 1, 2])); // 4
console.log(singleNumber3([1])); // 1

// 第二种 时间复杂度O(Nlogn) ，空间复杂度O(N)
function singleNumber2(nums: number[]): number {
    nums.sort((a, b) => a - b);
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) map.delete(nums[i]);
        else map.set(nums[i], 1);
    }
    return Array.from(map.keys())[0];
}
// 时间复杂度 O(Nlogn) ，空间复杂度O(1)
function singleNumber3(nums: number[]): number {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
            return nums[i];
        }
    }
    return -1
}
// 时间复杂度 O(N) ，空间复杂度O(1)
function singleNumber4(nums: number[]): number {
    return nums.reduce((pre, cur) => pre ^ cur);
}