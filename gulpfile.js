/**
 * Builds our libraries into a single zip file for easy upload to NetSuite
 */
'use strict'

// main version stamp - gets appended to the build filename
const version = require('./package.json').version
const outdir = 'dist'
const decldir = 'declarations'
const gulp = require('gulp')
const del = require('del')
const path = require('path')
const merge = require('merge-stream')
const zip = require('gulp-zip')
const debug = require('gulp-debug')
const size = require('gulp-size')

/**
 * All the sources files we need to zip up for deployment to NS
 */
const sources = ['search.js', 'EC_Logger.js', 'DataAccess/*.js',
   'geography.js', 'governance.js', 'query.js']

const declarations = ['*.d.ts', 'DataAccess/*.d.ts', '!example.d.ts']

// npm libraries we choose to bundle (e.g. moment) or we actually depend on (e.g. logging)
const includedNPMlibs = ['node_modules/lodash/lodash.js', 'node_modules/immutable/dist/immutable.js',
   'node_modules/moment/moment.js', 'node_modules/aurelia-logging/dist/amd/aurelia-logging.js',
   'node_modules/aurelia-logging-console/dist/amd/aurelia-logging-console.js',
   'node_modules/bignumber.js/bignumber.js'
]

// other .d.ts files to include in declarations/ that are correct without any renaming
const otherTypings = ['node_modules/moment/moment.d.ts',
   'aurelia-logging.d.ts',
   'node_modules/bignumber.js/bignumber.d.ts',
   'node_modules/immutable/dist/immutable.d.ts'
]

// output folder includes version number e.g. NFT-SS2-#.#.# so that we can easily support multiple versions of
// NFT in the file cabinet
const buildFolderName = '/NFT-SS2-' + version

const versionedDistPath = path.join(outdir, buildFolderName)

// uses plain node del module to delete previous build
gulp.task('cleandeclarations', function () {
   return del(decldir)
})

// uses plain node del module to delete previous build artifacts
gulp.task('clean', function () {
   return del(outdir)
})

// copies files into a staging location in prep for ZIP
gulp.task('copyfiles', gulp.series('clean', function () {
   return merge(gulp.src(sources, { base: '.' }), gulp.src(includedNPMlibs))
      .pipe(debug({ title: 'copying core files:' }))
      .pipe(gulp.dest(versionedDistPath))
}))

// copies typescript declaration files into a staging location in prep for ZIP
gulp.task('declarations', gulp.series('cleandeclarations', function () {
   merge(gulp.src(declarations, { base: '.' }),
      gulp.src(otherTypings))
      .pipe(debug({ title: 'copying typescript declaration files:' }))
      .pipe(gulp.dest(decldir))
   // include lodash, but we need to put all in a subfolder named 'lodash' so we can import it with the proper name
   // i.e. `import * as _ from './NFT-x.y.z/lodash'
   return gulp.src('node_modules/@types/lodash/**')
      .pipe(gulp.dest(`${decldir}/lodash`))// include lodash but we need to rename it to 'lodash' so we can import it with the proper name
}))

// wrap things up into a single zip file suitable for 'advanced add' extraction to the NetSuite file cabinet.
gulp.task('default', gulp.series('copyfiles', function () {
   // use merge to lift the node dependencies to the root directory of the zip (note no {base:} option)
   return gulp.src(path.join(outdir, '/**'))
      .pipe(zip(buildFolderName + '.zip')) // combine into a single file w/version stamp
      .pipe(gulp.dest(outdir))
      .pipe(size()) // outputs a blurb about how many bytes the final result is
}))

// generate API documentation for the web
gulp.task('docs', function (cb) {
   const exec = require('child_process').exec
   exec('node_modules/.bin/typedoc', // typedoc config is in typedoc.json
      function (err, stdout, stderr) {
         console.log(stdout)
         console.log(stderr)
         cb(err)
      })
})
