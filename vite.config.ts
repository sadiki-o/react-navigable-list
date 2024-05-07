import { defineConfig, UserConfigExport } from 'vite';
import tailwindcss from 'tailwindcss';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import path from 'path';
import { name } from './package.json';

import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import type { PluginOption } from 'vite';
// ...

function reactVirtualized(): PluginOption {
  const WRONG_CODE = `import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";`;

  return {
    name: 'my:react-virtualized',
    async configResolved() {
      const reactVirtualizedPath = path.dirname(
        fileURLToPath(import.meta.resolve('react-virtualized'))
      );

      const brokenFilePath = path.join(
        reactVirtualizedPath,
        '..', // back to dist
        'es',
        'WindowScroller',
        'utils',
        'onScroll.js'
      );
      const brokenCode = await readFile(brokenFilePath, 'utf-8');

      const fixedCode = brokenCode.replace(WRONG_CODE, '');
      await writeFile(brokenFilePath, fixedCode);
    },
  };
}

const app = async (): Promise<UserConfigExport> => {
  /**
   * Removes everything before the last
   * @octocat/library-repo -> library-repo
   * vite-component-library-template -> vite-component-library-template
   */
  const formattedName = name.match(/[^/]+$/)?.[0] ?? name;

  return defineConfig({
    plugins: [
      react(),
      dts({
        rollupTypes: true,
        insertTypesEntry: true
      }),
      cssInjectedByJsPlugin({
        relativeCSSInjection: true
      }),
      reactVirtualized()
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
      minify: true // Minify the output
    },
    css: {
      postcss: {
        plugins: [tailwindcss()]
      }
    }
  });
};

// https://vitejs.dev/config/
export default app;
