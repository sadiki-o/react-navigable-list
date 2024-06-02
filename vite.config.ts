import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import path from 'path';
import { name } from './package.json';

const formattedName = name.match(/[^/]+$/)?.[0] ?? name;

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      insertTypesEntry: true
    }),
    cssInjectedByJsPlugin({
      relativeCSSInjection: true
    })
  ],
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/utils': path.resolve(__dirname, './src/lib/utils'),
      '@/components': path.resolve(__dirname, './src/lib/components'),
      '@/hooks': path.resolve(__dirname, './src/lib/hooks')
    }
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: formattedName,
      formats: ['es', 'umd'],
      fileName: format => `${formattedName}.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss'],
      output: {
        preserveModules: false,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss'
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true,
    minify: true
  },
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  }
});
