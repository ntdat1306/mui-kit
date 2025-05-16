import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { peerDependencies } from './package.json';

export default defineConfig({
    plugins: [
        dts(), // Generate d.ts type file
        tsconfigPaths(), // Resolve alias
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'mui-shadcn',
            formats: ['es', 'umd'],
            fileName: (format) => `index.${format}.js`,
        },
        outDir: 'dist',
        rollupOptions: {
            // Make sure to externalize deps that shouldn't be bundled into your library
            external: ['react', 'react/jsx-runtime', 'react-dom', ...Object.keys(peerDependencies)],
            output: {
                // Provide global variables to use in the UMD build for externalized deps
                globals: {
                    react: 'React',
                    'react/jsx-runtime': 'react/jsx-runtime',
                    'react-dom': 'ReactDOM',
                    '@mui/material': 'MaterialUI',
                    '@emotion/react': 'emotionReact',
                    '@emotion/styled': 'emotionStyled',
                },
            },
        },
    },
});
