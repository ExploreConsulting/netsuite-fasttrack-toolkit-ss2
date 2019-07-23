#!/usr/bin/env node

import { promisify } from 'util'
import * as commander from 'commander'
import * as fs from 'fs'
import { Stats } from 'fs'
import { bindNodeCallback, of } from 'rxjs'
import { catchError, first, map } from 'rxjs/operators'

const stat = bindNodeCallback(fs.stat)



const program = new commander.Command()
program.version(require('./package.json').version)
program.option('-f, --foo', 'does some foo')
program.option('-d, --debug', 'output debug stuffs')

async function f () {
   function a(err:any, stat:any) {
      return stat
   }
   fs.stat('FileCabinet',  await a)
}

program.command('isproject')
   .action(async (e, o) => {

      console.log('isProject', await isProject())

      isSDFproject().subscribe(v => {
         console.log(`is SDF project? ${v}`)
      })
      console.log('after isdf prject')
   })

program.parse(process.argv)
if (program.debug) console.log(program.opts())

async function isProject() {
   try {
      return await promisify(fs.stat)('FileCabinet')
   } catch (ex) {
      console.log('error but continuing with empty stats', ex.toString())
      return new Stats()
   }
}


function isSDFproject () {
     // return an empty Stats rather than throwing an exception
   return stat('FileCabinet').pipe(
        catchError(e=> of(new Stats())),
        map( x=> !!x.ino), first())
}

//const result = execSync('echo \'hello world\'', { stdio: 'inherit' })

//TODO: feature - bootstrap authentication? resuse existing SDF config? expect users to have TBA already setup? use existing .SDF?

//TODO: feature - download all custom records
//TODO: feature - download transaction body custom fields
//TODO: feature - download transaction column custom fields

//TODO: feature - detect if SDF definitions already exist - prompt user to download if not
//TODO: feature - generate code for custom records
//TODO: feature - generate code for transaction body custom fields
//TODO: feature - generate code for transaction column custom fields

// console.log('hello')


