/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
    const fn = (arr, temp) => {
        if (arr.length === 0) {
            res.push(temp)
        }
        for (let i = 0, len = arr.length; i < len; i++) {
            let newArr = arr.slice(0, i).concat(arr.slice(i + 1))
            fn(newArr, temp.concat(arr[i]))
        }
    }
    fn(nums, [])
    return res
};
// @lc code=end

