/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。

    如果不存在公共前缀，返回空字符串 ""。

    示例 1：

    输入：strs = ["flower","flow","flight"]
    输出："fl"
    示例 2：

    输入：strs = ["dog","racecar","car"]
    输出：""
    解释：输入不存在公共前缀。

 */
function longestCommonPrefix(strs: string[]): string {
    strs = strs.sort();
    let a = strs[0], b = strs[strs.length - 1];
    let result = '';
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            result += a[i]
        }
        else break;
    }
    return result
};

console.log(longestCommonPrefix2(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix2(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix2(["cir", "car"])); // ""
function longestCommonPrefix2(strs: string[]): string {
    let minLen = strs.sort((a, b) => a.length - b.length).shift()!
    const getChar = (minStr: string): string => {
        if (strs.every(str => str.startsWith(minStr))) {
            return minStr
        } else {
            return getChar(minStr.slice(0, -1))
        }
    }
    return getChar(minLen)
}