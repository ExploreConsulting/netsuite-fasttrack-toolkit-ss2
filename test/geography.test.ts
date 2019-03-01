/**
 * Basic tests for geographic info (states and countries)
 */

import { getCountryById, getStateById } from '../geography'

describe('get states info', function () {

   test('get WA by id', function() {
      let foundstate = getStateById(48)
      expect(foundstate).toHaveProperty('abbrev', 'WA')

   })

})

describe('get country info', function () {

   test('get USA by id', function() {
      let foundstate = getCountryById(230)
      expect(foundstate).toHaveProperty('abbrev', 'US')

   })

})





