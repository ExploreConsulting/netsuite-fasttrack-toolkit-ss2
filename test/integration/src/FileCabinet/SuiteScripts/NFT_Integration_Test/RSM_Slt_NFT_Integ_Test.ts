/**
 * Company           RSM US LLP
 * Description       A script for smoke-testing NFT.
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 * @NAmdConfig ./NFTAmdConfig.json
 **/

import { EntryPoints } from 'N/types'
import * as LogManager from 'NFT/EC_Logger'
import { ItemFulfillmentBase } from 'NFT/DataAccess/ItemFulfillmentBase'
import { FieldType } from 'NFT/DataAccess/Record'
import { AddressBase } from 'NFT/DataAccess/AddressBase'
import { Customer } from './RecordTypes/Customer'
import { LazySearch, nsSearchResult2obj } from 'NFT/search'
import * as search from 'N/search'
import { Seq } from 'NFT/immutable'
import { AssemblyItemBase } from 'NFT/DataAccess/AssemblyItemBase'
import { VendorPayment } from './RecordTypes/VendorPayment'
import * as _ from 'NFT/lodash'

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

    switch (ctx.request.method) {
      case 'GET':
        ctx.response.writeLine({ output: `<H1>NFT-SS2-7.2.0 Integration Tests</H1>` })
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
    return new AssemblyItemBase(950)
  }

  /**
   * Tests that NFT can load a specific transaction
   */
  export function loadTransaction() {
    return new ItemFulfillment(19)
  }

  export function loadEntity() {
    return new Customer(1049)
  }

  export function doSearch() {
    return Seq(LazySearch.from(search.create({
      type: search.Type.CUSTOMER,
      filters: [
        ['companyname', search.Operator.CONTAINS, 'Smith Inc']
      ],
      columns: ['companyname', 'phone', 'firstname', 'lastname']
       // as any below because two physically separate declarations of N/search (one referenced by LazySearch.from() expected parameters,
       // the other being the argument value created by search.create() here in this script.
       // are viewed as incompatible by TS
    })))
      .map(nsSearchResult2obj<{foo:string}>())
      .toArray()
  }

  export function sublists() {
    const v = new VendorPayment(1291)

    v.apply.useDynamicModeAPI = false
    const applySublist = _.toPlainObject(v.apply)

    v.apply.useDynamicModeAPI = true
    // should be the same becaue the record was in standard mode all along
    const applySublist2 = _.toPlainObject(v.apply)

    const customerAddress = new Customer(1049).addressbook

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
    'NSDAL load Assembly Item': X.loadAssemblyItem,
    'NSDAL load Customer': X.loadEntity,
    'NSDAL sublists': X.sublists,
    'LazySearch': X.doSearch,
    'AutoLogging': X.autoLogging,
    'BasicLodash': X.basicLodash
  }
}


LogManager.autoLogMethodEntryExit({ target: X, method: /\w+/ }, {
  withGovernance: true,
  withProfiling: true
})

export = { onRequest: X.onRequest }
