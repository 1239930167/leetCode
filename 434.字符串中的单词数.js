/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 *
 * https://leetcode-cn.com/problems/number-of-segments-in-a-string/description/
 *
 * algorithms
 * Easy (35.90%)
 * Likes:    74
 * Dislikes: 0
 * Total Accepted:    28.9K
 * Total Submissions: 78.3K
 * Testcase Example:  '"Hello, my name is John"'
 *
 * 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。
 * 
 * 请注意，你可以假定字符串里不包括任何不可打印的字符。
 * 
 * 示例:
 * 
 * 输入: "Hello, my name is John"
 * 输出: 5
 * 解释: 这里的单词是指连续的不是空格的字符，所以 "Hello," 算作 1 个单词。
 * 
 * 
 */

import { truncate } from "underscore";

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  let count = 0
  let inSpace = true
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') {
      inSpace = true
    } else if (inSpace) {
      inSpace = false
      count++
    }
  }
  return count
};


// @lc code=end

