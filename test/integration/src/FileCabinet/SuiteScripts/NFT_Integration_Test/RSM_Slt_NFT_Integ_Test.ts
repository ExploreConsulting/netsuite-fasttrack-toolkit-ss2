/**
 * Company           RSM US LLP
 * Description       A script for smoke-testing NFT. These tests are not meant to be exhaustive, but rather to ensure that the basic functionality of NFT is working.
 * Developed against some account specific data - therefore you will likely need to change some record internal id
 * references to run this on your account.
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 **/

import { EntryPoints } from 'N/types'
import * as LogManager from './NFT-SS2-7.3.0/EC_Logger'
import { ItemFulfillmentBase } from './NFT-SS2-7.3.0/DataAccess/ItemFulfillmentBase'
import { FieldType } from './NFT-SS2-7.3.0/DataAccess/Record'
import { AddressBase } from './NFT-SS2-7.3.0/DataAccess/AddressBase'
import { Customer } from './RecordTypes/Customer'
import { LazySearch, nsSearchResult2obj } from './NFT-SS2-7.3.0/search'
import { LazyQuery, nsQueryResult2obj } from './NFT-SS2-7.3.0/query'
import * as search from 'N/search'
import { Seq } from './NFT-SS2-7.3.0/immutable'
import { VendorPayment } from './RecordTypes/VendorPayment'
import * as _ from './NFT-SS2-7.3.0/lodash'
import { InventoryItemBase } from './NFT-SS2-7.3.0/DataAccess/InventoryItemBase'
import { CreditCardChargeBase } from './NFT-SS2-7.3.0/DataAccess/CreditCardChargeBase'
import { CreditCardRefundBase } from './NFT-SS2-7.3.0/DataAccess/CreditCardRefundBase'
import { TimeBase } from './NFT-SS2-7.3.0/DataAccess/TimeBase'

const log = LogManager.DefaultLogger

class ItemFulfillment extends ItemFulfillmentBase {
  @FieldType.subrecord(AddressBase)
  shippingaddress: AddressBase
}

namespace X {
  /**
   * main script entrypoint
   */
  export function onRequest (ctx: EntryPoints.Suitelet.onRequestContext) {

    LogManager.getLogger(LazySearch.LOGNAME).setLevel(LogManager.logLevel.debug)

    switch (ctx.request.method) {
      case 'GET':
        ctx.response.writeLine({ output: `<H1>NFT Integration Tests</H1>` })
        for (const test in testMap) {
          ctx.response.writeLine({ output: `<H2>${test}</H2>` })
          ctx.response.write(`<pre>${JSON.stringify(testMap[test](), null, 2)}</pre>`)
        }
        break
      case 'POST':
        log.debug('POST request parms', ctx.request.parameters)
        break
    }
  }

  /**
   * ensure we can load an assembly item  now that it uses the shared `Item` base class
   */
  export function loadAssemblyItem () {
    return new InventoryItemBase(111)
  }

  /**
   * Tests that NFT can load a specific transaction
   */
  export function loadTransaction () {
    return new ItemFulfillment(1739)
  }

  export function loadEntity () {
    return new Customer(283)
  }

  // These record types are not included in all accounts, uncomment if you'd like to try them and have valid
  // internal ids for each record type referenced below.
  //
  // export function loadChargeBaseTransaction() {
  //    return new ChargeBase(7955)
  // }
  //
  // export function loadChargeRuleBaseTransaction() {
  //    return new ChargeRuleBase(7955)
  // }

  // export function loadCreditCardChargeBaseTransaction() {
  //    return new CreditCardChargeBase(37928)
  // }
  //
  // export function loadCreditCardRefundBaseTransaction() {
  //    return new CreditCardRefundBase(37929)
  // }
  // //
  // export function loadTimeBaseTransaction() {
  //    return new TimeBase(2)
  // }

  export function doSearch () {
    return Seq(LazySearch.from(search.create({
      type: search.Type.CUSTOMER,
      filters: [
        ['companyname', search.Operator.STARTSWITH, 'e']
      ],
      columns: ['companyname', 'phone', 'firstname', 'lastname']
      // as any below because two physically separate declarations of N/search (one referenced by LazySearch.from() expected parameters,
      // the other being the argument value created by search.create() here in this script.
      // are viewed as incompatible by TS
    }), 2))
      .map(nsSearchResult2obj<{ foo: string }>())
      .toArray()
  }

  export function doQuery1 () {
    return Seq(LazyQuery.from({ query: `SELECT ID AS FOO FROM TRANSACTION WHERE ROWNUM < 10` })).map(nsQueryResult2obj<{
      foo: number
    }>).toArray()
  }

  export function doQuery2 () {
    return Seq(LazyQuery.from({
      query: `SELECT ID AS FOO FROM TRANSACTION WHERE recordType = ?`,
      params: ['invoice']
    }, 10)).take(25).map(nsQueryResult2obj).toArray()
  }

  export function doQuery3 () {
    return Seq(LazyQuery.from({ query: `SELECT ID AS FOO FROM TRANSACTION WHERE ROWNUM < 10` }, 750)).map(nsQueryResult2obj).toArray()
  }

  export function doQuery4 () {
    return Seq(LazyQuery.from({
      query: `SELECT ID AS FOO FROM TRANSACTION WHERE recordType = ? AND ROWNUM < 10`,
      params: ['invoice']
    }, 750)).map(nsQueryResult2obj).toArray()
  }

  export function doQuery5 () {
    return Seq(LazyQuery.from({
      query: `SELECT id, externalid FROM customer WHERE (id LIKE ?);`,
      params: ['26%']
    }, 750)).map(nsQueryResult2obj).toArray()
  }

  export function sublists () {
    const v = new VendorPayment(26896)

    v.apply.useDynamicModeAPI = false
    const applySublist = _.toPlainObject(v.apply)

    v.apply.useDynamicModeAPI = true
    // should be the same because the record was in standard mode all along
    const applySublist2 = _.toPlainObject(v.apply)

    const customerAddress = new Customer(283).addressbook

    return { standardModeResult: applySublist, standardModeResult2: applySublist2, customerAddress }

  }

  export function autoLogging () {

    log.info('autologging')
    // this should log an object for entry/exit
    X.foo({ x: 'hello' })

    // should log a primitive number for entry/exit
    X.bar(200)

    return 'see execution log for details'
  }

  export function basicLodash () {
    return [
      {
        msg: '_.filter() greater than 3', result: _.filter([2, 3, 4, 6], x => x > 3)
      },
      {
        msg: '_.map 1,2,3 add 1', result: _.map([1, 2, 3], x => x + 1)
      }]

  }

  export function foo (obj: { x: string }) {
    obj.x += 'world'
    return obj
  }

  export function bar (i: number) { return i + 5 }

  const testMap: { [label: string]: Function } = {
    'NSDAL load Transaction': X.loadTransaction,
    'NSDAL load Inventory Item': X.loadAssemblyItem,
    'NSDAL load Customer': X.loadEntity,
    'NSDAL sublists': X.sublists,
    'LazySearch': X.doSearch,
    'LazyQuery Basic': X.doQuery1,
    'LazyQuery Param': X.doQuery2,
    'LazyQuery Paged': X.doQuery3,
    'LazyQuery No page, Params': X.doQuery4,
    'LazyQuery specific': X.doQuery5,
    'AutoLogging': X.autoLogging,
    'BasicLodash': X.basicLodash,
    // 'loadChargeBaseTransaction': X.loadChargeBaseTransaction,
    // 'loadChargeRuleBaseTransaction': X.loadChargeRuleBaseTransaction,
    // 'loadCreditCardChargeBaseTransaction': X.loadCreditCardChargeBaseTransaction,
    // 'loadCreditCardRefundBaseTransaction': X.loadCreditCardRefundBaseTransaction,
    // 'loadTimeBaseTransaction': X.loadTimeBaseTransaction
  }
}

LogManager.autoLogMethodEntryExit({ target: X, method: /\w+/ }, {
  withGovernance: true,
  withProfiling: true
})

export = { onRequest: X.onRequest }
