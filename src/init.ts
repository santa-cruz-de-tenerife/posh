#!/usr/bin/env node
/**
 * External dependencies
 */
import * as fs from "fs";
import * as path from "path";
import * as os from "os";

export const osPath = os.homedir();
export const POOH_PATH = path.join(osPath, ".pooh");
export const LOCAL_SOURCE_PATH = path.join(osPath, ".pooh", "posh");

export const init = ()=> {
  if(!fs.existsSync(POOH_PATH)) {
    fs.mkdirSync(POOH_PATH);
  }
  if(!fs.existsSync(LOCAL_SOURCE_PATH)) {
    fs.mkdirSync(LOCAL_SOURCE_PATH);
  }
};
