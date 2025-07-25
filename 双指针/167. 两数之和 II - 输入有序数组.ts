/**
 * 给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。
    以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。
    你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。
    你所设计的解决方案必须只使用常量级的额外空间。
    示例 1：
    输入：numbers = [2,7,11,15], target = 9
    输出：[1,2]
    解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。

    示例 2：
    输入：numbers = [2,3,4], target = 6
    输出：[1,3]
    解释：2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 。
    
    示例 3：
    输入：numbers = [-1,0], target = -1
    输出：[1,2]
    解释：-1 与 0 之和等于目标数 -1 。因此 index1 = 1, index2 = 2 。返回 [1, 2]
 */
function twoSum(numbers: number[], target: number): number[] {
    let result: number[] = [];
    let temp = new Map()
    for (let i = 0; i < numbers.length; i++) {
        if (temp.has(target - numbers[i])) {
            result = [temp.get(target - numbers[i]) + 1, i + 1]
            break
        } else {
            temp.set(numbers[i], i)
        }
    }
    return result
};
// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
// console.log(twoSum2([-1, 0], -1));

function twoSum2(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            // 题目要求下标从1开始
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    // 根据题目描述，保证有解，所以这里不会执行
    return [-1, -1];
};

function twoSum3(numbers: number[], target: number): number[] {
    for (let i = 0; i < numbers.length; i++) {
        let left = i + 1;
        let right = numbers.length - 1;
        const complement = target - numbers[i];

        // 在 [left, right] 范围内二分查找 complement
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (numbers[mid] === complement) {
                return [i + 1, mid + 1];
            } else if (numbers[mid] < complement) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return [-1, -1];
}