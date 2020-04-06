#!/usr/bin/env node
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander = __importStar(require("commander"));
const fs = __importStar(require("fs"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const commandExists = require("command-exists");
const child_process = __importStar(require("child_process"));
const path_1 = __importDefault(require("path"));
const stat = rxjs_1.bindNodeCallback(fs.stat);
const exec = rxjs_1.bindNodeCallback(child_process.exec);
// the main saxon file shared by commands for any XSLT processing
const jarFile = path_1.default.format({ dir: __dirname, base: 'saxon9he.jar' });
async function javaExists() {
    return await commandExists('java').then(() => true).catch(() => false);
}
function jexists() {
    rxjs_1.from(commandExists('java')).subscribe();
}
const program = new commander.Command();
program.version(require('./package.json').version);
program.option('-o --outDir', 'directory in which to place output TypeScript files e.g. `./RecordTypes`');
program.option('-d, --debug', 'output debug stuffs');
program.command('isproject')
    .action((e, o) => {
    isSDFproject().subscribe(v => {
        console.log(`is SDF project? ${v}`);
    }, error => {
        console.debug('current directory is not a valid SDF project root folder');
        console.error(error.toString());
    });
});
program.command('customrecord <customRecordXmlFile>')
    .description('create an NFT class for the given NetSuite custom record')
    .action(customRecordXmlFile => {
    const xslFile = path_1.default.format({ dir: __dirname, base: 'CustomRecord.xsl' });
    exec(`java -jar ${jarFile} -it -xsl:${xslFile} -s:${customRecordXmlFile} outputDir=.`)
        .subscribe(([error, stdout]) => {
        console.log(stdout);
    }, error => {
        console.error('something went wrong');
        console.log(error);
    }, () => console.log('done.'));
});
program.command('custombodyfields <tranactionXmlFile>')
    .description('create an NFT class for the given NetSuite custom record')
    .action(customRecordXmlFile => {
    const xslFile = path_1.default.format({ dir: __dirname, base: 'CustomRecord.xsl' });
    exec(`java -jar ${jarFile} -it -xsl:${xslFile} -s:${customRecordXmlFile} outputDir=.`)
        .subscribe(([error, stdout]) => {
        console.log(stdout);
    }, error => {
        console.error('something went wrong');
        console.log(error);
    }, () => console.log('done.'));
});
program.parse(process.argv);
if (program.debug)
    console.log(program.opts());
/**
 * returns true IFF there is a folder named FileCabinet in the current working directory
 */
function isSDFproject() {
    return rxjs_1.bindNodeCallback(fs.stat)('FileCabinet')
        .pipe(operators_1.map(x => !!x.ino));
}
//const result = execSync('echo \'hello world\'', { stdio: 'inherit' })
console.log('note: SDF must already be configured for TBA access to the desired netsuite account');
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
