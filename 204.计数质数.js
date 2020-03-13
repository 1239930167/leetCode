/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let arr = [], count = 0
  for (let i = 0; i < n + 1; i++) {
      arr[i] = true
  }
  for (let i = 2; i < n; i++) {
      if (arr[i]) {
          for (let j = i + i; j < n; j = j + i) {
              arr[j] = false
          }
          count++
      }
  }
  return count
};
// @lc code=end
