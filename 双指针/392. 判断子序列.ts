/**
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

    字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

    进阶：
    如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

    示例 1：

    输入：s = "abc", t = "ahbgdc"
    输出：true
    示例 2：

    输入：s = "axc", t = "ahbgdc"
    输出：false
 */
function isSubsequence(s: string, t: string): boolean {
    let temp = s.split("");
    for (let i = 0; i < t.length; i++) {
        if (temp[0] === t[i]) {
            temp.shift()
        }
    }
    return temp.length === 0;
};

// 贪心双指针算法
function isSubsequence1(s: string, t: string): boolean {
    let i = 0, j = 0;
    const m = s.length, n = t.length;
    while (i < m && j < n) {
        if (s[i] === t[j]) i++;
        j++;
    }

    return i === m
};

const isSubsequence2 = (s: string, t: string): boolean => {
    return new RegExp([...s].join('.*')).test(t);
}

// console.log(isSubsequence2("abc", "ahbgdc")); // true
console.log(isSubsequence2("axc", "ahbgdc")); // false