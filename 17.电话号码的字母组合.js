/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  digits += "";
  var arr = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  }; //先设一个数组
  var item = [];
  for (var i = 0; i < digits.length; i++) {
    var num = digits[i];
    if (item == "") item = arr[num];
    else {
      var list = [];
      for (j = 0; j < item.length; j++) {
        for (k = 0; k < arr[num].length; k++) {
          list.push(item[j] + arr[num][k]);
        }
      }
      item = list;
    }
  }
  return item;
};
// @lc code=end
