import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(Array.isArray(members)) {
  const nameDreamTeam = members.filter(el => typeof el === 'string').map(name => {
    name = name.trim()
    name = name.toUpperCase()
    return name.charAt(0)
  }).sort((a,b) => a > b ? 1 : -1).join('')
  return nameDreamTeam
  }
  return false
  
}
