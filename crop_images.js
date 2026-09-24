import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const heroSrc = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\392d7e2a-d606-4a68-a47d-c7376784cac2\\.user_uploaded\\media_1790276112134.jpg';
const noorMockupSrc = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\392d7e2a-d606-4a68-a47d-c7376784cac2\\.user_uploaded\\media_1790276140795.png';
const outputDir = path.resolve('public/assets');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function processNoorImages() {
  // 1. Hero background from user uploaded high-res hero
  fs.copyFileSync(heroSrc, path.join(outputDir, 'hero-bg.jpg'));
  console.log('✓ High-res hero-bg.jpg updated!');

  // 2. Extract all authentic NOOR food, interior, chef, jaipur, and gallery images from NOOR mockup
  const meta = await sharp(noorMockupSrc).metadata();
  console.log('NOOR Mockup Dimensions:', meta.width, 'x', meta.height);

  const crops = [
    { name: 'philosophy.jpg', left: 151, top: 154, width: 167, height: 72, outW: 900, outH: 600 },
    { name: 'story.jpg', left: 147, top: 242, width: 179, height: 72, outW: 900, outH: 600 },
    { name: 'dish-kesar.jpg', left: 125, top: 335, width: 64, height: 67, outW: 600, outH: 450 },
    { name: 'dish-dum.jpg', left: 193, top: 335, width: 64, height: 67, outW: 600, outH: 450 },
    { name: 'dish-gulab.jpg', left: 261, top: 335, width: 64, height: 67, outW: 600, outH: 450 },
    { name: 'menu-small-plates.jpg', left: 128, top: 432, width: 61, height: 84, outW: 600, outH: 800 },
    { name: 'menu-tandoor.jpg', left: 193, top: 432, width: 62, height: 84, outW: 600, outH: 800 },
    { name: 'menu-desserts.jpg', left: 259, top: 432, width: 63, height: 84, outW: 600, outH: 800 },
    { name: 'dining-exp.jpg', left: 20, top: 532, width: 175, height: 76, outW: 1000, outH: 600 },
    { name: 'private-dining.jpg', left: 148, top: 625, width: 170, height: 75, outW: 1000, outH: 600 },
    { name: 'chef.jpg', left: 20, top: 718, width: 107, height: 72, outW: 800, outH: 600 },
    { name: 'chef-hands.jpg', left: 250, top: 718, width: 68, height: 72, outW: 600, outH: 600 },
    { name: 'jaipur.jpg', left: 120, top: 808, width: 198, height: 76, outW: 1200, outH: 650 },
    { name: 'gallery-1.jpg', left: 20, top: 896, width: 45, height: 46, outW: 600, outH: 450 },
    { name: 'gallery-2.jpg', left: 68, top: 896, width: 45, height: 46, outW: 600, outH: 450 },
    { name: 'gallery-3.jpg', left: 116, top: 896, width: 45, height: 46, outW: 600, outH: 450 },
    { name: 'gallery-4.jpg', left: 164, top: 896, width: 61, height: 46, outW: 900, outH: 450 },
    { name: 'gallery-5.jpg', left: 228, top: 896, width: 45, height: 46, outW: 600, outH: 450 },
  ];

  for (const crop of crops) {
    await sharp(noorMockupSrc)
      .extract({ left: crop.left, top: crop.top, width: crop.width, height: crop.height })
      .resize(crop.outW, crop.outH, { fit: 'cover', kernel: 'lanczos3' })
      .sharpen({ sigma: 1.0 })
      .jpeg({ quality: 96 })
      .toFile(path.join(outputDir, crop.name));
  }

  console.log('✓ Successfully replaced all dental images with authentic NOOR food, dining, and architectural photos!');
}

processNoorImages().catch(console.error);
