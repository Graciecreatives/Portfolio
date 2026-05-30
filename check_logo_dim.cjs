
const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'src/assets/brand/Logo.webp');

async function checkMetadata() {
    try {
        const metadata = await sharp(inputPath).metadata();
        console.log(`Dimensions: ${metadata.width}x${metadata.height}`);
    } catch (err) {
        console.error('Error:', err);
    }
}

checkMetadata();
