const axios = require('axios');
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'public', 'images');

// Fallback to picsum.photos for more reliable sample images in CI/environments
const SOURCES = [
  'https://picsum.photos/1600/1200?random=101',
  'https://picsum.photos/1600/1200?random=102',
  'https://picsum.photos/1600/1200?random=103',
  'https://picsum.photos/1600/1200?random=104',
  'https://picsum.photos/1600/1200?random=105',
  'https://picsum.photos/1600/1200?random=106'
];

async function downloadBuffer(url) {
  const res = await axios.get(url, { responseType: 'arraybuffer', timeout: 20000 });
  return Buffer.from(res.data);
}

async function ensureOut() {
  await fs.mkdir(OUT_DIR, { recursive: true });
}

async function processAll() {
  await ensureOut();

  for (let i = 0; i < SOURCES.length; i++) {
    try {
      const idx = i + 1;
      console.log(`Pobieram obraz ${idx}...`);
      const buf = await downloadBuffer(SOURCES[i]);

      const jpgPath = path.join(OUT_DIR, `photo${idx}.jpg`);
      const webpPath = path.join(OUT_DIR, `photo${idx}.webp`);
      const thumbPath = path.join(OUT_DIR, `photo${idx}-thumb.jpg`);

      // main optimized jpg (1200x800)
      await sharp(buf)
        .resize(1200, 800, { fit: 'cover' })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(jpgPath);

      // webp
      await sharp(buf)
        .resize(1200, 800, { fit: 'cover' })
        .webp({ quality: 80 })
        .toFile(webpPath);

      // thumbnail
      await sharp(buf)
        .resize(600, 400, { fit: 'cover' })
        .jpeg({ quality: 70 })
        .toFile(thumbPath);

      console.log(`Zapisano: ${jpgPath}, ${webpPath}, ${thumbPath}`);
    } catch (err) {
      console.error('Błąd przy przetwarzaniu obrazu', i + 1, err.message || err);
    }
  }

  console.log('Gotowe. Zdjęcia znajdują się w public/images');
}

processAll().catch(err => {
  console.error('Skrypt zakończony błędem:', err);
  process.exit(1);
});
