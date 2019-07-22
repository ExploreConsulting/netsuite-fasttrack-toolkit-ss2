#!/usr/bin/env node

import {execSync} from 'child_process'
import * as commander from 'commander'


const program = new commander.Command()
program.version(require('./package.json').version)
program.option('-f, --foo','does some foo')
program.option('-d, --debug','output debug stuffs')
program.command('subcommand')
   .action( (e,o)=>console.log('subcommand'))
program.parse(process.argv)
if (program.debug) console.log(program.opts())



const result = execSync("echo 'hello world'", { stdio:'inherit'})

//TODO: feature - bootstrap authentication? resuse existing SDF config? expect users to have TBA already setup? use existing .SDF?

//TODO: feature - download all custom records
//TODO: feature - download transaction body custom fields
//TODO: feature - download transaction column custom fields

//TODO: feature - detect if SDF definitions already exist - prompt user to download if not
//TODO: feature - generate code for custom records
//TODO: feature - generate code for transaction body custom fields
//TODO: feature - generate code for transaction column custom fields











console.log('hello')


