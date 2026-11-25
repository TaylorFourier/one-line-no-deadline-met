import { writeFileSync } from "node:fs";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is required");
}

const line =
  "I missed the deadline waiting on past me, who is still in the meeting where this sounded easy.";

if (line.length < 1 || line.length > 200) {
  throw new Error("line must be 1 to 200 characters");
}
if (line !== line.trim() || /[\r\n]/.test(line)) {
  throw new Error("line must be a single trimmed line");
}
for (let i = 0; i < line.length; i++) {
  const code = line.charCodeAt(i);
  if (code < 32 || code > 126) {
    throw new Error("line must be printable ASCII");
  }
}

writeFileSync(`${outputDir}/entry.txt`, line, { encoding: "utf8" });
