import * as record from '../__mocks__/N/record'
import {FieldType, NetsuiteRecord} from "../DataAccess/Record"
import {Sublist, SublistLine, SublistFieldType} from "../DataAccess/Sublist"

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

      test('special *Sublist convention', function () {

         class FakeSublist extends SublistLine {
            @SublistFieldType.checkbox
            bar:boolean
         }

         class A extends NetsuiteRecord {
            @FieldType.select
            foot:number

            @FieldType.sublist(FakeSublist)
            footSublist:Sublist<FakeSublist>
         }

         const sut = new A('123')
   
         expect(sut).toBeTruthy()
         
         sut.foot
         sut.footSublist[0].bar
   
         expect(record.getValue).toHaveBeenCalledTimes(1)
         expect(record.getSublistValue).toHaveBeenCalledWith({
            sublistId: 'foot',
            fieldId: 'bar',
            line: 0,
         })
      })
});
