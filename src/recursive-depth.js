import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
    res = []

    calculateDepth(arr) {
      return this.countArray(arr, this.res) 
    }
    
    countArray(arr) {
    
        if(arr.filter(i => Array.isArray(i)).length !== 0){
            return 1 + this.countArray([].concat(...arr.filter(i => Array.isArray(i))));
         } else {
            return +1;
         }
    }
}
