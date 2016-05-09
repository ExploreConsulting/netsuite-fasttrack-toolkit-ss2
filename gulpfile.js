/**
 * Builds our libraries into a single zip file for easy upload to NetSuite
 */
'use strict';

// main version stamp - gets appended to the build filename
var version = require("./package.json").version;
var outdir = "dist";
var merge = require('merge-stream')
var gulp = require('gulp');
var del = require("del");
var path = require('path');

// loads all gulp-* plugins listed as dependencies from package.json
var $ = require('gulp-load-plugins')();

/**
 * All the sources files we need to zip up for deployment to NS
 */
var sources = ['EC_Logger.js', 'DataAccess/*.js'];

var includedNPMlibs = ['node_modules/lodash/lodash.js',
   'node_modules/moment/moment.js', 'node_modules/aurelia-logging/dist/amd/aurelia-logging.js'];

var buildFolderName = "/NFT-SS2-" + version

gulp.task('copyfiles', ['clean'], function() {
   return merge(gulp.src(sources, { base: './'}), gulp.src(includedNPMlibs))
      .pipe($.copy( path.join(outdir,buildFolderName)))
})

// wrap things up into a single zip file suitable for 'advanced add' extraction to the NetSuite file cabinet.
gulp.task('default',['copyfiles'], function () {
    // use merge to lift the node dependencies to the root directory of the zip (note no {base:} option)
    return gulp.src(path.join(outdir,buildFolderName) + '/*/**', { base: './'})
        .pipe($.zip(buildFolderName + ".zip")) // combine into a single file w/version stamp
        .pipe(gulp.dest(outdir))
        .pipe($.size()); // outputs a blurb about how many bytes the final result is
});

// uses plain node del module to delete previous build
gulp.task('clean', function(){
    del(outdir, function() {
        console.log("Deleted " + outdir);
    });
});
