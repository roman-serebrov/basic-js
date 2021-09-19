import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
     chains: [],
  
   getLength() {
     return this.chains.length
   },
   addLink(value) {
     let el = ''
     if(typeof value === 'number') {
       el = String(value)
     }
     if(value === undefined) {
       el = '()'
       this.chains.push(el)
     } else {
       el = `( ${value} )`
     this.chains.push(el)
     }
     return this
   },   
   removeLink(position) {
    let el = position - 1
     if(!this.chains[el]) {
       this.chains = []
       throw new Error('You cant remove incorrect link!')
     } 
     this.chains.splice(el, 1)
      return this
   },
   reverseChain() {
    this.chains.reverse()
   return this
   },
   finishChain() {
     const res = this.chains
     this.chains = []
     return res.join('~~')
   }
 };
