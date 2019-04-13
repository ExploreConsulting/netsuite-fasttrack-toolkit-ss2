/**
 * Basic tests for geographic info (states and countries)
 */

import { getCountryById, getStateById } from '../geography'

describe('get states info', function () {

   test('get WA by id', function() {
      let foundstate = getStateById(48)
      expect(foundstate).toHaveProperty('abbrev', 'WA')

   })

   test('get unknown state by id', function() {
      let foundState = getCountryById(-22)
      expect(foundState).toBeUndefined()

   })

})

describe('get country info', function () {

   test('get USA by id', function() {
      let foundCountry = getCountryById(230)
      expect(foundCountry).toHaveProperty('abbrev', 'US')

   })

   test('get unknown country by id', function() {
      let foundCountry = getCountryById(-22)
      expect(foundCountry).toBeUndefined()

   })

})





