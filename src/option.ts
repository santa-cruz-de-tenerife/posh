#!/usr/bin/env node
/**
 * External dependencies
 */
import * as yargs from "yargs";

export type sourceType = "origin" | "local" | "both";
const Source: ReadonlyArray<sourceType> = ["origin", "local", "both"];

export const option = () => {
  return yargs
    .alias("s", "source")
    .choices("s", Source)
    .default("s", "origin")
    .help()
    .argv;
}
