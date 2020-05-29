#!/usr/bin/env node
/**
 * External dependencies
 */
import * as prompts from "prompts";

/**
 * Internal dependencies
 */
import { script } from "./script.json";

export const prompt = async () => {
  const response = await prompts({
    type: "autocomplete",
    name: "value",
    message: "Pick up what you need",
    choices: [
      ...script
    ],
  });
  return script.find(s => s.value === response.value);
};
