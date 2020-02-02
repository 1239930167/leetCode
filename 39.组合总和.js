/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    var result = [];
    var temp = [];
    var sum = 0;
    candidates.sort(function (a, b) {
      return a - b;
    })
    combineFn(candidates, sum, 0, target, temp, result);
    return result;
  };
  
  function copy(array) {
    var result = [];
    for (var i = 0, len = array.length; i < len; i++) {
      result.push(array[i]);
    }
    return result;
  }
  
  function combineFn(candidates, sum, level, target, temp, result) {
    if (sum > target) {
      return;
    }
    if (sum == target) {
      result.push(copy(temp));
      return;
    }
    for (var i = level; i < candidates.length; i++) {
      sum += candidates[i];
      temp.push(candidates[i]);
      combineFn(candidates, sum, i, target, temp, result);
      temp.pop();
      sum -= candidates[i];
    }
  }
// @lc code=end

