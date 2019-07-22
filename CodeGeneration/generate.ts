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


console.log('hello')


