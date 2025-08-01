/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
    你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
    你可以按任意顺序返回答案。

    示例 1：
    输入：nums = [2,7,11,15], target = 9
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

    示例 2：
    输入：nums = [3,2,4], target = 6
    输出：[1,2]

    示例 3：
    输入：nums = [3,3], target = 6
    输出：[0,1]
 */
// 使用哈希表，时间复杂度O(n) 空间复杂度O(n)
function twoSum(nums: number[], target: number): number[] {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i]
        const diff = target - curr
        if (map.has(diff)) {
            return [map.get(diff), i]
        }
        map.set(curr, i)
    }
    return []
};
// console.log(twoSum3([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum3([3, 2, 4], 6)); // [1,2]
// console.log(twoSum3([3, 3], 6)); // [0,1]
// 双指针，时间复杂度O(n^2) 空间复杂度O(1)
function twoSum1(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return []
}
// 排序 + 双指针，时间复杂度O(nlogn) 空间复杂度O(n)
function twoSum3(nums: number[], target: number): number[] {
    const indexedNums = nums.map((num, index) => ({ num, index }));
    indexedNums.sort((a, b) => a.num - b.num);
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const curr = indexedNums[left].num + indexedNums[right].num;
        if (curr === target) {
            return [indexedNums[left].index, indexedNums[right].index];
        } else if (curr < target) {
            left++
        } else {
            right--
        }
    }
    return []

}

export { }