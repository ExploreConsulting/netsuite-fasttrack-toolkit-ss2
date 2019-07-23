#!/usr/bin/env node

import { execSync } from 'child_process'
import { promisify } from 'util'
import * as commander from 'commander'
import * as fs from 'fs'
import { bindNodeCallback,of } from 'rxjs'
import {catchError, map, first } from 'rxjs/operators'
import { Stats } from 'fs'

const stat = bindNodeCallback(fs.stat)



const program = new commander.Command()
program.version(require('./package.json').version)
program.option('-f, --foo', 'does some foo')
program.option('-d, --debug', 'output debug stuffs')
program.command('isproject')
   .action((e, o) => {
      isSDFproject().subscribe(v => {
         console.log(`is SDF project? ${v}`)
      })
      console.log('after isdf prject')
   })

program.parse(process.argv)
if (program.debug) console.log(program.opts())

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


