/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (46.48%)
 * Likes:    296
 * Dislikes: 0
 * Total Accepted:    114.5K
 * Total Submissions: 238.9K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 
 * 
 * 示例：
 * 
 * s = "leetcode"
 * 返回 0
 * 
 * s = "loveleetcode"
 * 返回 2
 * 
 * 
 * 
 * 
 * 提示：你可以假定该字符串只包含小写字母。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let r = new Set, i = -1
  while (++i < s.length) {
    if (r.has(s[i]) === false) {
      if (i == s.lastIndexOf(s[i])) return i
      else r.add(s[i])
    }
  }
  return -1
};
// @lc code=end

