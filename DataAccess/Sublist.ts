/**
 * Represents a strongly typed sublist which is 'arraylike' in so far as lodash is concerned
 *
 */
import * as record from 'N/record'

import * as LogManager from '../EC_Logger'

export var log = LogManager.getLogger('nsdal')


/**
 * creates a sublist whose lines are of type T
 */
export class Sublist<T extends SublistLine> {
   [i:number]:T
   get length() {
      return this.rec.getLineCount({sublistId: this.sublistId})
   }

   addLine(ignoreRecalc = true):T {
      log.debug('inserting line', `sublist: ${this.sublistId} insert at line:${this.length}`)
      this.rec.insertLine({
         sublistId: this.sublistId,
         line: this.length,
         ignoreRecalc: ignoreRecalc
      })
      log.debug('line count after adding', this.length)
      return this[this.length]
   }

   /**
    * commits the currently selected line on this sublist. When adding new lines you don't need to call this method
    */
   commitLine() {
      log.debug('committing line',`sublist: ${this.sublistId}` )
      this.rec.commitLine({ sublistId:this.sublistId })
   }
   
   selectLine(line:number) {
      log.debug('selecting line', line)
      this.rec.selectLine({sublistId: this.sublistId, line: line})
   }
   
   constructor(private rec:record.Record, private sublistId:string) {

      // create properties for all keys in our target type T
      for (let i = 0; i < this.length; i++ ){
         this[i] = new
      }

   }
}


export class SublistLine {



   constructor(private linenum:number){}


}


