/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let maj = nums[0]
    let count = 0
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if (maj === nums[i]) {
            count++
        } else {
            count--
            if (count <= 0 && i < len - 1) {
                maj = nums[i + 1]
            }
        }
    }
    return maj
};
// @lc code=end

