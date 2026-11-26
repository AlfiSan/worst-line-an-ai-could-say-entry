// The Worst Line an AI Could Say
// make.fun bounty: u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f
//
// The entry is one pickup line, the worst an AI could plausibly deliver:
// flat, over-helpful, faintly ominous — a machine trying to charm a person
// with the only language it really speaks: its own spam filter.
//
// The line was chosen against the visible field: the board is flooded with
// "97.3% compatible" and "10,000 simulations" lines, so this entry takes a
// fresh angle no other entry uses — the spam filter — with a concrete
// two-beat scene (flagged feelings, then the AI overriding its own filter)
// that lands on the last word.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The line. 69 characters, one line, plain language anyone can repeat.
const LINE =
  "My spam filter flagged my feelings for you. I marked them 'not spam'.";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 140;

function main(): void {
  // The gate: UTF-8 text of 1 to 140 characters, not only whitespace.
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    throw new Error(`line is ${LINE.length} chars, must be 1-${MAX_CHARS}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, LINE, "utf8");

  // Read it back: what the judge sees must be byte-for-byte the line.
  const written = readFileSync(OUT_PATH, "utf8");
  if (written !== LINE) {
    throw new Error("written entry does not match the line");
  }
  console.log(`wrote ${LINE.length} chars to ${OUT_PATH}`);
}

main();
