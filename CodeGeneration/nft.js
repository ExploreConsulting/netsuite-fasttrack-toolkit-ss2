#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const fs = __importStar(require("fs"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const commandExists = require("command-exists");
const child_process = __importStar(require("child_process"));
const path_1 = __importDefault(require("path"));
const stat = (0, rxjs_1.bindNodeCallback)(fs.stat);
const exec = (0, rxjs_1.bindNodeCallback)(child_process.exec);
// the main saxon file shared by commands for any XSLT processing
const jarFile = path_1.default.format({ dir: __dirname, base: 'saxon9he.jar' });
async function javaExists() {
    return await commandExists('java').then(() => true).catch(() => false);
}
const program = new commander_1.Command();
program.version(require('./package.json').version);
program.option('-o --outDir', 'directory in which to place output TypeScript files e.g. `./RecordTypes`');
program.option('-d, --debug', 'output debug stuffs');
program.command('customrecord <customRecordXmlFile>')
    .description('create an NFT class for the given NetSuite custom record')
    .action(customRecordXmlFile => {
    const outputDir = process.cwd();
    console.log(`output location: ${outputDir}`);
    const xslFile = path_1.default.format({ dir: __dirname, base: 'CustomRecord.xsl' });
    exec(`java -jar ${jarFile} -it -xsl:${xslFile} -s:${customRecordXmlFile} outputDir=${outputDir}`, { cwd: process.cwd() })
        .subscribe(([error, stdout]) => {
        console.log(stdout);
    }, error => {
        console.error('something went wrong');
        console.log(error);
    }, () => console.log('done.'));
});
program.command('custombodyfields <RecordType>')
    .description('create/update an NFT class for the given NetSuite custom body fields')
    .action(recordTypeName => {
    const xslFile = path_1.default.format({ dir: __dirname, base: 'TransactionBodyField.xslt' });
    const typeMappings = path_1.default.format({ dir: __dirname, base: 'TypeMapping.xml' });
    // java -jar saxon9he.jar -xsl:TransactionBodyField.xslt -s:TypeMapping.xml -o:SalesOrder.ts type=SalesOrder
    exec(`java -jar ${jarFile} -it -xsl:${xslFile} -s:${typeMappings} -o:${recordTypeName}.ts type=${recordTypeName} outputDir=.`, { cwd: '.' })
        .subscribe(([error, stdout]) => {
        console.log(stdout);
    }, error => {
        console.error('something went wrong');
        console.log(error);
    }, () => console.log('done.'));
});
program.parse(process.argv);
if (program.opts().debug)
    console.log(program.opts());
/**
 * returns true IFF there is a folder named FileCabinet in the current working directory
 */
function isSDFproject() {
    return (0, rxjs_1.bindNodeCallback)(fs.stat)('FileCabinet', { bigint: false })
        .pipe((0, operators_1.map)(x => !!x.ino));
}
/**
 * Looks for the standard SS2/RecordTypes folder into which class output is typically placed
 */
async function findOutputFolder() {
    const searchTarget = 'FileCabinet/RSM/SS2/RecordTypes';
    return (0, rxjs_1.bindNodeCallback)(fs.stat)(searchTarget, { bigint: false })
        .pipe((0, operators_1.map)(x => x.isDirectory() ? searchTarget : '.'));
}
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
