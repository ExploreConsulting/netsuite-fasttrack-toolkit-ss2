/**
 * Copyright Explore Consulting, LLC
 *
 * NSDAL is NetSuite Data Access Layer and provides an improved interface to netsuite records.
 * @NApiVersion 2.x
 */


import {getLogger,Logger} from '../EC_Logger'

// these are exported for convenience, so an end user can `import * as nsdal from EC_nsdal` and have all the fieldtypes
// decorators for both body fields and sublist fields on _nsdal_
export * from "NFT/DataAccess/Sublist"
export * from "NFT/DataAccess/Record"

/**
 * the nsdal specific logger.
 * @type {Logger}
 */
export var log : Logger = getLogger('nsdal')

