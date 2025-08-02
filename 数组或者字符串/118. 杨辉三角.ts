/**
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

    在「杨辉三角」中，每个数是它左上方和右上方的数的和。

    示例 1:
    输入: numRows = 5
    输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

    示例 2:
    输入: numRows = 1
    输出: [[1]]
 
 */

function generate(numRows: number): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < numRows; i++) {
        const row: number[] = new Array(i + 1).fill(1)
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        result.push(row);
    }

    return result

};
console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// console.log(generate(1)); // [[1]]
// console.log(generate(3)); // [[1],[1,1]]
