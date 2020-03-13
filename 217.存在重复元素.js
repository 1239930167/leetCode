/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (!nums.length) return false
    let tempArr = []
    let res = false
    for (let n of nums) {
        if (!tempArr[n]) tempArr[n] = 1
        else {
            res = true
            break
        }
    }
    return res
};
// @lc code=end

