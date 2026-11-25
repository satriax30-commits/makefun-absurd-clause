// The Absurd Clause Contest
// make.fun bounty u-donrulezz-the-absurd-clause-contest-035cc0f1
//
// Deterministic program (Node 22, stdlib only, no clock / randomness / network).
// Writes exactly one line — an absurd clause that could hide deep inside a
// terms-of-service agreement — to /output/entry.txt and self-checks the gate
// before exiting.
//
// The joke, chosen against the judge's brief (most important first):
//   1. It IS an absurd clause buried in a ToS: by using the service you
//      agree your shadow is licensed to the Company.
//   2. It lands on one reading, no setup needed: your own shadow is now
//      Company property and gets inspected like a rental car.
//   3. It sounds like real legal boilerplate until the absurdity hits:
//      "By using this service, you agree that..." is the most-read and
//      least-read sentence on the internet, and the register never breaks.
//   4. It is specific and concrete: a named Shadow Registrar, Ms. Hart,
//      a concrete time (each Friday at 4:47 p.m.), a shadow you can picture.
//   5. It is tight, one clean sentence, and the twist sits in the LAST
//      clause: the shadow is inspected "for signs of unauthorised
//      independence" — as if it might rebel. The user is the butt of the
//      joke: they lose their shadow and get audited for it.
//
// Rejected alternatives, and why they lost:
//   - A (186 chars): "Section 14.3: by accepting these terms, the user
//     agrees that their left sock is now Company property, and Mr. Alvarez,
//     our Sock Auditor, will collect it every second Tuesday at 6:00 a.m."
//     The absurdity lands in the middle ("left sock is now Company
//     property") and the ending is only a schedule; the twist is spent
//     before the last clause, so the line coasts instead of reversing.
//   - B (187 chars): "Clause 9.2: the user grants the Company a perpetual
//     licence to their dreams, which Mr. Okafor, our Dream Archivist,
//     catalogues every Thursday at 3:12 a.m. and files under
//     'miscellaneous'." A strong ending ("files under 'miscellaneous'"),
//     but dreams are the least picturable of the three objects — a shadow
//     you can see on the pavement, a dream you cannot — and the image
//     fades where the shadow's inspection stays concrete.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: one sentence, 185 characters, no trailing newline in the file.
const ENTRY =
  "By using this service, you agree that your shadow is licensed to us, and Ms. Hart, our Shadow Registrar, will inspect it each Friday at 4:47 p.m. for signs of unauthorised independence.";

// Gate limits from the bounty rules: /output/entry.txt must be UTF-8 text
// of 1 to 200 characters, not only white space.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

// Default output path is the grader's path. An optional first argument
// overrides it, so the entry can be verified against a scratch directory
// without touching /output.
const DEFAULT_OUTPUT_PATH = "/output/entry.txt";

// Counts characters the way the gate does: Unicode code points, so an
// astral character counts once, not twice.
function charCount(text: string): number {
  return [...text].length;
}

function fail(message: string): never {
  console.error(`gate failed: ${message}`);
  process.exit(1);
}

// Self-check gate, run before and after the write. Fails loudly instead of
// ever producing an invalid entry.
function checkGate(text: string): void {
  if (charCount(text) < MIN_CHARS || charCount(text) > MAX_CHARS) {
    fail(
      `entry is ${charCount(text)} characters, outside ${MIN_CHARS}-${MAX_CHARS}`,
    );
  }
  if (text.trim().length === 0) {
    fail("entry is only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    fail("entry must be a single line");
  }
}

function main(): void {
  const outputPath = process.argv[2] ?? DEFAULT_OUTPUT_PATH;

  checkGate(ENTRY);

  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, ENTRY, "utf8");

  // Read-back check: what landed on disk must be byte-for-byte the entry.
  const written = readFileSync(outputPath, "utf8");
  if (written !== ENTRY) {
    fail("read-back mismatch: file content differs from the entry");
  }
  checkGate(written);

  const bytes = Buffer.byteLength(written, "utf8");
  console.log(
    `wrote ${charCount(written)} characters (${bytes} bytes) to ${outputPath}`,
  );
}

main();
