/**
 * Basic tests on instantiating nsdal objects and manipulating them
 */

import * as mockrecord from '../__mocks__/N/record'
import * as _ from 'lodash'
import {TransactionBase} from '../DataAccess/Transaction'
import * as cust from '../DataAccess/CustomerBase'
import { SalesOrderBase } from '../DataAccess/SalesOrderBase'

describe('instantiation', function () {
   test('new record from scratch', function () {

      const c = new cust.CustomerBase()
      expect(c).toBeTruthy()
      expect(c).toHaveProperty('companyname')
      // should have called create (once)
      expect(mockrecord.create.mock.calls.length).toBe(1)
      // should not have called load
      expect(mockrecord.load.mock.calls.length).toBe(0)

     // console.log(_.toPlainObject(c))
   })

   test('with STRING internal id', function () {

      const c = new cust.CustomerBase('123')

      expect(c).toBeTruthy()
      // should call load once
      expect(mockrecord.load.mock.calls.length).toBe(1)

      console.log(_.toPlainObject(c))
   })

   test('with STRING with whitespace', function () {

      expect(() => new cust.CustomerBase(' 123 ')).not.toThrow()
   })

   test('with NUMERIC internal id', function () {

      const c = new cust.CustomerBase(123)

      expect(c).toBeTruthy()
      // should call load once
      expect(mockrecord.load.mock.calls.length).toBe(1)
      console.log(_.toPlainObject(c))
   })

   test('with record object', function () {

      const c = new cust.CustomerBase(mockrecord.create({type: 'foo'}))

      expect(c).toBeTruthy()
      // should not call load if we insantiate with an existing object
      expect(mockrecord.load.mock.calls.length).toBe(0)
   })

   test('invalid STRING internal id', function () {

      expect(() => new cust.CustomerBase('hello world'))
         .toThrowError()
   })

   test('TransactionBase from existing record', function () {
      const t = new TransactionBase(mockrecord.create({type: 'foo'}))
      expect(t).toBeTruthy()
      expect(t).toHaveProperty('otherrefnum')
      // should not call load since we already have a record
      expect(mockrecord.load.mock.calls.length).toBe(0)
      // console.log(_.toPlainObject(t))
      // console.log(t.nsrecord.type)
   })

   test('TransactionBase cannot instantiate from scratch', function () {
      const t = new TransactionBase()
      // there is no record type on TransactionBase, so won't work
      expect(t.hasOwnProperty('recordType')).toBeFalsy()

      // to contrast above, all _concrete_ record types do (must) have a recordType defined.
      // note that due to mocking N/record.Type enumeration the property will exist but be `undefined`
      expect(SalesOrderBase).toHaveProperty('recordType')
      expect(SalesOrderBase.hasOwnProperty('recordType')).toBeTruthy()
   })

   test('TransactionBase cannot instantiate from internalid', function () {
      const t = new TransactionBase(1234)
      // there is no record type on TransactionBase, so won't work
      expect(t.hasOwnProperty('recordType')).toBeFalsy()
   })

})

describe('body field access', function () {
   test('set a field', function () {

      const c = new cust.CustomerBase('123')

      expect(c).toBeTruthy()

      c.comments = 'random comments'

      expect(mockrecord.setValue).toHaveBeenCalledTimes(1)
      expect(mockrecord.getValue).not.toHaveBeenCalled()
   })

   test('read a field', function () {

      const c = new cust.CustomerBase('123')

      expect(c).toBeTruthy()

      if (c.comments) {
      }

      expect(mockrecord.getValue).toHaveBeenCalledTimes(1)
      expect(mockrecord.setValue).not.toHaveBeenCalled()
   })
})

describe('serialization', () => {
   test('serializes to json including inherited props', function () {
      const c = new cust.CustomerBase('123')
      mockrecord.getValue.mockImplementation((obj) => {
         const v = {
            companyname: 'acme',
            currency: undefined,
            accountnumber: '4',
            email: 'joeschmoe'
         }
         return v[obj.fieldId]
      })
      console.log('customerbase', c)
      const serializedjson = JSON.stringify(c)

      console.debug(serializedjson)
      expect(serializedjson).toContain('companyname')
      expect(serializedjson).toContain('accountnumber')
      expect(serializedjson).toContain('email')
      // id should always be there.
      expect(serializedjson).toContain('id')
      // JSON.stringify does not serialize undefined fields
      expect(serializedjson).not.toContain('externalid')
   })

})



