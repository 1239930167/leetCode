/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let temp,
    l = matrix.length;
  for (let i = 0; i < parseInt(l / 2); i++) {
    for (let j = i; j < l - i - 1; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[l - j - 1][i];
      matrix[l - j - 1][i] = matrix[l - i - 1][l - j - 1];
      matrix[l - i - 1][l - j - 1] = matrix[j][l - i - 1];
      matrix[j][l - i - 1] = temp;
    }
  }
};
// @lc code=end
