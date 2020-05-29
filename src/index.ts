/**
 * Internal dependencies
 */
import { prompt } from "./prompt";
import { run } from "./run";

(async() => {
  const response = await prompt();
  console.log("==> Installing", response.value);
  run(response.value);
})();
