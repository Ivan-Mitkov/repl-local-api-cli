"use strict";
//https://www.npmjs.com/package/commander
Object.defineProperty(exports, "__esModule", { value: true });
exports.serveCommand = void 0;
var commander_1 = require("commander");
exports.serveCommand = new commander_1.Command()
    .command("serve [filename]") //[] is optional value
    .description("Open a file for editing")
    .option("-p, --port <number>", "port to run server on", "4005") //<> required value '4005' is default value
    //default filename notebook.js
    .action(function (filename, options) {
    if (filename === void 0) { filename = 'notebook.js'; }
    console.log(filename, options);
    console.log("Getting ready to serve a file");
});
