import {EstimateBase} from "../DataAccess/EstimateBase";
import {Sublist} from "../DataAccess/Sublist";


describe('extimate', () => {

   test('sublists exist', () =>{
   const sut = new EstimateBase()

   // should have an 'item' sublist and 'expense' sublist
   expect(sut.item).toBeInstanceOf(Sublist)

   })

   test('spot check fields', () => {
      const sut = new EstimateBase()

      expect(sut.balance).toBeUndefined()
   })
})
