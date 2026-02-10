// Placeholder image setup script
const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
const imagesDir = path.join(publicDir, 'images');

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
    console.log('Created images directory');
}

// Create placeholder SVG images
const createPlaceholderSVG = (width, height, text, bgColor) => {
    return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad${text.replace(/\s/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${bgColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${adjustColor(bgColor, -30)};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect fill="url(#grad${text.replace(/\s/g, '')})" width="${width}" height="${height}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dy=".3em">${text}</text>
</svg>`;
};

function adjustColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

const placeholders = [
    { name: 'hero-background.jpg', width: 1920, height: 1080, text: 'Hero Background', color: '#7c3aed' },
    { name: 'article-1.jpg', width: 800, height: 600, text: 'Interior Design', color: '#0d9488' },
    { name: 'article-2.jpg', width: 800, height: 600, text: 'Fashion', color: '#f59e0b' },
    { name: 'article-3.jpg', width: 800, height: 600, text: 'Wellness', color: '#ec4899' },
    { name: 'article-4.jpg', width: 800, height: 600, text: 'Travel', color: '#3b82f6' },
    { name: 'article-5.jpg', width: 800, height: 600, text: 'Yoga', color: '#8b5cf6' },
    { name: 'article-6.jpg', width: 800, height: 600, text: 'Creative', color: '#f97316' },
    { name: 'influencer-1.jpg', width: 400, height: 400, text: 'Emma C.', color: '#7c3aed' },
    { name: 'influencer-2.jpg', width: 400, height: 400, text: 'Sophie C.', color: '#ec4899' },
    { name: 'influencer-3.jpg', width: 400, height: 400, text: 'Maya R.', color: '#0d9488' },
    { name: 'influencer-4.jpg', width: 400, height: 400, text: 'Lucas B.', color: '#f59e0b' },
    { name: 'parallax-background.jpg', width: 1920, height: 1080, text: 'Parallax Section', color: '#764ba2' },
];

placeholders.forEach(({ name, width, height, text, color }) => {
    const svg = createPlaceholderSVG(width, height, text, color);
    const filePath = path.join(imagesDir, name);
    fs.writeFileSync(filePath, svg);
    console.log(`Created ${name}`);
});

console.log('\nAll placeholder images created successfully!');
