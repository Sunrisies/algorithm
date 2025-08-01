/**
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
 * 
    示例 1：
    输入：nums = [1,2,3,1], k = 3
    输出：true

    示例 2：
    输入：nums = [1,0,1,1], k = 1
    输出：true

    示例 3：
    输入：nums = [1,2,3,1,2,3], k = 2
    输出：false
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            const prevIndex = map.get(nums[i])!;
            if (i - prevIndex <= k) {
                return true;
            }
        }
        map.set(nums[i], i);
    }
    return false;
};
// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
