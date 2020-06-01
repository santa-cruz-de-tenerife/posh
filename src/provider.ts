#!/usr/bin/env node
/**
 * External dependencies
 */
import * as fs from "fs";
import * as path from "path";
import * as os from "os";

/**
 * Internal dependencies
 */
import { sourceType } from "./option";
import * as originScript from "./script.json";

export const provider = (source: sourceType) => {
  if (source === "origin"){
    return originScript.script;
  } else {
    const osPath = os.homedir();
    const localScriptPath = path.join(osPath, ".pooh", "posh");
    const ls = fs.readdirSync(localScriptPath);
    const v = ls.filter(fileName => /.*\.sh/.test(fileName));
    const script = v.map(k => ({ title: k, value: k, run: fs.readFileSync(path.join(osPath, ".pooh", "posh", k), "utf8").split("\n").filter(x => x !== "") }));
    return source === "both" ? script.concat(originScript.script as any) : script;
  }
}
