
const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'src/assets/Logo.png');
const outputPath = path.join(__dirname, 'public/favicon.png');

async function generateRefinedFavicon() {
    try {
        console.log(`Cropping and generating favicon from ${inputPath}...`);
        
        // The image is 500x107. We assume the icon is roughly square on the left.
        // We'll crop a square based on height (107x107).
        await sharp(inputPath)
            .extract({ left: 0, top: 0, width: 107, height: 107 }) // Crop the left square
            .resize(32, 32)
            .png()
            .toFile(outputPath);
            
        console.log('Generated cropped public/favicon.png');
    } catch (err) {
        console.error('Error:', err);
    }
}

generateRefinedFavicon();
