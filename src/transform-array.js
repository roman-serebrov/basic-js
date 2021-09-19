import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
    if(!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!")
      }
      const comands = {
        '--double-next': (arr, index) => {
          let el = arr[index+1]
          arr.splice(index, 1)
          index+=1
          arr.insert(index, el)
          return arr.filter(item => item !== undefined)
        },
        '--double-prev': (arr, index) => {
          let el = arr[index-1]
          if(el === undefined) {
            arr.splice(index, 1)
            return arr.filter(item => item !== undefined)
          }
          arr.splice(index, 1)
          index-=1
          arr.insert(index, el)
          return arr.filter(item => item !== undefined)
        },
        '--discard-prev': (arr, index) => {
          if(arr[index - 1] === undefined) {
            arr.splice(index, 1)
            return arr.filter(item => item !== undefined)
          }
          arr.splice(index, 1)
          index -= 1
          arr.insert(index, undefined, 1)
          return arr.filter(item => item !== undefined)
        },
        '--discard-next': (arr, index) => {
           arr.splice(index, 1)
          arr.insert(index, undefined, 1)
          arr = arr.filter(item => item !== undefined)
          return arr
        }
      }
      let array = [...arr]
     
      let res = array
      for(let v in arr) {
        let index = Number(v)
        
        if(comands.hasOwnProperty(array[index])) {
          
          res = comands[array[index]](array, index)
        }
      }
      return res
  }
  Array.prototype.insert = function(index, element, del=0) {
    return this.splice(index, del, element)
  }
