import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import * as path from "path";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  resolve: {
    alias: {
      '@/core': path.join(__dirname, "../packages/core/src")
    }
  }
});
