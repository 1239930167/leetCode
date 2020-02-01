/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let targetIndex = binarySearch(nums, target, 0, nums.length - 1);
  if (targetIndex === -1) return [-1, -1];
  let l = targetIndex,
    r = targetIndex;
  while (l > 0 && nums[l - 1] === target) {
    l--;
  }
  while (r < nums.length - 1 && nums[r + 1] === target) {
    r++;
  }
  return [l, r];
};
function binarySearch(arr, val, frontI, endI) {
  if (endI < frontI) return -1;
  let mid = frontI + parseInt((endI - frontI) / 2);
  if (val < arr[mid]) {
    return binarySearch(arr, val, frontI, mid - 1);
  } else if (val > arr[mid]) {
    return binarySearch(arr, val, mid + 1, endI);
  } else {
    return mid;
  }
}
// @lc code=end
