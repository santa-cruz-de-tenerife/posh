/**
 * External dependencies
 */
import * as shelljs from "shelljs";
import * as path from "path";
import * as appRoot from "app-root-path";

export const run = (kind: string) => {
  const scriptPath = path.join(appRoot.path, "src", "script", `${kind}`);
  shelljs.exec(scriptPath);
}
