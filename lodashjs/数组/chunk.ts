/**
 * 
 * @param array 数组
 * @param size 切片大小
 * @returns 切片后的数组
 */

function chunk<T>(array: T[], size: number): T[][] {
    if (size <= 0) {
        return []
    }
    let result: T[][] = []
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size))
    }
    return result
}
console.log(chunk([1, 2, 3, 4, 5], 2)) // [[1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 3)) // [[1, 2, 3], [4, 5]]
console.log(chunk([1, 2, 3, 4, 5], 0)) // []
console.log(chunk([1, 2, 3, 4, 5], 1)) // [[1], [2], [3], [4], [5]]