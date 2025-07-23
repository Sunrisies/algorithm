/**
 * 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。

    考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：

    更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要。
    返回 k 。
    示例 1：

    输入：nums = [1,1,2]
    输出：2, nums = [1,2,_]
    解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
    示例 2：

    输入：nums = [0,0,1,1,1,2,2,3,3,4]
    输出：5, nums = [0,1,2,3,4]
    解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
 */
// 解法1：使用快慢指针
function removeDuplicates(nums: number[]): number {
    // 数组为空直接返回 0
    if (nums.length === 0) return 0;

    // slow 指向当前唯一序列的末尾
    let slow = 0;

    // fast 负责遍历整个数组
    for (let fast = 1; fast < nums.length; fast++) {
        // 当遇到新值时，扩充唯一序列
        if (nums[fast] !== nums[slow]) {
            slow++;               // 先移动 slow，指向待写入的位置
            nums[slow] = nums[fast]; // 把新值写到 slow 的位置
        }
        // 如果 nums[fast] === nums[slow]，说明重复，直接跳过
    }

    // slow 从 0 开始计数，所以长度需要 +1
    return slow + 1;
};

// 解法2: 倒叙遍历数组，遇到重复就删除
function removeDuplicates3(nums: number[]): number {
    // 倒着遍历，遇到重复就删除
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] === nums[i - 1]) nums.splice(i, 1);
    }
    // 此时数组已修改完成，返回新长度即可
    return nums.length;
}
// const result1 = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
// console.log(result1); // 2, [1, 2, _]
const result2 = removeDuplicates([1, 2, 3, 1]);
console.log(result2); // 2, [1, 2, _]