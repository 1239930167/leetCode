/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let num = 0
    for (let i = 0, len = nums.length; i < len; i++) {
        num ^= nums[i] // 相同的数异或等于0，0 与另数异或等于另数本身
    }
    return num
};
// @lc code=end

