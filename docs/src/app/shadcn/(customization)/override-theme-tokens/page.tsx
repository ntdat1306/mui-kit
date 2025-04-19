'use client';

import { HighlightedCode } from '@/components/ui/HighlightedCode';
import { Typography } from '@mui/material';
import React from 'react';

const content = {
    lib: `import { CreateThemeOptions, shadcn } from '@datstack/mui-themes';
import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';

const mainTheme: CreateThemeOptions = {
    shape: shadcn.shape,
    shadows: shadcn.shadows,
    components: shadcn.components,
    typography: shadcn.typography,
    colorSchemes: shadcn.colorSchemes,
    customTokens: shadcn.customTokens, // Must have, do not override it
};

const extendedTheme: CreateThemeOptions = {
    // Use CSS theme variables
    cssVariables: {
        colorSchemeSelector: 'class',
    },
    // Override colorSchemes
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#ff0000',
                },
            },
        },
    },
    // Override components
    components: {
        MuiSvgIcon: {
            defaultProps: {
                fontSize: 'small',
            },
            styleOverrides: {
                fontSizeSmall: {
                    fontSize: '16px',
                },
            },
        },
    },
    // Override typography
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
};

export const shadcnTheme = createTheme(deepmerge(mainTheme, extendedTheme));`,
    typescript: `// The import can be in any file that is included in your \`tsconfig.json\`
import type {} from '@mui/material/themeCssVarsAugmentation';`,
};

const Page = () => {
    return (
        <div>
            <Typography variant='h1'>Overriding theme tokens</Typography>
            <Typography variant='p'>
                Extend the MUI theme with custom tokens — like colors, spacing, or typography — to maintain consistency
                and enable scalable design across your app.
            </Typography>

            <Typography variant='h2'>Create theme</Typography>
            <Typography variant='p'>
                You can easily customize the appearance of your application by overriding the default tokens in the main
                theme with a new set of tokens that better suit your design requirements.
            </Typography>
            <HighlightedCode fileName='lib/theme.ts' code={content.lib} />

            {/* Typescript */}
            <Typography variant='h2'>TypeScript</Typography>
            <Typography variant='p'>
                The theme variables type is not enabled by default. You need to import the module augmentation to enable
                the typings:
            </Typography>
            <HighlightedCode fileName='your-root-file.tsx' code={content.typescript} />
            <Typography variant='p'>
                This import help you use <Typography variant='code'>theme.vars</Typography> in sx prop of any
                components.
            </Typography>
        </div>
    );
};

export default Page;
