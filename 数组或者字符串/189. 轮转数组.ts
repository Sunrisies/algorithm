/**
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

    示例 1:

    输入: nums = [1,2,3,4,5,6,7], k = 3
    输出: [5,6,7,1,2,3,4]
    解释:
    向右轮转 1 步: [7,1,2,3,4,5,6]
    向右轮转 2 步: [6,7,1,2,3,4,5]
    向右轮转 3 步: [5,6,7,1,2,3,4]
    示例 2:

    输入：nums = [-1,-100,3,99], k = 2
    输出：[3,99,-1,-100]
    解释: 
    向右轮转 1 步: [99,-1,-100,3]
    向右轮转 2 步: [3,99,-1,-100]
 */
function rotate(nums: number[], k: number): void {
    for (let i = 0; i < k; i++) {
        if (i === k) return
        let temp = nums.pop()!
        nums.unshift(temp)
    }
    console.log(nums)

};
// rotate1([1, 2, 3, 4, 5, 6, 7], 3)
rotate3([-1, -100, 3, 99], 2)
// rotate3([1, 2, 3, 4], 7)
function rotate1(nums: number[], k: number): void {
    // 如果k大于数组长度，则k取余数
    if (k >= nums.length) k = k % nums.length
    let len = nums.length - k
    const temp = nums.splice(len, k)
    nums.unshift(...temp)
    console.log(nums)
};


// 跟上面的方法有一些类似
function rotate2(nums: number[], k: number): void {
    // 如果k大于数组长度，则k取余数
    if (k >= nums.length) k = k % nums.length
    let len = nums.length - k
    const temp = nums.splice(0, len)
    nums.push(...temp)
    console.log(nums, temp)
};
// 三次翻转法
function rotate3(nums: number[], k: number): void {
    const n = nums.length;
    k %= n;
    const rev = (l: number, r: number) => {
        while (l < r) [nums[l++], nums[r--]] = [nums[r], nums[l]];
    };
    rev(0, n - 1);   // 整体翻转
    rev(0, k - 1);   // 翻转前 k 个
    rev(k, n - 1);   // 翻转剩余
}

