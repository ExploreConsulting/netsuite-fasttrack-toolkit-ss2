/**
 * Post-install script to satisfy TypeScript install paths in a way that's compatible with NetSuite module resolution.
 * This copies the declarations to the  project level (assuming typical install path of
 * node_modules/netsuite-fasttrack-toolkit-ss2). This allows users to upload dist/NFT-SS2-x.y.z.zip in their main
 * suitescript folder and refer to it with relative imports of the form 'import ... from ./NFT-SS2-x.y.z/...' and
 * also support multiple versions of NFT side by side in a single project.
 */
var fs = require('fs-extra')
var path = require('path')

var source = path.join(process.cwd(),"declarations")
var destination = '../../NFT-SS2-' + process.env.npm_package_version;
console.log(`copying NFT declarations from ${source} to ${destination}`)
fs.copy(source,destination,{ preserveTimestamps:true}, err => {
      console.error(err)
})




