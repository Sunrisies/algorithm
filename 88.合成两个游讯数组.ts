const sort = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr.concat()
    const pivot = arr[Math.floor(arr.length / 2)]
    const left: number[] = []
    const right: number[] = []
    const mid: number[] = []
    for (let i = 0; i < arr.length; i++) {
        const v = arr[i]
        if (v < pivot) {
            left.push(v)
        } else if (v > pivot) {
            right.push(v)
        } else if (v === pivot) {
            mid.push(v)
        }
    }
    return [...sort(left), ...mid, ...sort(right)]

}
const merge = (nums1: number[], m: number, nums2: number[], n: number) => {
    let merged: number[] = []
    nums1.forEach((num, index) => {
        if (index < m) {
            merged.push(num)
        }
    })
    nums2.forEach((num, index) => {
        if (index < n) {
            merged.push(num)
        }
    })
    merged = sort(merged)
    return merged
}
let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
const result = merge(nums1, m, nums2, n);
console.log(result);
