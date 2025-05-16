'use client';

import { HighlightedCode } from '@/components/ui/HighlightedCode';
import { Typography } from '@mui/material';
import React from 'react';

const content = {
    lib: {
        oneFile: `import { CreateThemeOptions, shadcn } from '@datstack/mui-shadcn';
import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';

declare module '@mui/material/styles' {
    interface Theme {
        newTokens: {
            first: string;
            second: string;
        };
    }

    interface ThemeOptions {
        newTokens?: {
            first?: string;
            second?: string;
        };
    }

    interface ThemeVars {
        newTokens: {
            first: string;
            second: string;
        };
    }
}

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
    // Whatever name you want
    newTokens: {
        first: 'valueFirst',
        second: 'valueSecond',
    },
};

export const shadcnTheme = createTheme(deepmerge(mainTheme, extendedTheme));`,
        splitFile: {
            theme: `import { CreateThemeOptions, shadcn } from '@datstack/mui-shadcn';
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
    // Whatever name you want
    newTokens: {
        first: 'valueFirst',
        second: 'valueSecond',
    },
};

export const shadcnTheme = createTheme(deepmerge(mainTheme, extendedTheme));
`,
            type: `// Triggers the module augmentation
import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        newTokens: {
            first: string;
            second: string;
        };
    }

    interface ThemeOptions {
        newTokens?: {
            first?: string;
            second?: string;
        };
    }

    interface ThemeVars {
        newTokens: {
            first: string;
            second: string;
        };
    }
}`,
        },
    },
    typescript: `// The import can be in any file that is included in your \`tsconfig.json\`
import type {} from '@mui/material/themeCssVarsAugmentation';`,
};

const Page = () => {
    return (
        <div>
            <Typography variant='h1'>Adding new theme tokens</Typography>
            <Typography variant='p'>
                Extend the MUI theme with custom tokens — like colors, spacing, or typography — to maintain consistency
                and enable scalable design across your app.
            </Typography>

            {/* One file only */}
            <Typography variant='h2'>Single file</Typography>
            <Typography variant='p'>
                In smaller projects or for quick prototyping, it's often convenient to keep everything in a single file.
                This approach allows you to define components, logic, and styles together without splitting across
                multiple files.
            </Typography>
            <HighlightedCode fileName='lib/theme.ts' code={content.lib.oneFile} />

            {/* Split file */}
            <Typography variant='h2'>Multiple files</Typography>
            <Typography variant='p'>
                For better organization and reusability, we recommend separating certain logic, configurations, or
                component definitions into their own files. This approach helps keep your codebase clean, easier to
                navigate, and more maintainable—especially as your project grows.
            </Typography>
            <HighlightedCode fileName='lib/theme.ts' code={content.lib.splitFile.theme} />
            <Typography variant='p'>
                Create type file, remember to import something used in app to triggers the module augmentation:
            </Typography>
            <HighlightedCode fileName='types/global.d.ts' code={content.lib.splitFile.type} />

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
