//https://www.npmjs.com/package/commander

import { Command } from "commander";

export const serveCommand = new Command()
  .command("serve [filename]") //[] is optional value
  .description("Open a file for editing")
  .option("-p, --port <number>", "port to run server on", "4005") //<> required value '4005' is default value
 //default filename notebook.js
  .action((filename='notebook.js',options) => {
    console.log(filename,options)
    console.log("Getting ready to serve a file");
  });
