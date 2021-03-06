/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 *
 * https://leetcode-cn.com/problems/longest-palindrome/description/
 *
 * algorithms
 * Easy (55.17%)
 * Likes:    265
 * Dislikes: 0
 * Total Accepted:    68.2K
 * Total Submissions: 123.2K
 * Testcase Example:  '"abccccdd"'
 *
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 * 
 * 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 * 
 * 注意:
 * 假设字符串的长度不会超过 1010。
 * 
 * 示例 1: 
 * 
 * 
 * 输入:
 * "abccccdd"
 * 
 * 输出:
 * 7
 * 
 * 解释:
 * 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let temp = new Set()
  let sum = 0
  s.split('').forEach(c => {
    if (temp.has(c)) { 
      temp.delete(c)
      sum += 2
    } else {
      temp.add(c)
    }
  })
  return sum + (temp.size > 0 ? 1 : 0) //本质是求成队的数有多少，只要成对的就打出来，有牌最中间还能加一张，无牌结束
};
// @lc code=end

