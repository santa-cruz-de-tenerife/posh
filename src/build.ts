/**
 * External dependencies
 */
import * as appRoot from "app-root-path";
import * as path from "path";
import * as fs from "fs";

const scriptdir = path.join(appRoot.path, "src", "script");
const ls = fs.readdirSync(scriptdir);
const v = ls.filter(fileName => /.*\.sh/.test(fileName));
const script = { script: v.map(k => ({ title: k, value: k }))};
const jsonPath = path.join(appRoot.path, "src", "script.json");
fs.writeFileSync(jsonPath, JSON.stringify(script));
