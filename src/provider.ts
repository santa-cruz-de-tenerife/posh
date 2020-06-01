#!/usr/bin/env node
/**
 * External dependencies
 */
import * as fs from "fs";
import * as path from "path";

/**
 * Internal dependencies
 */
import { sourceType } from "./option";
import * as originScript from "./script.json";
import { LOCAL_SOURCE_PATH } from "./init";

export const provider = (source: sourceType) => {
  if (source === "origin"){
    return originScript.script;
  } else {
    const localScriptPath = path.join(LOCAL_SOURCE_PATH);
    const ls = fs.readdirSync(localScriptPath);
    const v = ls.filter(fileName => /.*\.sh/.test(fileName));
    const script = v.map(k => ({ title: k, value: k, run: fs.readFileSync(path.join(LOCAL_SOURCE_PATH, k), "utf8").split("\n").filter(x => x !== "") }));
    return source === "both" ? script.concat(originScript.script as any) : script;
  }
};
