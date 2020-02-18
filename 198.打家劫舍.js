/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let last = 0, now = 0
    for (let i = 0; i < nums.length; i++) {
        let temp = last;
        last = now
        now = Math.max(temp + nums[i], now)
    }
    return now
};
// @lc code=end

