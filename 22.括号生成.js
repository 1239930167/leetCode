/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var result = [];
  match(n, n, "", result);
  return result;
};

/**
 * @param {number} left 还剩下几个左括号
 * @param {number} right 还剩下几个右括号
 * @param {string} str 当前的括号字符串
 * @param {string[]} result 结果数组
 * @return {null}
 */
var match = function(left, right, str, result) {
  if (left > right) return; // 若剩下的左括号大于右括号，说明括号不匹配，返回
  if (left === 0 && right === 0) result.push(str);
  // 左右括号都使用完，将括号字符串加入结果数组中
  else {
    if (left > 0) match(left - 1, right, str + "(", result); // 左括号还有剩余，则加个左括号
    if (right > 0) match(left, right - 1, str + ")", result); // 右括号还有剩余，则加个右括号
  }
};

// @lc code=end
