/**
 * 给你一个有序数组 nums ，请你 `原地` 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。

    不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
    示例 1：

    输入：nums = [1,1,1,2,2,3]
    输出：5, nums = [1,1,2,2,3]
    解释：函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3。 不需要考虑数组中超出新长度后面的元素。
    示例 2：

    输入：nums = [0,0,1,1,1,1,2,3,3]
    输出：7, nums = [0,0,1,1,2,3,3]
    解释：函数应返回新长度 length = 7, 并且原数组的前七个元素被修改为 0, 0, 1, 1, 2, 3, 3。不需要考虑数组中超出新长度后面的元素。
 */
function removeDuplicates(nums: number[]): number {
    const n = nums.length;
    if (n <= 2) return n;           // 长度 ≤2 直接返回，无需处理

    let slow = 2;                   // 前两个元素肯定可以保留
    for (let fast = 2; fast < n; fast++) {
        // 如果当前元素与 slow-2 位置不同，说明可以保留
        if (nums[fast] !== nums[slow - 2]) {
            nums[slow] = nums[fast];
            slow++;
        }
        // 如果相等，说明已经出现 ≥3 次，直接跳过
    }
    return slow;
};
// const result12 = removeDuplicates([1, 1, 1, 2, 2, 3]);
// console.log(result12); // 5, nums = [1,1,2,2,3]
const result22 = removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);
// console.log(result22); // 7, nums = [0,0,1,1,2,3,3]

/**
 * 带计数器的双指针：可扩展到“最多保留 k 次”
 * @param nums 非严格递增数组
 * @returns 新长度 k
 */
function removeDuplicates2(nums: number[]): number {
    const k = 2;                    // 最多保留次数
    if (nums.length <= k) return nums.length;

    let slow = k;                   // 前 k 个元素肯定保留
    for (let fast = k; fast < nums.length; fast++) {
        // 只要当前值不等于 slow-k 位置的值，即可写入
        if (nums[fast] !== nums[slow - k]) {
            nums[slow++] = nums[fast];
        }
    }
    return slow;
}