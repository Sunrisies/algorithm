/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

    请注意 ，必须在不复制数组的情况下原地对数组进行操作。

    示例 1:
    输入: nums = [0,1,0,3,12]
    输出: [1,3,12,0,0]

    示例 2:
    输入: nums = [0]
    输出: [0]
    
 */
function moveZeroes(nums: number[]): void {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }

    console.log(nums);

};
// console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
// console.log(moveZeroes([0])); // [0]
console.log(moveZeroes([0, 0, 1])); // [1,0,0]

function moveZeroes2(nums: number[]): void {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1); // 原地删除零
            count++;
            i--; // 调整索引（因元素前移）
        }
    }
    nums.push(...Array(count).fill(0)); // 末尾补零
}