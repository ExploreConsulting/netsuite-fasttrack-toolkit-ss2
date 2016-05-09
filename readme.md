NFT (NetSuite Fasttrack Toolkit) for SuiteScript 2.0
===============================================
This is all the goodness (and more) of NFT re-imagined for SuiteScript 2.x

This initial preview includes:

* lodash
* momentjs
* nsdal
* logging

# Getting Started

    npm install

Once the tooling is there, deploy the library files to NetSuite, then use it:

## Deploy
Run `gulp` which should create a file `dist/NFT-SS2-x.y.z.zip`.

Use the NetSuite file cabinet _advanced add_ to extract this file to your SuiteScripts folder.
Upload it to an empty folder or uncheck the "overwrite files with the same name" options to make sure you don't
overwrite something with the same name.


## Use
Extract the zip file created above into your project folder such that it has the same relative path
structure as in your NetSuite file cabinet. This is to support SuiteScript 2.0 requiring relative
paths for custom modules.

If you typically just put your SuiteScripts under the `SuiteScripts/` folder directly then simply extract
the zip directly into your project folder. The library uses **EC_** as a file prefix in the root to help prevent
name collisions. It also creates a **DataAccess** folder, so make sure you don't already have a
folder named as such.


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
///<amd-dependency path="./moment" name="moment" />

import * as LogManager from './EC_Logger'
import * as customer from "./DataAccess/CustomerBase"
import * as nsdal from "./DataAccess/EC_nsdal"

var log = LogManager.DefaultLogger


/**
 * define the nsdal custom record for this client including a couple custom fields
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

      // load customer internal id 10
      var c = new Customer(10)

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

Compile this with `tsc` or your favorite IDE (we use Webstorm.) then deploy the resulting
.js file to your file cabinet alongside the unzipped NFT.

# Contributing
NFT-SS2 is written in typescript, so you'll need the type definitions - run this command:

    typings install

We need help defining records and fields for NetSuite - see any of the files under `DataAccess/` as a
guide.


# TypeScript
This is written with TS and is most powerful when consumed by TS. However, it can be used by javascript
clients as well.

## NetSuite Modules Declarations
The NetSuite bult in modules are declared under the `N/` folder, to mimic how they
are referenced in the documentation/code.


# NSDAL
Define record types under the `DataAccess/` folder.



