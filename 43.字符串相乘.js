/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  let arr1 = num1.split("").reverse();
  let arr2 = num2.split("").reverse();
  let len1 = arr1.length;
  let len2 = arr2.length;
  let arr = [];
  for (i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (arr[i + j] == undefined) {
        arr[i + j] = arr1[i] * 1 * (arr2[j] * 1);
      } else {
        arr[i + j] += arr1[i] * 1 * (arr2[j] * 1);
      }
      if (arr[i + j] > 9) {
        if (arr[i + j + 1] == undefined) {
          arr[i + j + 1] = Math.floor(arr[i + j] / 10);
        } else {
          arr[i + j + 1] += Math.floor(arr[i + j] / 10);
        }
        arr[i + j] = arr[i + j] % 10;
      }
    }
  }
  return arr.reverse().join("");
};
// @lc code=end
