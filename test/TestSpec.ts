import * as Inv from "../DataAccess/InvoiceBase"
import {Sublist} from "../DataAccess/Sublist";
class Invoice extends Inv.Base {
   
   item = new Sublist<Inv.ItemSublist>(Inv.ItemSublist,null,'item')
}


describe('invoice', function(){
   
   it('can serialize an invoice', () => {
         
      
      var x = new Invoice()
      
      
      })
   
})
