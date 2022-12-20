/**
 * @param {string} s
 * @return {boolean}
 */
function validParentheses(s) {
  const map = new Map([['}', '{'], [')', '('], [']', '[']])

  const stack = []
  for (const c of s) {
    if (!map.has(c)) {
      stack.push(c)
    } else if (stack.length === 0 || map.get(c) !== stack.pop()) {
      return false
    }
  }

  return stack.length === 0
}

console.log(validParentheses('()'))
console.log(validParentheses("()[]{}"))
console.log(validParentheses("(])"))
