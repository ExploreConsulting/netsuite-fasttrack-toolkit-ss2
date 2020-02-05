#!/usr/bin/env node

import { promisify } from 'util'
import * as commander from 'commander'
import * as fs from 'fs'
import { PathLike, Stats } from 'fs'
import { bindNodeCallback, combineLatest, from, merge, Observable, of } from 'rxjs'

import { catchError, concatAll, first, map, reduce, sequenceEqual, zipAll } from 'rxjs/operators'
import commandExists = require('command-exists')
import { fromPromise } from 'rxjs/internal-compatibility'

//import { fromPromise } from 'rxjs/internal-compatibility'

const stat = bindNodeCallback(fs.stat) as (arg1: PathLike) => Observable<Stats>

async function javaExists (): Promise<boolean> {
   return await commandExists('java').then(() => true).catch(() => false)
}

function jexists () {
   from(commandExists('java')).subscribe()
}

const program = new commander.Command()
program.version(require('./package.json').version)
program.option('--customrecord <sdf_file> ', 'generates a TypeScript class from a SDF custom record definition')
program.option('-o --outDir', 'directory in which to place output TypeScript files e.g. `./RecordTypes`')
program.option('-d, --debug', 'output debug stuffs')

async function f () {
   function a (err: any, stat: any) {
      return stat
   }

   fs.stat('FileCabinet', await a)
}

program.command('isproject')
   .action(async (e, o) => {

      console.log('java installed?', await javaExists())
      console.log('isProject', await isProject())

      isSDFproject().subscribe(v => {
         console.log(`is SDF project? ${v}`)
      })
      console.log('after isdf prject')
   })

program.parse(process.argv)
if (program.debug) console.log(program.opts())

// comparing checking if it is project directory using async/await + promise (wrap fs.stat)
// vs
// RxJs Observable wrapper around fs.stat

// using async/await fnr promisifying fs.stat
async function isProject () {
   try {
      return !!(await promisify(fs.stat)('FileCabinet')).ino
   } catch (ex) {
      console.log('error but continuing with empty stats', ex.toString())
      return false
   }
}

function isSDFproject () {
   return bindNodeCallback<PathLike, Stats>(fs.stat)('FileCabinet')
      .pipe(
         // // return an empty Stats rather than throwing an exception
      //   catchError(() => of(new Stats())),
         map(x => !!x.ino)
      )

}

//const result = execSync('echo \'hello world\'', { stdio: 'inherit' })
console.log('note: SDF must be configured for TBA')
//TODO: feature - bootstrap authentication? reuse existing SDF config? expect users to have TBA already setup? use existing .SDF?

//TODO: feature - download all custom records
//TODO: feature - download transaction body custom fields
//TODO: feature - download transaction column custom fields

//TODO: feature - detect if SDF definitions already exist - prompt user to download if not
//TODO: feature - generate code for custom records
//TODO: feature - generate code for transaction body custom fields
//TODO: feature - generate code for transaction column custom fields
//TODO: feature - generate code for entity type record custom body fields
//TODO: feature - generate code for entity type record custom column fields
//TODO: feature - generate code for other type record custom body fields

const prereqsMet = merge(isProject(), isSDFproject(), fromPromise(javaExists())).pipe(
   reduce((a, v) => a && v, true)
)

prereqsMet.subscribe(result => console.debug('were all prerequisites met?', result),
   error => console.debug(`requirements not met due to error ${error}`))


