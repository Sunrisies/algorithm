/**
 * 
 * @param array 数组
 * @param n 要丢弃的元素个数
 * @returns 丢弃了 n 个元素的数组
 */
function drop(array, n = 1) {
    let length = array == null ? 0 : array.length
    return length < n ? [] : array.slice(n, length)
}
console.log(drop([1, 2, 3, 4, 5], 2)) // [3, 4, 5]
console.log(drop([1, 2, 3, 4, 5], 0)) // [1, 2, 3, 4, 5]
console.log(drop([1, 2, 3, 4, 5], 5)) // []
console.log(drop([1, 2, 3, 4, 5], 6)) // []

/**
 * slice 方法的作用是从数组中提取一个片段，返回一个新数组。
 * 它接受两个参数：起始索引和结束索引（不包括结束索引）。
 * 如果只提供一个参数，则从该索引开始提取到数组的末尾
 * 如果不提供参数，则返回整个数组的副本。
 * 注意：slice 方法不会修改原始数组，而是返回一个新数组。
 * 示例：
 * const arr = [1, 2, 3, 4, 5];
 * const newArr = arr.slice(1); // [2, 3, 4, 5]
 * console.log(arr); // [1, 2, 3, 4, 5]
 * console.log(newArr); // [2, 3, 4, 5]
 */

const arr = [1, 2, 3, 4, 5]
console.log(arr.slice(1))