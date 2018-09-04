// mock must be declared at top of file because ts-jest uses babel to auto-hoist and it was erroring all tests
jest.mock('EC_Logger')

import {governanceRemains} from "../governance"
import * as mockruntime from '../__mocks__/N/runtime'
import * as moment from "moment"


describe('governance', function () {

   const getRemainingUsage = mockruntime.getCurrentScript().getRemainingUsage

   test('time and units remain returns true', function () {

      getRemainingUsage.mockReturnValue(1000)
      const sut = governanceRemains()
      expect(sut()).toEqual(true)
   })

   test('drop below units threshold returns false', function () {

      getRemainingUsage.mockReturnValue(199)
      const sut = governanceRemains()

      expect(sut()).toEqual(false)
   })

   test('drop below time threshold returns false', function () {

      getRemainingUsage.mockReturnValue(1000)
      // simulate a start time 46 minutes in the past
      const inThePast = moment().subtract(46, 'minutes')

      const sut = governanceRemains(inThePast)

      expect(sut()).toEqual(false)

   })


   test('drop below time threshold and units returns false', function () {

      getRemainingUsage.mockReturnValue(100)
      // simulate a start time 46 minutes in the past
      const inThePast = moment().subtract(46, 'minutes')

      const sut = governanceRemains(inThePast)

      expect(sut()).toEqual(false)

   })


})


