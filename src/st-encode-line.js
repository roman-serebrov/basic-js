import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let count = 0
  let lastSymbol = str[0] 
  let ans = []
  for(let i in str) {
    if(str[i] !== lastSymbol) {
      ans.push(lastSymbol+count)
      count=0
      lastSymbol = str[i]
    }
    count++
  }
  ans.push(lastSymbol, count)
  return ans.join('')
}