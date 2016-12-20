/**
 * Post-install script to satisfy TypeScript install paths in a way that's compatible with NetSuite module resolution.
 * This creates a symbolic link at the project level (assuming typical install path of
 * node_modules/netsuite-fasttrack-toolkit-ss2). This allows users to upload dist/NFT-SS2-x.y.z.zip in their main
 * suitescript folder and refer to it with relative imports of the form 'import ... from ./NFT-SS2-x.y.z/...'
 */
var fs = require('fs')
var path = require('path')

var target = path.join(process.cwd(),"declarations")
var path = '../../NFT-SS2-' + process.env.npm_package_version;

if (fs.lstatSync(path) && fs.lstatSync(path).isSymbolicLink()) {
   console.log('removing existing folder link:' + path)
   fs.unlinkSync(path)
}
console.log('creating symbolic link to ' + path )
fs.symlinkSync(target,path,'dir')
