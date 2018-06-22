/**
 * Basic tests for geographic info (states and countries)
 */

import * as _ from "lodash"
import {getStateById, stateMapping} from "../geography";



describe('get states info', function () {

   test('get WA by abbreviation', function() {
      let foundstate = getStateById(48)
      expect(foundstate).toHaveProperty('abbrev', 'WA')

   })

})



