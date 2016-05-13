/**
 * Builds our libraries into a single zip file for easy upload to NetSuite
 */
'use strict';

// main version stamp - gets appended to the build filename
var version = require("./package.json").version;
var outdir  = "dist";
var decldir = 'declarations';
var gulp    = require('gulp');
var del     = require("del");
var path    = require('path');
var merge   = require('merge-stream')
// loads all gulp-* plugins listed as dependencies from package.json
var $       = require('gulp-load-plugins')();

/**
 * All the sources files we need to zip up for deployment to NS
 */
var sources = ['EC_Logger.js', 'DataAccess/*.js'];

var declarations = ['EC_Logger.d.ts', 'DataAccess/*.d.ts', 'aurelia-logging.d.ts'];

var includedNPMlibs = ['node_modules/lodash/lodash.js',
   'node_modules/moment/moment.js', 'node_modules/aurelia-logging/dist/amd/aurelia-logging.js'];

var buildFolderName = "/NFT-SS2-" + version;

var versionedDistPath = path.join(outdir, buildFolderName);

// copies files into a staging location in prep for ZIP
gulp.task('copyfiles', ['clean'], function () {
   return merge(gulp.src(sources, {base: '.'}), gulp.src(includedNPMlibs))
      .pipe($.debug({title: 'copying core files:'}))
      .pipe(gulp.dest(versionedDistPath))// 
})

// copies typescript declaration files into a staging location in prep for ZIP
gulp.task('declarations',['cleandeclarations'], function () {
   return merge(gulp.src(declarations, {base: '.'}), 
      gulp.src('aurelia-logging.d.ts'))
      .pipe($.debug({title: 'copying typescript declaration files:'}))
      .pipe(gulp.dest(decldir))//
})


// wrap things up into a single zip file suitable for 'advanced add' extraction to the NetSuite file cabinet.
gulp.task('default', ['copyfiles'], function () {
   // use merge to lift the node dependencies to the root directory of the zip (note no {base:} option)
   return gulp.src(path.join(outdir, '/**'))
      .pipe($.zip(buildFolderName + ".zip")) // combine into a single file w/version stamp
      .pipe(gulp.dest(outdir))
      .pipe($.size()); // outputs a blurb about how many bytes the final result is
});

// uses plain node del module to delete previous build
gulp.task('clean', function () {
   return del(outdir);
});

// uses plain node del module to delete previous build
gulp.task('cleandeclarations', function () {
   return del(decldir);
});
