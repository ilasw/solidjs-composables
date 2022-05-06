import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import * as path from "path";
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [solidPlugin(), dts()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'solidjs-composables',
      fileName: (format) => `index.js`,
      formats: ['es'],
    },
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, "src")
    }
  }
});
