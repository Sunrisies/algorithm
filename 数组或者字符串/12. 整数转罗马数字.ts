/**
 * 罗马数字是通过添加从最高到最低的小数位值的转换而形成的。将小数位值转换为罗马数字有以下规则：

    如果该值不是以 4 或 9 开头，请选择可以从输入中减去的最大值的符号，将该符号附加到结果，减去其值，然后将其余部分转换为罗马数字。
    如果该值以 4 或 9 开头，使用 减法形式，表示从以下符号中减去一个符号，例如 4 是 5 (V) 减 1 (I): IV ，9 是 10 (X) 减 1 (I)：IX。仅使用以下减法形式：4 (IV)，9 (IX)，40 (XL)，90 (XC)，400 (CD) 和 900 (CM)。
    只有 10 的次方（I, X, C, M）最多可以连续附加 3 次以代表 10 的倍数。你不能多次附加 5 (V)，50 (L) 或 500 (D)。如果需要将符号附加4次，请使用 减法形式。
    给定一个整数，将其转换为罗马数字。
    示例 1：
    输入：num = 3749
    输出： "MMMDCCXLIX"
    解释：
    3000 = MMM 由于 1000 (M) + 1000 (M) + 1000 (M)
    700 = DCC 由于 500 (D) + 100 (C) + 100 (C)
    40 = XL 由于 50 (L) 减 10 (X)
    9 = IX 由于 10 (X) 减 1 (I)
    注意：49 不是 50 (L) 减 1 (I) 因为转换是基于小数位

    示例 2：
    输入：num = 58
    输出："LVIII"
    解释：
    50 = L
    8 = VIII
    示例 3：
    输入：num = 1994
    输出："MCMXCIV"
    解释：
    1000 = M
    900 = CM
    90 = XC
    4 = IV
 */
// 贪心算法
// 从最大的罗马数字开始，尽可能多地减去其对应的值，并将符号添加到结果中。

// 例如，对于 3749：

// 先减去 1000 三次 → "MMM"

// 然后 500 → "D", 100 两次 → "CC"

// 然后 40 → "XL", 9 → "IX"
// 时间复杂度：O(1)（最多循环 13 次）
// 空间复杂度：O(1)（固定大小的数组
function intToRoman(num: number): string {
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const sym = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let res = "";
    for (let i = 0; i < val.length; i++) {
        while (num >= val[i]) {
            res += sym[i];
            num -= val[i];
        }
    }
    return res;

};
console.log(intToRoman(3749)); // "MMMDCCXLIX"
console.log(intToRoman(58)); // "LVIII"
// console.log(intToRoman(1994)); // "MCMXCIV"
// 递归分解
// 递归地减去最大的罗马数字值，直到 num = 0。

// 例如：

// 3749 → 1000 → "M" + intToRoman(2749)

// 2749 → 1000 → "M" + intToRoman(1749)

// 直到 num < 1000 时处理更小的单位。
// 时间复杂度：O(log num)（递归深度）
// 空间复杂度：O(log num)（递归栈）
function intToRoman2(num: number): string {
    if (num >= 1000) return "M" + intToRoman2(num - 1000);
    if (num >= 900) return "CM" + intToRoman2(num - 900);
    if (num >= 500) return "D" + intToRoman2(num - 500);
    if (num >= 400) return "CD" + intToRoman2(num - 400);
    if (num >= 100) return "C" + intToRoman2(num - 100);
    if (num >= 90) return "XC" + intToRoman2(num - 90);
    if (num >= 50) return "L" + intToRoman2(num - 50);
    if (num >= 40) return "XL" + intToRoman2(num - 40);
    if (num >= 10) return "X" + intToRoman2(num - 10);
    if (num >= 9) return "IX" + intToRoman2(num - 9);
    if (num >= 5) return "V" + intToRoman2(num - 5);
    if (num >= 4) return "IV" + intToRoman2(num - 4);
    if (num >= 1) return "I" + intToRoman2(num - 1);
    return "";
}