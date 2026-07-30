/**
 * Converts every JPEG/PNG under public/images to WebP, capped at 1600px wide.
 * Run it after dropping new photos in public/images: `npm run images`.
 */
import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public", "images");
const MAX_WIDTH = 1600;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

const files = await walk(ROOT);
let before = 0;
let after = 0;

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

  before += (await stat(file)).size;
  const target = file.replace(/\.(jpe?g|png)$/i, ".webp");
  const image = sharp(file);
  const meta = await image.metadata();

  await image
    .resize({ width: Math.min(meta.width ?? MAX_WIDTH, MAX_WIDTH), withoutEnlargement: true })
    .webp({ quality: 74 })
    .toFile(target);

  after += (await stat(target)).size;
  await unlink(file);
  console.log(`${path.relative(ROOT, target)} (${meta.width}x${meta.height})`);
}

console.log(`\n${(before / 1024 / 1024).toFixed(1)} MB -> ${(after / 1024 / 1024).toFixed(1)} MB`);
