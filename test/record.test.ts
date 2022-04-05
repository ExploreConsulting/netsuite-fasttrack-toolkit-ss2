import * as record from '../__mocks__/N/record'
import {FieldType, NetsuiteRecord} from "../DataAccess/Record"
import {Sublist, SublistLine, SublistFieldType} from "../DataAccess/Sublist"
import * as nsRecord from 'N/record'

describe('Record base tests', function () {

   test('getText() on field', () => {
      const fakeRec = record.create({type: 'fake'})
      record.getText.mockReturnValue('some text')
      record.getValue.mockReturnValue(123)

      // this was a bug - a field with any of the characters in 'Text' got ALL such characters trimmed
      // hence a field named 'foot' would be retrieved as 'foo' which was wrong.
      class A extends NetsuiteRecord {
         @FieldType.select
         foot:number

         @FieldType.select
         footText:string
      }

      const sut = new A(fakeRec)

      expect(sut.foot).toEqual(123)
      expect(sut.footText).toEqual('some text')

      expect(record.getText).toBeCalledWith({
         fieldId:'foot'
      })
      expect(record.getValue).toBeCalledTimes(1)

   })

   test('getField() success', () => {
      const fakeRec = record.create({type: 'fake'})
      record.getField.mockReturnValue({})

      // this was a bug - a field with any of the characters in 'Text' got ALL such characters trimmed
      // hence a field named 'foot' would be retrieved as 'foo' which was wrong.
      class A extends NetsuiteRecord {
         @FieldType.select
         foot:number

         @FieldType.select
         footText:string
      }

      const sut = new A(fakeRec)

      // when you start typing a string here, you should get intellisense on field names
      // in our class A, we should see 'foot' and 'footText' in intellisense completion
      sut.getField('foot')

      expect(record.getField).toBeCalledWith({
         fieldId:'foot'
      })
      expect(record.getField).toBeCalledTimes(1)

   })

   test('special *Sublist convention', function () {

      class FakeSublist extends SublistLine {
         @SublistFieldType.checkbox
         bar:boolean
      }

      class A extends NetsuiteRecord {
         @FieldType.select
         foot:number
         // in the event that a record body field has the same name as a sublist, you can append "Sublist"
         @FieldType.sublist(FakeSublist)
         footSublist:Sublist<FakeSublist>
      }
      const fakeRec = record.create({type: 'fake'})
      fakeRec.getLineCount.mockReturnValue(1)

      const sut = new A(fakeRec)

      expect(sut).toBeTruthy()

      // noinspection BadExpressionStatementJS
      sut.foot
      // noinspection BadExpressionStatementJS
      sut.footSublist[0].bar

      expect(record.getValue).toHaveBeenCalledTimes(1)
      expect(record.getSublistValue).toHaveBeenCalledWith({
         sublistId: 'foot',
         fieldId: 'bar',
         line: 0,
      })
   })

   /**
    * Visually inspect the IDE quick documentation panel for each of the `new A(...)` calls.
    * in this test.
    */
   test('constructors', () => {
      // a strongly typed NS record
      const fakeRec:nsRecord.Record  = record.create({type: 'fake'})

      // an NSDAL record type
      class A extends NetsuiteRecord {}

      // various ways to instantiate, should have no compile time errors
      // and refer to the jsdocs (e.g. CTRL+Q in webstorm) to see what construcor is being
      // selected by the type system
      new A(fakeRec)

      // pass a string, should select the 'load record' constructor
      const y = '456'
      new A(y)

      // pass a numeric id, should select the 'load record' constructor
      new A(123)

      // should select the 'create record' constructor
      new A(null)

      interface I { z?: string | number }
      const obj : I = {}
      new A(obj.z)

      // define variable where `foo` may be null or missing - simulating use case where external input
      // may have a value or not such as received JSON to an API
      const x:{foo?:string | null} = { foo: null}
      // should select the 'load record' constructor
      new A(x.foo)

      delete x.foo
      new A(x.foo)

   })
});
