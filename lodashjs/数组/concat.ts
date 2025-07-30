function concat(array: any[], ...values: any[]): any[] {
    return array.concat(...values);
}
const arr1 = [1, 2, 3];
console.log(concat(arr1, [4, 5, 6], [7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat(arr1, 4, 5, 6)); // [1, 2, 3, 4, 5, 6]
console.log(concat(arr1, [4, 5, 6], 7, 8, 9)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat(arr1, 4, [5], [[6]])) // [1, 2, 3, 4, 5, [6]]
console.log(arr1)