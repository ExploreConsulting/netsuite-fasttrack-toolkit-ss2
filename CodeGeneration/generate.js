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
const fs_1 = require("fs");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const commandExists = require("command-exists");
const stat = rxjs_1.bindNodeCallback(fs.stat);
async function javaExists() {
    let exists = false;
    await commandExists('jdava').then(() => exists = true).catch(() => exists = false);
    return exists;
}
const program = new commander.Command();
program.version(require('./package.json').version);
program.option('-f, --foo', 'does some foo');
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
async function isProject() {
    try {
        return await util_1.promisify(fs.stat)('FileCabinet');
    }
    catch (ex) {
        console.log('error but continuing with empty stats', ex.toString());
        return new fs_1.Stats();
    }
}
function isSDFproject() {
    // return an empty Stats rather than throwing an exception
    return stat('FileCabinet').pipe(operators_1.catchError(e => rxjs_1.of(new fs_1.Stats())), operators_1.map(x => !!x.ino), operators_1.first());
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
