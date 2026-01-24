import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      tailwindcss(),
      viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
      }),
      viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
      }),
      {
        name: 'performance-optimize',
        transformIndexHtml(html, context) {
          if (!context.bundle) return html;
          let cssInlined = '';

          for (const [fileName, asset] of Object.entries(context.bundle)) {
            // 1. Inline CSS for zero-CLS and faster FCP
            if (fileName.endsWith('.css')) {
              cssInlined += `<style>${(asset as any).source}</style>`;
              delete context.bundle[fileName];
            }
          }

          // Remove any existing link tags that point to CSS files
          html = html.replace(/<link[^>]*?href="[^"]*?\.css"[^>]*?>/gi, '');

          // Inject Inlined CSS and Google Fonts preconnect into <head>
          html = html.replace('</head>', `${cssInlined}</head>`);
          return html.replace('</head>', `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></head>`);
        }
      }
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    build: {
      modulePreload: true, // Enable module preloading to break the critical request chain
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('leaflet')) return 'vendor-leaflet';
              // Only include core libraries in the initial vendor chunk
              if (id.includes('react') || id.includes('framer-motion') || id.includes('framer')) {
                return 'vendor-core';
              }
              // Other node_modules will be naturally bundled with the components that use them
            }
            // Group specific section components to avoid tiny separate chunks
            if (id.includes('components/Services') ||
              id.includes('components/About') ||
              id.includes('components/Process')) {
              return 'sections';
            }
          },
        },
      },
      chunkSizeWarningLimit: 2000,
      cssCodeSplit: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
