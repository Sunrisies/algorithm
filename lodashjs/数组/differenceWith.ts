/**
 * 
 * @param array 要检查的数组
 * @param values 要排除的数组
 * @param comparator 比较函数
 * @returns 过滤后的数组
 */
function differenceWith(array, values, comparator) {
    return array.filter(function (value) {
        return !values.some(function (other) {
            return comparator(value, other);
        });
    })
}
console.log(differenceWith([2, 1, 2, 3], [2, 3], function (a, b) {
    return a === b;
})) // [1]
console.log(differenceWith([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], function (a, b) {
    return a.x === b.x;
})) // [{ 'x': 2 }]