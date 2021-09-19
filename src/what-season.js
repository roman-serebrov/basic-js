import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(data) {
    if(data === undefined || data === null) {
        return 'Unable to determine the time of year!'
      }
    const arr = Object.keys(data)
    if(arr.length > 0) {
        throw new Error('Invalid date!')
     }
     
    if(!data.getMonth) {
        throw new Error('Invalid date!')
      }
     let month = data.getMonth()
      
       let seasons = ''
    if(month === 11 ||(month >=0 && month <=1)) {
      seasons = 'winter'
    } else if(month >= 2 && month <= 4) {
      seasons = 'spring'
    } else if (month >=5 && month <= 7) {
      seasons = 'summer'
    } else {
      seasons = 'autumn'
    }
    return seasons
}
