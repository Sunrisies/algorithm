/**
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

    字符          数值
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
    例如， 罗马数字 2 写做 II ，即为两个并列的 1 。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

    通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

    I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
    X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
    C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
    给定一个罗马数字，将其转换成整数。

    示例 1:
    输入: s = "III"
    输出: 3

    示例 2:
    输入: s = "IV"
    输出: 4

    示例 3:
    输入: s = "IX"
    输出: 9

    示例 4:
    输入: s = "LVIII"
    输出: 58
    解释: L = 50, V= 5, III = 3.
    
    示例 5:
    输入: s = "MCMXCIV"
    输出: 1994
    解释: M = 1000, CM = 900, XC = 90, IV = 4.
 
 */


function romanToInt(s: string): number {
    /** 判断特殊罗马数有无 */
    const hasSpRoman: Function = (s: string, sp: string): boolean => SpRomanDict[sp] && s.indexOf(sp) > -1
    /** 常规罗马数字典 */
    const RomanDict: Record<string, number> = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 }
    /** 特殊罗马数字典 */
    const SpRomanDict: Record<string, number> = { CM: 900, CD: 400, XC: 90, XL: 40, IX: 9, IV: 4 }
    let result = 0;
    // 先找出特殊罗马字符
    for (const sp in SpRomanDict) {
        console.log(sp, SpRomanDict[sp], hasSpRoman(s, sp))
        if (hasSpRoman(s, sp)) {
            result += SpRomanDict[sp];
            s = s.replace(sp, "")
        }
    }

    // 普通数字
    if (s.length > 0) {
        for (const sp of s) {
            result += RomanDict[sp];
        }
    }
    return result
};
// console.log(romanToInt2("III")); // 3
// console.log(romanToInt3("IV")); // 4
// console.log(romanToInt("IX")); // 9
// console.log(romanToInt("LVIII")); // 58
console.log(romanToInt3("MCMXCIV")); // 1994
function romanToInt2(s: string): number {
    /** 罗马数字典 */
    const RomanDict: Record<string, number> = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 }

    let result = 0
    for (let i = 0; i < s.length; i++) {
        console.log(s[i], RomanDict[s[i]])
        const num = RomanDict[s[i]] // 当前位
        const next = s[i + 1] ? RomanDict[s[i + 1]] : 0 // 下一位 如果下一位比当前位大话就需要减去，如果是比当前小的话就需要加上
        num < next ? result -= num : result += num // 加减
    }

    return result
}

function romanToInt3(s: string): number {
    /** 罗马数字典 */
    const RomanDict: Record<string, number> = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 }
    let result = 0
    let max = 0
    for (let i = s.length - 1; i >= 0; i--) {
        const roman = RomanDict[s[i]]
        // 当前这个数比目前最大的数小的话就减去，如果大于这个数就添加，并替换成最大数
        if (roman < max) {
            result -= roman
        } else {
            result += roman
            max = roman
        }

    }
    return result
}
/**
 * 对象键用 in，值用 of；数组值用 of，索引用 entries
 */