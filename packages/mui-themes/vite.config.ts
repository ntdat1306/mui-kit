import { resolve } from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        dts(), // Generate d.ts type file
        tsconfigPaths(), // Resolve alias
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'mui-themes',
            formats: ['es', 'umd'],
            fileName: (format) => `index.${format}.js`,
        },
        outDir: 'dist',
    },
});
