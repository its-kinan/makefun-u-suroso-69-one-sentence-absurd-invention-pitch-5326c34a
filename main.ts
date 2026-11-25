// One-Sentence Absurd Invention Pitch.
// A single original pitch, written verbatim to /output/entry.txt.
// The program is fully deterministic: no network, no randomness,
// no clock, no input — every run writes the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "A self-drying umbrella that shakes itself like a wet dog the moment you step indoors, then hands everyone it splashes a tiny towel and an apology.";

// The grader runs this in a sandbox where /output already exists.
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, pitch, "utf8");
