//https://www.npmjs.com/package/commander

import { Command } from "commander";
import path from "path";
import { serve } from "local-api";
export const serveCommand = new Command()
  .command("serve [filename]") //[] is optional value
  .description("Open a file for editing")
  .option("-p, --port <number>", "port to run server on", "4005") //<> required value '4005' is default value
  //default filename notebook.js
  .action((filename = "notebook.js", options: { port: string }) => {
    const dir = path.join(process.cwd(), path.dirname(filename));
    serve(parseInt(options.port), path.basename(filename), dir);
  });
