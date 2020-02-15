/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let len = s.length, sum = 0
    const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    for (let i = 0; i < len; i++) {
        sum = ((arr.indexOf(s[i]) + 1) * Math.pow(26, len - i - 1)) + sum
    }
    return sum
};
// @lc code=end

