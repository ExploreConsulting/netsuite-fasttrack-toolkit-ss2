[![Gitter](https://badges.gitter.im/ExploreConsulting/netsuite-fasttrack-toolkit-ss2.svg)](https://gitter.im/ExploreConsulting/netsuite-fasttrack-toolkit-ss2?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

NFT (NetSuite Fasttrack Toolkit) for SuiteScript 2.0
===============================================
This is a small but powerful framework for writing SuitScript that scales. A primary goal is to 
enable authoring scripts that easy to write and easy to maintain.

_Includes_
* nsdal (**n**etsuite **d**ata **a**ccess **l**ayer) _ActiveRecord_-like approach with strongly 
predefined strong types for many NetSuite record types. 
* lodash
* momentjs
* advanced logging

# Getting Started (Typescript)
Install this package as a dependency and the SS2 typings from @hitc 

    npm install netsuite-fasttrack-toolkit-ss2 
    npm install @hitc/netsuite-types --save-dev 
    
**Also see the intro/guide [here](https://docs.google.com/document/d/1n0dpVByRMy3T6O1hf7S5z0383xVSNYCzQMgZ3U0arl0)**


## Deploy core library to NS
Use the NetSuite file cabinet _advanced add_ button to upload the `node_modules/netsuite-fasttrack-toolkit-ss2/dist/NFT-SS2-#.#.#.zip` 
file to the same folder in which you place your SuiteScripts. It will extract to a subfolder named NFT-SS2-#.#.#.

If you typically just put your SuiteScripts under the `/SuiteScripts/` folder in the NS file cabinet then simply 
extract the zip there. 

After install you should get a folder link at your project root named NFT-SS2-#.#.#
This creates a folder structure mirroring what you have in NetSuite so you can use relative paths when you 
`import` from the library.


Reference the NFT modules using `@NAmdConfig` directive in your script. Here is a complete Suitelet example (TypeScript)
See the `amdconfig.json` file in this repository for an example

### Example

```typescript


/**
 * Test file for SuiteScript 2.0
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 * @NAmdConfig ./amdconfig.json
 */

import * as LogManager from 'NFT/EC_Logger'
import * as customer from "NFT/DataAccess/CustomerBase"
import * as nsdal from "NFT/DataAccess/EC_nsdal"
import * as moment from "NFT/moment"
import * as _ from "NFT/lodash"

// each script should request the DefaultLogger
var log = LogManager.DefaultLogger

/**
 * define a customer class for our NetSuite account including custom fields. Standard fields come from customer.Base 
 * so we don't have to repeat them here. This Customer class could be in a separate file (e.g Customer.ts) and 
 * reused across all scripts via `import {Customer} from "./Customer"`
 */
class Customer extends customer.Base {
   @nsdal.FieldType.multiselect
   custentity_multiselect:number[]

   @nsdal.FieldType.datetime
   custentity_shawn_date : moment.Moment
}


export = {

   onRequest: (req, resp) => {

      // turn on debug logging for just the nsdal logger - each module can have it's own debugger
      nsdal.log.setLevel(LogManager.logLevel.debug)

      // load customer internal id 1542
      var c = new Customer(1542)

      // strongly typed field access
      c.companyname = 'a new company name'
      c.custentity_multiselect = [1, 2]
      c.custentity_shawn_date = moment()

      // persist our changes
      c.save();

      // just log a couple properties from our customer object
      log.debug('customer', _.pick(c,['custentity_shawn_date', 'companyname']))
   }
}

```

see also `example.ts` in this package.

## Search Helpers

```typescript

import {nsSearchResult2obj} from "NFT/search"
import * as search from "N/search"

const s = search.load({ id: 'somesearchid' } ).run().getRange({start:0, end:1000})
const objects = _.map(s,nsSearchResult2obj)

```

## Special 'apply' sublist support

See `CustomerRefundBase.findApplyLine()` and `Transaction.ts` for help.


## Logging
NFT provides an advanced logging mechanism based on [Aurelia's](http://aurelia.io) logger. 

It means you can have multiple loggers and control the logging verbosity of each.

### AutoLogging
Automatically log entry and exit of methods with rich options by adding a line like this to the end of your script:

```javascript
LogManager.autoLogMethodEntryExit({target:EC,method:/\w/}, { withProfiling:true })
```
The above line will automatically log all methods defined on the _EC_ object

Other configuration options include automatic logging of execution time, governance usage, and other goodies.

See the jsdoc help for `autologMethodEntryExit()`

# Contributing
Please do.

# TypeScript
This is written with TS and is recommended. However, it can be used by javascript clients as well.

Configure tsconfig to include `paths` for NetSuite modules and NFT modules:

        "paths": {
          "N/*": [
            "node_modules/@hitc/netsuite-types/N/*"
          ],
          "NFT/*": [
            "node_modules/netsuite-fasttrack-toolkit-ss2/declarations/*"
          ]
        }




## NetSuite Module Declarations
* Typescript definitions (_N/*.d.ts_ files) are defined via the 
[@hitc/netsuite-types](https://www.npmjs.com/package/@hitc/netsuite-types) project


# Tests
The `test/` folder is configured to use `ts-jest` to compile the sources, and jest caches the output. This means the 
sources in the project are not changed. This is important because the tests use the modules compiled to run in Nodejs 
(commonjs compatible). The production build _must_ be AMD to function in NetSuite.

# Build and Publish
The production build is AMD. Ensure that compiled files (e.g. `DataAccess/JournalEntryBase.js`) are in AMD format.
    
    gulp
    gulp declarations
    npm publish
