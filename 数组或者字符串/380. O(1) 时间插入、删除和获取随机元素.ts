/**
 * 实现RandomizedSet 类：

    RandomizedSet() 初始化 RandomizedSet 对象
    bool insert(int val) 当元素 val 不存在时，向集合中插入该项，并返回 true ；否则，返回 false 。
    bool remove(int val) 当元素 val 存在时，从集合中移除该项，并返回 true ；否则，返回 false 。
    int getRandom() 随机返回现有集合中的一项（测试用例保证调用此方法时集合中至少存在一个元素）。每个元素应该有 相同的概率 被返回。
    你必须实现类的所有函数，并满足每个函数的 平均 时间复杂度为 O(1) 。

    示例：
    输入
    ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
    [[], [1], [2], [2], [], [1], [2], []]
    输出
    [null, true, false, true, 2, true, false, 2]

    解释
    RandomizedSet randomizedSet = new RandomizedSet();
    randomizedSet.insert(1); // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
    randomizedSet.remove(2); // 返回 false ，表示集合中不存在 2 。
    randomizedSet.insert(2); // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
    randomizedSet.getRandom(); // getRandom 应随机返回 1 或 2 。
    randomizedSet.remove(1); // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
    randomizedSet.insert(2); // 2 已在集合中，所以返回 false 。
    randomizedSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
 */
class RandomizedSet {
    private map: Map<number, number>
    constructor() {
        this.map = new Map()
    }

    insert(val: number): boolean {
        return this.map.get(val) !== undefined ? false : this.map.set(val, val) && true
    }

    remove(val: number): boolean {
        const ls = this.map.get(val)
        return this.map.get(val) === undefined ? false : this.map.delete(val) && true
    }

    getRandom(): number {
        const arr = Array.from(this.map.values())
        return arr.length > 0 ? arr[Math.floor(Math.random() * arr.length)] : -1
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// var obj = new RandomizedSet()
// var params_1 = obj.remove(0)
// var params_1 = obj.remove(0)

// var params_1 = obj.insert(0)
// var param_2 = obj.getRandom()
// console.log(param_2) // 0
// var params_3 = obj.remove(0)
// console.log(params_3, '=1==1')
// var params_4 = obj.insert(0)


var obj = new RandomizedSet()
var param_1 = obj.insert(1)
var param_2 = obj.remove(2)
var param_3 = obj.insert(2)
var param_4 = obj.getRandom()
var param_5 = obj.remove(1)
var param_6 = obj.insert(2)
var param_7 = obj.insert(3)

var param_8 = obj.insert(4)

var param_9 = obj.getRandom()
var param_10 = obj.getRandom()

var param_11 = obj.getRandom()

console.log(param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8, param_9, param_10, param_11) // true false true 1 true false 2
