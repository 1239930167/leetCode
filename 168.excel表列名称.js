/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let res = ''
    while (n > 0) {
        let a = parseInt((n - 1) % 26)
        n = parseInt((n - 1) / 26)
        res = String.fromCharCode(a + 65) + res
    }
    return res
};
// @lc code=end

