[![Gitter](https://badges.gitter.im/ExploreConsulting/netsuite-fasttrack-toolkit-ss2.svg)](https://gitter.im/ExploreConsulting/netsuite-fasttrack-toolkit-ss2?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

NFT (NetSuite Fasttrack Toolkit) for SuiteScript 2.0
===============================================
This is a small but powerful framework for writing SuitScript that scales. The goal is to 
enable authoring scripts that easy to write and easy to maintain.

_Includes_
* nsdal (**n**etsuite **d**ata **a**ccess **l**ayer)
* lodash
* momentjs
* logging

# Installation
Install this package as a dependency and global typings for lodash. 

    npm install netsuite-fasttrack-toolkit-ss2 --save
    npm install @types/lodash --save-dev

The need to install `@types/lodash` here is to avoid duplicate symbol errors.

**For more, check out the intro/guide [here](https://docs.google.com/document/d/1n0dpVByRMy3T6O1hf7S5z0383xVSNYCzQMgZ3U0arl0)**


## Deploy core library to NS
Use the NetSuite file cabinet _advanced add_ button to upload the `node_modules/netsuite-fasttracktoolkit-ss2/dist/NFT-SS2-#.#.#.zip` 
file to the same folder in which you place your SuiteScripts. It will extract to a subfolder named NFT-SS2-#.#.#.

If you typically just put your SuiteScripts under the `/SuiteScripts/` folder in the NS file cabinet then simply 
extract the zip there. 

## Getting Started
After install you should get a folder link at your project root named NFT-SS2-#.#.#
This creates a folder structure mirroring what you have in NetSuite so you can use relative paths when you 
`import`.


__NOTE: NetSuite Limitation__
NetSuite SuiteScript 2.0 appears to have a defect where you can't _create_ a complete sample like
 shown below with complex custom libraries.  To get around this create your script as an empty shell
 first - then upload the full txt to the file cabinet.

 For example, first upload something like this as a 'skeleton' Suitelet:

 ```javascript
 /**
  * Test file for SuiteScript 2.0
  * @NApiVersion 2.x
  * @NScriptType Suitelet
  */
  define([], function () {
      return {
          onRequest: function (req, resp) {
          }
      };
  });

````
.. then _after_ you create the script record you can upload the full example (replacing the file in the file
cabinet)


Reference the NFT modules using relative path names. Here is a complete Suitelet example (TypeScript)

### Example.ts

```typescript
/**
 * Test file for SuiteScript 2.0
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import * as LogManager from './NFT-SS2-0.5.3/EC_Logger'
import * as customer from "./NFT-SS2-0.5.3/DataAccess/CustomerBase"
import * as nsdal from "./NFT-SS2-0.5.3/DataAccess/EC_nsdal"
import * as moment from "./NFT-SS2-0.5.3/moment"
import * as _ from "./NFT-SS2-0.5.3/lodash"

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

## NetSuite Module Declarations
* Typescript definitions (_N/*.d.ts_ files) are defined via the 
[@hitc/netsuite-types](https://www.npmjs.com/package/@hitc/netsuite-types) project



# Build and Publish

    gulp
    gulp declarations
    npm publish
