import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I finished it months ago — I just sent it to a younger, more optimistic version of me, and he never opened it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
