import { writeFile, mkdir, access } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { constants } from 'fs';

// ES module compatible __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define path to `src/views` relative to script location
const viewsDir = path.resolve(__dirname, './src/views');

// List of pages to generate
const pages = [
  'Home',
  'Products',
  'ProductDetails',
  'Cart',
  'Checkout',
  'NotFound'
];

// Template function
const getTemplate = (page) => `<template>
  <div class="${page}">
    <h1>${page} Page</h1>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
`;

async function ensureDirExists(dir) {
  try {
    await access(dir, constants.F_OK);
  } catch (err) {
    await mkdir(dir, { recursive: true });
    console.log(`📁 Created directory: ${dir}`);
  }
}

async function generatePages() {
  try {
    await ensureDirExists(viewsDir);

    for (const page of pages) {
      const filePath = path.join(viewsDir, `${page}.vue`);
      await writeFile(filePath, getTemplate(page));
      console.log(`✅ Created: ${filePath}`);
    }

    console.log('\n🎉 All Vue page components generated.');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

generatePages
