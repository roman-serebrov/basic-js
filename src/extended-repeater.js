import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  

    const _repeatTimes = options.repeatTimes ? options.repeatTimes : null
    const _separator = options.separator ? options.separator : null
     const _addition = options.addition ? options.addition : null
     const _additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : null
     const _additionSeparator = options.additionSeparator ? options.additionSeparator : null
  
    let resStr = ''
      
      const repeatTimes = () => {
        let resStr = ''
        if(_repeatTimes) {
              resStr = strModifide(_repeatTimes, str +  additionRepeatTimes(), separator())
         } else {
           resStr = strModifide(1, str +  additionRepeatTimes(), separator())
         }
        
        
        return resStr 
      }
      
      
      const separator = (separator = '+') => {
         if(_separator) {
           return _separator
         }
        return separator
      }
      
      const addition = () => {
         if(_addition) {
           return _addition
         }
      }
      
      const additionRepeatTimes = (repeat = 0) => {
        let resStr = ''
             if(_additionRepeatTimes) {
              resStr = strModifide(_additionRepeatTimes, addition() ? addition() : '', additionSeparator())
             } else {
               resStr = strModifide(1, addition() ? addition() : '', additionSeparator())
             }
        return resStr
      }
      
      const additionSeparator = (separator='|') => {
        if(!_addition) {
          return ''
        }
        if(_additionSeparator) {
          return _additionSeparator
        }
       return separator 
        
      }
      
      return repeatTimes()
  }
  
  function strModifide(count=1, str, separator) {
   
    let resStr = ''
    for(let i=1;i<=count;i++) {
      if(i<count) {
        resStr +=str+separator
      }else if(i===count) {
         resStr +=str
      }
    }
    return resStr
  }
  
