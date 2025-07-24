/**
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。

    示例 1：

    输入：haystack = "sadbutsad", needle = "sad"
    输出：0
    解释："sad" 在下标 0 和 6 处匹配。
    第一个匹配项的下标是 0 ，所以返回 0 。
    示例 2：

    输入：haystack = "leetcode", needle = "leeto"
    输出：-1
    解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
 */
function strStr(haystack: string, needle: string): number {
    const temp = RegExp(needle).exec(haystack);
    return temp ? temp!["index"] : -1;
};

// console.log(strStr2("qsadbutsad", "sad")); // 0
console.log(strStr2("leetcode", "leeto")); // -1

//Sunday算法
function strStr2(haystack: string, needle: string): number {
    if (needle.length === 0) return 0;
    const m = haystack.length, n = needle.length;
    let map: Map<string, number> = new Map(), idx = 0;
    // 初始化偏移表
    for (let i = 0; i < n; i++) {
        map.set(needle.charAt(i), i);
    }
    while (idx <= m - n) {
        let s = haystack.substring(idx, idx + n);
        if (s !== needle) {
            if (!map.has(haystack.charAt(idx + n))) {
                // 模式串中不存在该字符
                idx += n + 1;
            } else {
                // 模式串中存在该字符
                idx += n - map.get(haystack.charAt(idx + n))!;
            }
        } else {
            return idx;
        }
    }
    return -1;

}