/**
 * Company           RSM US LLP
 * Description       A script for smoke-testing NFT.
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 **/

import { EntryPoints } from 'N/types'
import * as LogManager from './NFT-SS2-7.2.1/EC_Logger'
import { ItemFulfillmentBase } from './NFT-SS2-7.2.1/DataAccess/ItemFulfillmentBase'
import { FieldType } from './NFT-SS2-7.2.1/DataAccess/Record'
import { AddressBase } from './NFT-SS2-7.2.1/DataAccess/AddressBase'
import { Customer } from './RecordTypes/Customer'
import { LazySearch, nsSearchResult2obj } from './NFT-SS2-7.2.1/search'
import { LazyQuery, nsSearchResult2obj as nsQueryResult2obj } from './NFT-SS2-7.2.1/query'
import * as search from 'N/search'
import { Seq } from './NFT-SS2-7.2.1/immutable'
import { AssemblyItemBase } from './NFT-SS2-7.2.1/DataAccess/AssemblyItemBase'
import { VendorPayment } from './RecordTypes/VendorPayment'
import * as _ from './NFT-SS2-7.2.1/lodash'
import {InventoryItemBase} from "./NFT-SS2-7.2.1/DataAccess/InventoryItemBase";

const log = LogManager.DefaultLogger

class ItemFulfillment extends ItemFulfillmentBase {
  @FieldType.subrecord(AddressBase)
  shippingaddress: AddressBase
}

namespace X {
  /**
   * main script entrypoint
   */
  export function onRequest(ctx: EntryPoints.Suitelet.onRequestContext) {

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
  export function loadAssemblyItem() {
    return new InventoryItemBase(111)
  }

  /**
   * Tests that NFT can load a specific transaction
   */
  export function loadTransaction() {
    return new ItemFulfillment(7955)
  }

  export function loadEntity() {
    return new Customer(283)
  }

  export function doSearch() {
     return Seq(LazySearch.from(search.create({
      type: search.Type.CUSTOMER,
      filters: [
        ['companyname', search.Operator.CONTAINS, 'e']
      ],
      columns: ['companyname', 'phone', 'firstname', 'lastname']
       // as any below because two physically separate declarations of N/search (one referenced by LazySearch.from() expected parameters,
       // the other being the argument value created by search.create() here in this script.
       // are viewed as incompatible by TS
    })))
      .map(nsSearchResult2obj<{foo:string}>())
      .toArray()
  }

  export function doQuery(){
     return Seq(LazyQuery.from(`SELECT ID FROM TRANSACTION WHERE recordType = 'invoice'`, null ,10)).map(nsQueryResult2obj)
  }

  export function sublists() {
    const v = new VendorPayment(7985)

    v.apply.useDynamicModeAPI = false
    const applySublist = _.toPlainObject(v.apply)

    v.apply.useDynamicModeAPI = true
    // should be the same becaue the record was in standard mode all along
    const applySublist2 = _.toPlainObject(v.apply)

    const customerAddress = new Customer(283).addressbook

    return { standardModeResult: applySublist, standardModeResult2: applySublist2, customerAddress }


  }

  export function autoLogging() {

    log.info('autologging')
    // this should log an object for entry/exit
    X.foo({ x: 'hello' })

    // should log a primitive number for entry/exit
    X.bar(200)

    return 'see execution log for details'
  }


  export function basicLodash() {
    return [
      {
        msg: '_.filter() greater than 3', result: _.filter([2, 3, 4, 6], x => x > 3)
      },
      {
        msg: '_.map 1,2,3 add 1', result: _.map([1, 2, 3], x => x + 1)
      }]
    
  }

  export function foo(obj: { x: string }) {
    obj.x += 'world'
    return obj
  }

  export function bar(i: number) { return i + 5 }

  const testMap: { [label: string]: Function } = {
    'NSDAL load Transaction': X.loadTransaction,
    'NSDAL load Inventory Item': X.loadAssemblyItem,
    'NSDAL load Customer': X.loadEntity,
    'NSDAL sublists': X.sublists,
    'LazySearch': X.doSearch,
    'LazyQuery': X.doQuery,
    'AutoLogging': X.autoLogging,
    'BasicLodash': X.basicLodash
  }
}


LogManager.autoLogMethodEntryExit({ target: X, method: /\w+/ }, {
  withGovernance: true,
  withProfiling: true
})

export = { onRequest: X.onRequest }
