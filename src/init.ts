#!/usr/bin/env node
/**
 * External dependencies
 */
import * as fs from "fs";
import * as path from "path";
import * as os from "os";

export const init = () => {
    const osPath = os.homedir();
    const POOH_PATH = path.join(osPath, ".pooh");
    const LOCAL_SOURCE_PATH = path.join(osPath, ".pooh", "posh");
    if(!fs.existsSync(POOH_PATH)) {
      fs.mkdirSync(POOH_PATH);
    }
    if(!fs.existsSync(LOCAL_SOURCE_PATH)) {
      fs.mkdirSync(LOCAL_SOURCE_PATH);
    }
}
