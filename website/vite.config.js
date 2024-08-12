import path from "node:path";

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Specifies the directory for our unbundled assets
  root: path.join(__dirname, "./assets_source/"),
  // Specifies the base URL path where assets will be made available to the browser
  // Asset path is <example.com>/assets/
  base: "/assets/",
  build: {
    // Specifies the directory where Vite will output the built files (relative to root)
    outDir: path.join(__dirname, "./assets_compiled/"),
    manifest: "manifest.json",
    assetsDir: "bundled",
    // Specifies the entry points for bundling
    rollupOptions: {
        input: [
          "assets_source/scripts/script.jsx",
          "assets_source/styles/styles.css",
        ],
    },
    // Vite will delete files in outDir before rebuilding
    // (avoid accumulating stale assets)
    emptyOutDir: true,
    // When enabled, will copy files from /public/ to outDir
    // Disable for flask--use flask to specify public folder for static assets
    copyPublicDir: false,
  },
});