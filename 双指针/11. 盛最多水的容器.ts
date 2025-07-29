/**
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
    找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
    返回容器可以储存的最大水量。
    说明：你不能倾斜容器。
    输入：[1,8,6,2,5,4,8,3,7]
    输出：49 
    解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
    示例 2：
    输入：height = [1,1]
    输出：1
    最大面积等于高度*长度
 */
// 时间复杂度 O(n)
// 空间复杂度 O(1)
function maxArea(height: number[]): number {
    let result = 0;
    let left = 0
    let right = height.length - 1
    while (left < right) {
        // 两个高度中最小的高度，乘以长度
        result = Math.max(result, Math.min(height[left], height[right]) * (right - left))
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return result
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1

// 双指针优化第二版
function maxArea2(height: number[]): number {
    let max = 0
    let left = 0
    let right = height.length - 1
    while (left < right) {
        const h = Math.min(height[left], height[right])
        const area = h * (right - left)
        if (area > max) max = area
        while (left < right && height[left] <= h) left++
        while (left < right && height[right] <= h) right--
    }
    return max
}