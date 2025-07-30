/**
 * 
 * @param array 数组
 * @param values 要去除的值
 * @returns 去除指定值后的数组
 */
function difference(array: any[], ...values: any[]): any[] {
    return array.filter(item => !values.some(value => value === item))
}
console.log(difference([1, 2, 3, 4, 5], 2, 4)) // [1, 3, 5]
console.log(difference([1, 2, 3, 4, 5], 2, 4, 6)) // [1, 3, 5]