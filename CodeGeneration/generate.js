#!/usr/bin/env node
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const commander = __importStar(require("commander"));
const fs = __importStar(require("fs"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const commandExists = require("command-exists");
const internal_compatibility_1 = require("rxjs/internal-compatibility");
//import { fromPromise } from 'rxjs/internal-compatibility'
const stat = rxjs_1.bindNodeCallback(fs.stat);
async function javaExists() {
    return await commandExists('java').then(() => true).catch(() => false);
}
function jexists() {
    rxjs_1.from(commandExists('java')).subscribe();
}
const program = new commander.Command();
program.version(require('./package.json').version);
program.option('--customrecord <sdf_file> ', 'generates a TypeScript class from a SDF custom record definition');
program.option('-o --outDir', 'directory in which to place output TypeScript files e.g. `./RecordTypes`');
program.option('-d, --debug', 'output debug stuffs');
async function f() {
    function a(err, stat) {
        return stat;
    }
    fs.stat('FileCabinet', await a);
}
program.command('isproject')
    .action(async (e, o) => {
    console.log('java installed?', await javaExists());
    console.log('isProject', await isProject());
    isSDFproject().subscribe(v => {
        console.log(`is SDF project? ${v}`);
    });
    console.log('after isdf prject');
});
program.parse(process.argv);
if (program.debug)
    console.log(program.opts());
// comparing checking if it is project directory using async/await + promise (wrap fs.stat)
// vs
// RxJs Observable wrapper around fs.stat
// using async/await fnr promisifying fs.stat
async function isProject() {
    try {
        return !!(await util_1.promisify(fs.stat)('FileCabinet')).ino;
    }
    catch (ex) {
        console.log('error but continuing with empty stats', ex.toString());
        return false;
    }
}
function isSDFproject() {
    return rxjs_1.bindNodeCallback(fs.stat)('FileCabinet')
        .pipe(
    // // return an empty Stats rather than throwing an exception
    //   catchError(() => of(new Stats())),
    operators_1.map(x => !!x.ino));
}
//const result = execSync('echo \'hello world\'', { stdio: 'inherit' })
console.log('note: SDF must be configured for TBA');
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
const prereqsMet = rxjs_1.merge(isProject(), isSDFproject(), internal_compatibility_1.fromPromise(javaExists())).pipe(operators_1.reduce((a, v) => a && v, true));
prereqsMet.subscribe(result => console.debug('were all prerequisites met?', result), error => console.debug(`requirements not met due to error ${error}`));
