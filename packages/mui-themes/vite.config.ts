import { resolve } from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        dts({
            rollupTypes: true, // This bundles all `.d.ts` into a single file
        }),
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
