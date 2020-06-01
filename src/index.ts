#!/usr/bin/env node
/**
 * Internal dependencies
 */
import { init } from "./init";
import { prompt } from "./prompt";
import { run } from "./run";
import { option, sourceType } from "./option";

init();
const { s } = option();

(async () => {
  const response: any = await prompt(s as sourceType);
  if(response) {
    console.log("==> Installing", response.value);
    run(response.run);
  }
})();
