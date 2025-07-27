/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
    注意：答案中不可以包含重复的三元组。

    示例 1：
    输入：nums = [-1,0,1,2,-1,-4]
    输出：[[-1,-1,2],[-1,0,1]]
    解释：
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
    nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
    nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
    不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
    注意，输出的顺序和三元组的顺序并不重要。

    示例 2：
    输入：nums = [0,1,1]
    输出：[]
    解释：唯一可能的三元组和不为 0 。
    
    示例 3：
    输入：nums = [0,0,0]
    输出：[[0,0,0]]
    解释：唯一可能的三元组和为 0 。
 */
// 哈希表
function threeSum(nums: number[]): number[][] {
    let res: number[][] = [];
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        const seen = new Set()
        for (let j = i + 1; j < nums.length; j++) {
            const target = -nums[i] - nums[j] // 目标值，第一项减去第二项，查询剩下的参数是存在这个值的
            if (seen.has(target)) {
                res.push([nums[i], nums[j], target])
                while (j < nums.length && nums[j] === nums[j + 1]) j++; // 去重
            }
            seen.add(nums[j])
        }
    }
    return res
};


console.log(threeSum1([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 1, 1]));
// console.log(threeSum1([0, 0, 0]));
// 双指针
function threeSum1(nums: number[]): number[][] {
    let res: number[][] = [];
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; // 去重
                while (left < right && nums[right] === nums[right - 1]) right--; // 去重
                left++;
                right--;
            } else if (sum < 0) {
                left++; // 移动左边
            } else {
                right--; // 移动右边
            }
        }
    }
    return res
};
