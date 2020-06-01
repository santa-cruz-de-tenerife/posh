#!/usr/bin/env node
/**
 * External dependencies
 */
import * as prompts from "prompts";

/**
 * Internal dependencies
 */
import { sourceType } from "./option";
import { provider } from "./provider";

export const prompt = async (source: sourceType): Promise<any> => {
  const script = provider(source);
  const response = await prompts({
    type: "autocomplete",
    name: "value",
    message: "Pick up what you need",
    choices: script
  });
  return script.find((s: any) => s.value === response.value);
};
