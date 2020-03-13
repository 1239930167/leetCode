/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()
    for (const str of strs) {
        let key = str.split('').sort().join()
        if (!map.has(key)) {
            map.set(key,[str])
        } else {
            map.get(key).push(str)
        }
    }
    return [...map.values()]
};
// @lc code=end

