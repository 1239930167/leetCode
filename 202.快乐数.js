/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function getNext(num) {
        let str = num.toString()
        let target = 0
        for (let i = 0; i < str.length; i++) {
            target += Math.pow(str.charAt(i), 2)
        }
        return target
    }
    let mySet = new Set()
    mySet.add(n)
    while(1) {
        n = getNext(n)
        if (n === 1) return true
        if (mySet.has(n)) return false
        else mySet.add(n)
    }
};
// @lc code=end

