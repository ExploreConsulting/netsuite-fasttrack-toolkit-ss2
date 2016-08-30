/**
 * Trying to use a skeleton js file to bootstrap requirejs config and the Example.ts suitelet1
 */

/**
 * Test file for SuiteScript 2.0
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

// set path configuration so the rest of our scripts/libs can find their dependencies
require.config({
   //baseUrl:'.',
   paths: {
      "NFT/EC_Logger": "./EC_Logger", // relative path to NFT
      "NFT/moment": "./moment"
   }

});


define(['./example'], function(example) { return { onRequest: example.onRequest }})
