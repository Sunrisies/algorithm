/**
 * 
 * @param array 数组
 * @param values 要去除的数组
 * @param iteratee 迭代器
 * @returns 去除指定值后的数组
 */
function differenceBy(array, values, iteratee) {
    const iterateeFunc = typeof iteratee === 'function' ? iteratee : (item) => item[iteratee];
    const valuesSet = new Set(values.map(iterateeFunc));
    return array.filter(item => !valuesSet.has(iterateeFunc(item)));
}
// console.log(differenceBy([2.1, 1.2, 2.3, 4.5, 3.2], [2.3, 3.2], Math.floor)); // [1.2, 4.5]
console.log(differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x')); // [{ 'x': 2 }]
// console.log(differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor)); // [3.1, 1.3]
// console.log(differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x')) // [{ 'x': 2 }]