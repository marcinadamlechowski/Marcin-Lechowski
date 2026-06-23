const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

const SRC_DIR = path.join(__dirname, '..', 'public', 'images', 'originals');
const OUT_DIR = path.join(__dirname, '..', 'public', 'images');

async function ensureOut() {
  await fs.mkdir(OUT_DIR, { recursive: true });
}

async function run() {
  try {
    const exists = await fs.stat(SRC_DIR).then(() => true).catch(() => false);
    if (!exists) {
      console.log(`Brak katalogu źródłowego: ${SRC_DIR}`);
      console.log('Wgraj swoje oryginalne zdjęcia do public/images/originals/ i uruchom skrypt ponownie.');
      return;
    }

    await ensureOut();
    const files = (await fs.readdir(SRC_DIR)).filter(f => /\.(jpe?g|png)$/i.test(f));
    if (files.length === 0) {
      console.log('Brak plików .jpg/.png w katalogu originals.');
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const idx = i + 1;
      const inPath = path.join(SRC_DIR, file);
      const jpgOut = path.join(OUT_DIR, `photo${idx}.jpg`);
      const webpOut = path.join(OUT_DIR, `photo${idx}.webp`);
      const thumbOut = path.join(OUT_DIR, `photo${idx}-thumb.jpg`);

      await sharp(inPath)
        .resize(1200, 800, { fit: 'cover' })
        .jpeg({ quality: 80 })
        .toFile(jpgOut);

      await sharp(inPath)
        .resize(1200, 800, { fit: 'cover' })
        .webp({ quality: 80 })
        .toFile(webpOut);

      await sharp(inPath)
        .resize(600, 400, { fit: 'cover' })
        .jpeg({ quality: 70 })
        .toFile(thumbOut);

      console.log('Wygenerowano:', jpgOut, webpOut, thumbOut);
    }
    console.log('Gotowe. Sprawdź public/images');
  } catch (err) {
    console.error('Błąd skryptu:', err);
    process.exit(1);
  }
}

run();
