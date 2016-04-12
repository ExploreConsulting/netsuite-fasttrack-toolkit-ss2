/**
 * Created by stalbert on 4/12/16.
 */

import {nsdal,Customer as CustomerBase} from './EC_nsdal'


namespace EC {


   class Customer extends CustomerBase
   {

      @nsdal.freeformtext
      companyname:string = undefined
   }

   
   
}
