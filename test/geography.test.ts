/**
 * Basic tests for geographic info (states and countries)
 */

import { getCountryById, getStateById, countryMapping, getCountryByUniqueKey } from '../geography'

describe('get states info', function () {

   test('get WA by id', function() {
      let foundstate = getStateById(48)
      expect(foundstate).toHaveProperty('shortname', 'WA')

   })

   test('get unknown state by id', function() {
      let foundState = getStateById('')
      expect(foundState).toBeUndefined()


   })

})

describe('get country info', function () {

   test('get USA by id', function() {
      let foundCountry = getCountryById('US')
      expect(foundCountry).toHaveProperty('name', 'United States')

   })

   test('get unknown country by id', function() {
      let foundCountry = getCountryById('no such country code exists')
      expect(foundCountry).toBeUndefined()
   })

   test('get country by uniquekey', function() {
      let foundCountry = getCountryByUniqueKey(3)
      expect(foundCountry).toHaveProperty('id', 'AF')
   })

   test('get unknown country by uniquekey', function() {
      let foundCountry = getCountryByUniqueKey(-1)
      expect(foundCountry).toBeUndefined()
   })

})





