/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let result = 0,
    sign = 1,
    mul = 1;
  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
    sign = -1;
  }
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  divisor2 = Math.abs(divisor);
  while (dividend >= divisor2) {
    if (dividend > divisor2 + divisor2) {
      divisor2 += divisor2;
      mul += mul;
    }
    dividend -= divisor2;
    result += mul;
  }
  while (dividend >= divisor) {
    dividend -= divisor;
    result += 1;
  }
  let powNum = Math.pow(2, 31);
  if (sign == 1 && result > powNum - 1) {
    return powNum - 1;
  } else if (sign == -1 && result < -powNum) {
    return -powNum;
  }
  if (sign == 1) {
    return result;
  } else {
    return -result;
  }
};
// @lc code=end
