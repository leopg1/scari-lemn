// One-off: convert the mislabeled PNG (.jpg) gallery images to optimized WebP.
// Hero + materials feature images get a larger max edge; the rest are sized
// for the masonry grid + lightbox. Run: node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";

const DIR = "public/gallery";
// images shown full-bleed / large get more pixels
const LARGE = new Set(["modern-01", "modern-05"]);

const files = (await readdir(DIR)).filter((f) => f.endsWith(".jpg"));
let before = 0;
let after = 0;

for (const file of files) {
  const base = file.replace(/\.jpg$/, "");
  const src = join(DIR, file);
  const out = join(DIR, `${base}.webp`);
  const srcSize = (await stat(src)).size;
  before += srcSize;

  const maxEdge = LARGE.has(base) ? 2000 : 1400;
  const quality = LARGE.has(base) ? 82 : 80;

  await sharp(src)
    .rotate() // respect EXIF orientation
    .resize({ width: maxEdge, height: maxEdge, fit: "inside", withoutEnlargement: true })
    .webp({ quality, effort: 5 })
    .toFile(out);

  const outSize = (await stat(out)).size;
  after += outSize;
  console.log(
    `${file.padEnd(16)} ${(srcSize / 1024).toFixed(0).padStart(5)} KB -> ${base}.webp ${(outSize / 1024).toFixed(0).padStart(4)} KB`
  );
}

console.log("\n--------------------------------------------");
console.log(`TOTAL: ${(before / 1024 / 1024).toFixed(1)} MB -> ${(after / 1024 / 1024).toFixed(1)} MB`);
console.log(`Saved: ${(100 - (after / before) * 100).toFixed(0)}%`);
