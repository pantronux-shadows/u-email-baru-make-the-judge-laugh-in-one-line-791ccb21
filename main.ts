// make.fun — Make the Judge Laugh in One Line (program/v1)
// Writes the entry's one line (<=200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt,
// falling back to /output/entry.txt.

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smart fridge emailed me a passive-aggressive list of the vegetables " +
  "I've been ignoring. I replied-all to the toaster, and now the whole " +
  "kitchen isn't speaking to me.";

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim() !== "") return fromEnv;
  return "/output";
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  // One line of text, newline-terminated, deterministic bytes every run.
  writeFileSync(join(dir, "entry.txt"), LINE + "\n", "utf8");
}

main();
