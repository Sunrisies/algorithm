/**
 * 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。

  在「杨辉三角」中，每个数是它左上方和右上方的数的和
  示例 1:

    输入: rowIndex = 3
    输出: [1,3,3,1]
    示例 2:

    输入: rowIndex = 0
    输出: [1]
    示例 3:

    输入: rowIndex = 1
    输出: [1,1]
 */
// 时间复杂度 O(n^2) 空间复杂度 O(n^2)
function getRow(rowIndex: number): number[] {
    let result: number[][] = []
    for (let i = 0; i < rowIndex + 1; i++) {
        const row = new Array(i + 1).fill(1)
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j]
        }
        result.push(row)
    }
    return result[rowIndex] || [1]; // 如果 rowIndex 为 0，返回 [1]
};
console.log(getRow(8)); // [1,3,3,1]
// console.log(getRow(0)); // [1]
// console.log(getRow(1)); // [1,1]
function getRow2(rowIndex: number): number[] {
    // 使用组合数公式 C(n,k) = C(n,k-1) * (n - k + 1) / k
    const row: number[] = [1]; // 第一个元素总是 1

    // 递推计算后续元素
    for (let k = 1; k <= rowIndex; k++) {
        // 使用递推公式避免阶乘溢出
        row.push(row[k - 1] * (rowIndex - k + 1) / k);
    }

    return row;
}
export { };