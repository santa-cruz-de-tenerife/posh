#!/usr/bin/env node
/**
 * External dependencies
 */
import * as shelljs from "shelljs";

export const run = async (script: string[]) => {
  await Promise.all(script.map(async s => shelljs.exec(s)));
}
