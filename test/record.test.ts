import * as record from '../__mocks__/N/record'
import {FieldType, NetsuiteRecord} from "../DataAccess/Record"

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

         sut.foot
         sut.footText

         expect(record.getText).toBeCalledWith({
            fieldId:'foot'
         })
         expect(record.getValue).toBeCalledTimes(1)

      })
});
