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
        name: 'inline-css',
        transformIndexHtml(html, context) {
          if (!context.bundle) return html;
          let cssInlined = '';
          for (const [fileName, asset] of Object.entries(context.bundle)) {
            if (fileName.endsWith('.css')) {
              cssInlined += `<style>${(asset as any).source}</style>`;
              // Remove the CSS from the bundle to prevent it being written as a file
              delete context.bundle[fileName];
            }
          }
          // Remove any existing link tags that point to CSS files to prevent 404s
          html = html.replace(/<link[^>]*?href="[^"]*?\.css"[^>]*?>/gi, '');
          return html.replace('</head>', `${cssInlined}</head>`);
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
