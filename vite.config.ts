import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

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
      {
        name: 'performance-optimize',
        transformIndexHtml(html, context) {
          if (!context.bundle) return html;
          let cssInlined = '';
          let preloads = '';

          for (const [fileName, asset] of Object.entries(context.bundle)) {
            // 1. Inline CSS
            if (fileName.endsWith('.css')) {
              cssInlined += `<style>${(asset as any).source}</style>`;
              delete context.bundle[fileName];
            }
            // 2. Preload JS chunks to break serial loading chains
            else if (fileName.endsWith('.js')) {
              preloads += `<link rel="modulepreload" href="/${fileName}">`;
            }
          }

          // Remove any existing link tags that point to CSS files to prevent 404s
          html = html.replace(/<link[^>]*?href="[^"]*?\.css"[^>]*?>/gi, '');

          // Inject Inlined CSS and Module Preloads into <head>
          return html.replace('</head>', `${cssInlined}${preloads}</head>`);
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
          // No manual chunks to keep the request chain shallow (Depth 1-2)
          manualChunks: undefined,
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
