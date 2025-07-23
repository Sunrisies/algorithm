/**
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

    单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

    示例 1：

    输入：s = "Hello World"
    输出：5
    解释：最后一个单词是“World”，长度为 5。
    示例 2：

    输入：s = "   fly me   to   the moon  "
    输出：4
    解释：最后一个单词是“moon”，长度为 4。
    示例 3：

    输入：s = "luffy is still joyboy"
    输出：6
    解释：最后一个单词是长度为 6 的“joyboy”。
 */
function lengthOfLastWord(s: string): number {
    return s.trim().split(" ").at(-1)?.length!;
};
function lengthOfLastWord1(s: string): number {
    // 1. 跳过尾部空格
    s = s.trim()
    let i = s.length - 1;
    // 2. 计算最后一个单词长度
    let len = 0;
    while (i >= 0 && s[i] !== ' ') {
        len++;
        i--;
    }
    return len
}
// console.log(lengthOfLastWord1("Hello World")); // 5
console.log(lengthOfLastWord1("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord1("luffy is still joyboy")); // 6
