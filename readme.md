[![Gitter](https://badges.gitter.im/ExploreConsulting/netsuite-fasttrack-toolkit-ss2.svg)](https://gitter.im/ExploreConsulting/netsuite-fasttrack-toolkit-ss2?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

NFT (NetSuite Fasttrack Toolkit) for SuiteScript 2.0
===============================================
This is all the goodness (and more) of NFT re-imagined for SuiteScript 2.x

This initial preview includes:

* lodash
* momentjs
* nsdal
* logging

# Getting Started
Install this package as a dependency and global typings for lodash. The need to install typings here is to avoid 
duplicate symbol errors.

    npm install netsuite-fasttrack-toolkit-ss2 --save
    npm install @types/lodash --save-dev


There is a intro/guide [here](https://docs.google.com/document/d/1n0dpVByRMy3T6O1hf7S5z0383xVSNYCzQMgZ3U0arl0)

_These instructions are a work in progress. In the steps below replace the #.#.# with the actual version number you
see after building the lib._


## Deploy core library to NS
* Use the NetSuite file cabinet _advanced add_ to upload the `dist/NFT-SS2-#.#.#.zip` file to your SuiteScripts folder.
Choose to 'extract' all files.

## Use
Extract the zip file created above into your project folder such that it has the same relative path
structure as in your NetSuite file cabinet. This is to support SuiteScript 2.0 requiring relative
paths for custom modules.

If you typically just put your SuiteScripts under the `SuiteScripts/` folder directly then simply extract
the zip directly into your project folder. 

__NOTE: NetSuite Limitation__
NetSuite SuiteScript 2.0 appears to have a defect where you can't _create_ a complete sample like
 shown below with complex custom libraries.  To get around this create your script as an empty shell
 first - then upload the full txt to the file cabinet.

 For example, upload something like this as a 'skeleton' Suitelet:

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
/* these two lines bring lodash into scope for compile time, and add it as a silent dependency of this
 module (in the correct path of ./lodash assuming lodash is installed in the same folder as this script)
 */
///<amd-dependency path="./lodash" name="_" />

import * as LogManager from './NFT-SS2-0.2.0/EC_Logger'
import * as customer from "./NFT-SS2-0.2.0/DataAccess/CustomerBase"
import * as nsdal from "./NFT-SS2-0.2.0/DataAccess/EC_nsdal"
import * as moment from "./NFT-SS2-0.2.0/moment"
var log = LogManager.DefaultLogger


/**
 * define the nsdal custom record for this client including a couple custom fields
 * This could be in a separate file
 */
class Customer extends customer.Base {
   @nsdal.FieldType.multiselect
   custentity_multiselect:number[]

   @nsdal.FieldType.datetime
   custentity_shawn_date : moment.Moment
}


export = {

   onRequest: (req, resp) => {

      log.debug('hello world')

      // turn on debug logging for just the nsdal logger
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
### AutoLogging - work in progress
Automatically log entry and exit of methods with rich options by adding a line like this to the end of your script:

```javascript
LogManager.autoLogMethodEntryExit({target:EC,method:/\w/})
```
The above line will automatically log all methods defined on the _EC_ object


# Contributing
Please do.

# TypeScript
This is written with TS and is most powerful when consumed by TS. However, it can be used by javascript
clients as well.

## NetSuite Module Declarations
* Typescript definitions (_N/*.d.ts_ files) are defined via the 
[@hitc/netsuite-types](https://www.npmjs.com/package/@hitc/netsuite-types) project



