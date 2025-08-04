/**
 * 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。

    你必须设计并实现线性时间复杂度的算法且使用常数级空间来解决此问题。

    示例 1：

    输入：nums = [2,2,3,2]
    输出：3
    示例 2：

    输入：nums = [0,1,0,1,0,1,99]
    输出：99
 */
// 时间复杂度O(Nlogn) 空间复杂度O(1)
function singleNumber(nums: number[]): number {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i] !== nums[i + 1]) return nums[i];
    }
    return -1;
};
console.log(singleNumber2([2, 2, 3, 2])); // 3
console.log(singleNumber2([0, 1, 0, 1, 0, 1, 99])); // 99

function singleNumber2(nums: number[]): number {
    nums.sort((a, b) => a - b);

    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
            if (map.get(nums[i]) === 3) {
                map.delete(nums[i]);
            }
        } else {
            map.set(nums[i], 1);
        }
    }
    return map.keys().next().value;
}
export { }