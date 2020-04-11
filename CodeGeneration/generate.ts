#!/usr/bin/env node

import { promisify } from 'util'
import * as commander from 'commander'
import * as fs from 'fs'
import { PathLike, Stats } from 'fs'
import { bindNodeCallback, combineLatest, from, merge, Observable, of } from 'rxjs'

import { catchError, concatAll, first, map, reduce, sequenceEqual, zipAll } from 'rxjs/operators'
import commandExists = require('command-exists')
import * as child_process from 'child_process'
import path from 'path'

const stat = bindNodeCallback(fs.stat) as (arg1: PathLike) => Observable<Stats>
const exec = bindNodeCallback(child_process.exec)
// the main saxon file shared by commands for any XSLT processing
const jarFile = path.format({dir: __dirname, base:'saxon9he.jar'})

async function javaExists (): Promise<boolean> {
   return await commandExists('java').then(() => true).catch(() => false)
}

function jexists () {
   from(commandExists('java')).subscribe()
}

const program = new commander.Command()
program.version(require('./package.json').version)
program.option('-o --outDir', 'directory in which to place output TypeScript files e.g. `./RecordTypes`')
program.option('-d, --debug', 'output debug stuffs')

program.command('isproject')

   .action((e, o) => {
      isSDFproject().subscribe(v => {
         console.log(`is SDF project? ${v}`)
      }, error => {
         console.debug('current directory is not a valid SDF project root folder')
         console.error(error.toString())
      })
   })

program.command('customrecord <customRecordXmlFile>')
   .description('create an NFT class for the given NetSuite custom record')
   .action(customRecordXmlFile => {
      const xslFile = path.format({dir: __dirname, base:'CustomRecord.xsl'})
      exec(`java -jar ${jarFile} -it -xsl:${xslFile} -s:${customRecordXmlFile} outputDir=.`)
         .subscribe( ([error, stdout]) => {
            console.log(stdout)
         }, error => {
            console.error('something went wrong')
            console.log(error)

         }, () => console.log('done.'))
   })

program.command('custombodyfields <RecordType>')
   .description('create an NFT class for the given NetSuite custom record')
   .action(recordTypeName => {
      const xslFile = path.format({dir: __dirname, base:'TransactionBodyField.xslt'})
      const typeMappings = path.format({dir: __dirname, base:'TypeMapping.xml'})
     // java -jar saxon9he.jar -xsl:TransactionBodyField.xslt -s:TypeMapping.xml -o:SalesOrder.ts type=SalesOrder

      exec(`java -jar ${jarFile} -it -xsl:${xslFile} -s:${typeMappings} -o:${recordTypeName}.ts type=${recordTypeName} outputDir=.`)
         .subscribe( ([error, stdout]) => {
            console.log(stdout)
         }, error => {
            console.error('something went wrong')
            console.log(error)

         }, () => console.log('done.'))
   })


program.parse(process.argv)
if (program.debug) console.log(program.opts())

/**
 * returns true IFF there is a folder named FileCabinet in the current working directory
 */
function isSDFproject () {
   return bindNodeCallback<PathLike, Stats>(fs.stat)('FileCabinet')
      .pipe(map(x => !!x.ino))
}

//const result = execSync('echo \'hello world\'', { stdio: 'inherit' })
console.log('note: SDF must already be configured for TBA access to the desired netsuite account')
// Maybe we shouldn't do auth or downloads - the user should use either the plugin or cli to do that part
// create a separate program to automate downloads?
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

// const prereqsMet = merge(isProject(), isSDFproject(), fromPromise(javaExists())).pipe(
//    reduce((a, v) => a && v, true)
// )
//
// prereqsMet.subscribe(result => console.debug('were all prerequisites met?', result),
//    error => console.debug(`requirements not met due to error ${error}`))


