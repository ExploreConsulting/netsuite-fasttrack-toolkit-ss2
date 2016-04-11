/**
 * Created by stalbert on 4/11/16.
 */

   import "reflect-metadata"


abstract class MultiSelect {}
abstract class Select {}
abstract class DateTime {}
abstract class FreeFormText {}

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

   @check
   e: Select = undefined

   @check
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
