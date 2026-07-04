// Convierte y optimiza todas las imágenes en public/images/ a WebP.
// Uso: node scripts/optimize-images.mjs   (requiere: npm i -D sharp)
import sharp from "sharp";
import { readdir, readFile, writeFile, unlink } from "node:fs/promises";
import { extname, basename, join } from "node:path";

const DIR = "public/images";
const MAX_WIDTH = 1200;
const QUALITY = 82;
const EXTS = [".jpg", ".jpeg", ".png"];

const files = (await readdir(DIR)).filter((f) => EXTS.includes(extname(f).toLowerCase()));

for (const file of files) {
  const inPath = join(DIR, file);
  const outName = basename(file, extname(file)) + ".webp";
  const outPath = join(DIR, outName);
  const input = await readFile(inPath);
  const buf = await sharp(input)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toBuffer();
  await writeFile(outPath, buf);
  await unlink(inPath);
  const kb = Math.round(buf.length / 1024);
  const flag = kb > 500 ? " ⚠️ SUPERA 500KB" : "";
  console.log(`✓ ${outName} ${kb}KB${flag}`);
}
console.log(`\nListo. ${files.length} imagen(es) convertidas a WebP.`);
