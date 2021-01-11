/*
 * @lc app=leetcode id=752 lang=javascript
 *
 * [752] Open the Lock
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */

// BFS
function openLock(deadends, target) {
  const queue = []
  const visited = [...deadends]
  queue.push('0000')
  let count = 0
  while (queue.length !== 0) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const curr = queue.shift()
      if (visited.includes(curr)) continue
      if (curr === target) return count
      visited.push(curr)
      for (let j = 0; j < 4; j++) {
        const up = plusOne(curr, j)
        const down = minusOne(curr, j)
        if (!visited.includes(up)) queue.push(up)
        if (!visited.includes(down)) queue.push(down)
      }
    }
    count++
  }
  return -1
}

// Two-way BFS
function openLock(deadends, target) {
  let q1 = new Set()
  let q2 = new Set()
  const visited = new Set(deadends)
  q1.add('0000')
  q2.add(target)
  let count = 0
  while (q1.size !== 0 && q2.size !== 0) {
    if (q1.size > q2.size) swap(q1, q2)
    const temp = new Set()
    for (const curr of q1) {
      if (visited.has(curr)) continue
      if (q2.has(curr)) return count
      visited.add(curr)
      for (let j = 0; j < 4; j++) {
        const up = plusOne(curr, j)
        const down = minusOne(curr, j)
        if (!visited.has(up)) temp.add(up)
        if (!visited.has(down)) temp.add(down)
      }
    }
    count++
    q1 = q2
    q2 = temp
  }
  return -1

  function swap(a, b) {
    const temp = a
    a = b
    b = temp
  }
}

function plusOne(str, index) {
  const arr = str.split('')
  if (arr[index] === '9') arr[index] = '0'
  else arr[index] = +arr[index] + 1
  return arr.join('')
}

function minusOne(str, index) {
  const arr = str.split('')
  if (arr[index] === '0') arr[index] = '9'
  else arr[index] = +arr[index] - 1
  return arr.join('')
}

// @lc code=end
