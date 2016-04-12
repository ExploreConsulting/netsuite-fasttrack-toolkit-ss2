/**
 * Created by stalbert on 4/11/16.
 */

   import "reflect-metadata"
import {Record} from "./N/record";


abstract class MultiSelect {}
abstract class Select {}
abstract class DateTime {}
abstract class FreeFormText {}


export class CustomerBase {
  _recordType:string = "customer"


   @freeformtext
   companyname:string

   @checkbox
   isactive:boolean
}


class Customer extends  CustomerBase extends Record {
   @checkbox
   custrecord_foo:boolean

   myprop:string

}

var record:Customer = nsdal.loadObject<Customer>(123)

record.
      nsdal.loadObject('customer',id, ['sdfsdfsf'])
export class Foo {

   _a:String
   @check
   get a() : String { return this._a}

   @check
   get b(): number { return undefined}

   @check
   get c(): boolean {return undefined}

   @check
   d: MultiSelect = undefined

   @select
   e: Select = undefined

   @datetime
   f: DateTime = undefined
}

export class Bar extends Foo {
   @check
   get bar():FreeFormText { return undefined}
}

function check<T>(target:any, propertyKey:string, descriptor:TypedPropertyDescriptor<T>) {
   console.log('target', target)
   console.log('propertyKey', propertyKey)
   console.log('descriptor', descriptor)
   console.log('reflection design:type',Reflect.getMetadata('design:type',target, propertyKey))
}

function nsfield(fieldtype:string){

}

function freeformtext(target:any, propertyKey:string) {


}

function checkbox(target:any, propertyKey:string) {
   // 'checkbox'
   // create field type specific to checkbox (surfaces as a boolean)

}
