function compact(array: any[]): any[] {
    return array.filter((item) => item)
}
console.log(compact([0, 1, false, 2, '', 3])); // [1, 2, 3]
console.log(compact([0, 1, false, 2, '', 3, null])); // [1, 2, 3]
console.log(compact([0, 1, false, 2, '', 3, undefined])); // [1, 2, 3] 

