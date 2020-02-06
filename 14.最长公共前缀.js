/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let pre = "",
    fs = strs[0];
  for (let key in fs) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][key] != fs[key]) {
        return pre;
      }
    }
    pre += fs[key];
  }
  return pre;
};
// @lc code=end
