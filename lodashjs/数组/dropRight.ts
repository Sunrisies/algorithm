/**
 * 
 * @param array 数组
 * @param n 要丢弃的元素个数
 * @returns 新的数组
 */
function dropRight(array: any[], n: number = 1): any[] {
    return array.slice(0, -n);
}

console.log(dropRight([1, 2, 3, 4, 5], 2)); // [1, 2, 3]
console.log(dropRight([1, 2, 3, 4, 5], 5)); // []
console.log(dropRight([1, 2, 3, 4, 5], 0)); // [1, 2, 3, 4, 5]