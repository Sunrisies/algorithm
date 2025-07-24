/**
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

    如果可以，返回 true ；否则返回 false 。

    magazine 中的每个字符只能在 ransomNote 中使用一次。
    
    示例 1：
    输入：ransomNote = "a", magazine = "b"
    输出：false

    示例 2：
    输入：ransomNote = "aa", magazine = "ab"
    输出：false

    示例 3：
    输入：ransomNote = "aa", magazine = "aab"
    输出：true
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
    const map1 = new Map<string, number>();

    for (const c of magazine) {
        map1.set(c, 1 + ((map1.get(c)) ?? 0));
    }
    for (const c of ransomNote) {
        map1.set(c, -1 + ((map1.get(c)) ?? 0));
        if (((map1.get(c)) ?? 0) < 0) return false;
    }
    return true;


};

// console.log(canConstruct("a", "b"))
// console.log(canConstruct("aa", "ab"))
console.log(canConstruct1("aa", "aab"))

function canConstruct1(ransomNote: string, magazine: string): boolean {
    const sortedRansom = ransomNote.split('').sort().join('');
    const sortedMagazine = magazine.split('').sort().join('');
    let i = 0;
    let j = 0;

    while (i < sortedRansom.length && j < sortedMagazine.length) {
        if (sortedRansom[i] === sortedMagazine[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }

    return i === sortedRansom.length;
}