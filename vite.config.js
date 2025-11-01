import { defineConfig } from 'vite';

const stripUseClientDirective = () => ({
  name: 'strip-use-client-directive',
  enforce: 'pre',
  transform(code, id) {
    if (!id.includes('node_modules/framer-motion/dist/es')) {
      return null;
    }

    if (code.startsWith('"use client";') || code.startsWith('\'use client\';')) {
      return {
        code: code.replace(/^['"]use client['"];?\s*/, ''),
        map: null,
      };
    }

    return null;
  },
});

export default defineConfig({
  plugins: [stripUseClientDirective()],
});
