import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const arr = []
  let tmp = null
  for(let i = 0;i<String(n).length;i++) {
    let arrs = []
    tmp = replaceCharAt(String(n), i)
   arr.push(Number(tmp.join('')))
  }
  
 function replaceCharAt (str, i) {
   var tmp = str.split(''); 
    tmp.splice(i - 1 , 1);
    return tmp;
 }
  
  return Math.max(...arr)
}
