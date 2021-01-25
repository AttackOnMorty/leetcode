/*
 * @lc app=leetcode id=986 lang=javascript
 *
 * [986] Interval List Intersections
 */

// @lc code=start
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */

function intervalIntersection(firstList, secondList) {
  const res = []
  let i = 0
  let j = 0
  while (i < firstList.length && j < secondList.length) {
    let [aLeft, aRight] = firstList[i]
    let [bLeft, bRight] = secondList[j]
    if (bLeft <= aRight && aLeft <= bRight) {
      res.push([Math.max(aLeft, bLeft), Math.min(aRight, bRight)])
    }
    if (aRight < bRight) i++
    else j++
  }
  return res
}

// @lc code=end
