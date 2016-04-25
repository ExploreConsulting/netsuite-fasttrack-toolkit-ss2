/**
 * Copyright Explore Consulting, LLC
 *
 * NSDAL is NetSuite Data Access Layer and provides an improved interface to netsuite records.
 * @NApiVersion 2.x
 */


import * as LogManager from '../EC_Logger'


export * from "./Sublist"
export * from "./Record"

// export all the record types
//export * from "./Transaction"
 //export * from "./CreditMemoBase"
 export * from "./InvoiceBase"
 export * from "./CustomerBase"
 //export * from "./CustomerPaymentBase"


export var log = LogManager.getLogger('nsdal')

