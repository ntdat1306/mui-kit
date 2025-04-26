'use client';

import { HighlightedCode } from '@/components/ui/HighlightedCode';
import { Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Usage with React</Typography>
            <Typography variant='p'>Learn how to use Material UI with React.</Typography>
        </>
    );
};

const ThemeSection = () => {
    const code = `import { CreateThemeOptions, shadcn } from '@datstack/mui-themes';
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
};

export const shadcnTheme = createTheme(deepmerge(mainTheme, extendedTheme));`;
    return (
        <>
            <Typography variant='h2'>Create theme</Typography>
            <Typography variant='p'>
                Create <Typography variant='code'>lib/theme.ts</Typography> file in root folder or in src folder of your
                project.
            </Typography>
            <HighlightedCode fileName='lib/theme.ts' code={code} />
        </>
    );
};

const ProviderSection = () => {
    const contextCode = `import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { shadcnTheme } from '@/lib/theme';

type RootProviderProps = {
    children: React.ReactNode;
};

const RootProvider = ({ children }: RootProviderProps) => {
    return (
        <ThemeProvider theme={shadcnTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default RootProvider;`;

    const appCode = `import RootProvider from './contexts/RootProvider';

const App = () => {
    return (
        <RootProvider>
            <main>...</main>
        </RootProvider>
    );
};

export default App;`;

    return (
        <>
            <Typography variant='h2'>Theme provider</Typography>
            <Typography variant='p'>
                Material UI components adhere to the library's default theme out of the box. Use{' '}
                <Typography variant='code'>{'<ThemeProvider>'}</Typography> to inject a custom theme into your
                application.
            </Typography>
            <Typography variant='p'>
                <Typography variant='code'>{'<ThemeProvider>'}</Typography> relies on the context feature of React to
                pass the theme down to the components, so you need to make sure that{' '}
                <Typography variant='code'>{'<ThemeProvider>'}</Typography> is a parent of the components you are trying
                to customize. You can learn more about this in the API section.
            </Typography>
            <HighlightedCode fileName='contexts/RootProvider.tsx' code={contextCode} />
            <Typography variant='p'>
                Material UI provides an optional CssBaseline component. It fixes some inconsistencies across browsers
                and devices while providing resets that are better tailored to fit Material UI than alternative global
                style sheets like normalize.css.
            </Typography>
            <Typography variant='p'>
                Adding <Typography variant='code'>{'<CssBaseline />'}</Typography> inside of the{' '}
                <Typography variant='code'>{'<ThemeProvider>'}</Typography> component will also enable dark mode for the
                app's background.
            </Typography>
            <Typography variant='p'>
                Wrap your main app with <Typography variant='code'>{'<RootProvider>'}</Typography>.
            </Typography>
            <HighlightedCode fileName='App.tsx' code={appCode} />
        </>
    );
};

const TypescriptSection = () => {
    const typeCode = `// The import can be in any file that is included in your \`tsconfig.json\`
import type {} from '@mui/material/themeCssVarsAugmentation';`;

    const demoCode = `import { Box } from '@mui/material';

const Demo = () => {
    return (
        <Box
            sx={(theme) => ({
                width: 64,
                height: 64,
                background: (theme.vars || theme).palette.primary.main,
                color: (theme.vars || theme).palette.primary.contrastText,
            })}
        >
            sx props
        </Box>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>TypeScript</Typography>
            <Typography variant='p'>
                The theme variables type is not enabled by default. You need to import the module augmentation to enable
                the typings:
            </Typography>
            <HighlightedCode fileName='main.tsx' code={typeCode} />
            <Typography variant='p'>
                This import help you use <Typography variant='code'>theme.vars</Typography> in sx prop of any
                components.
            </Typography>
            <HighlightedCode code={demoCode} />
        </>
    );
};

const StartSection = () => {
    const code = `import { Button } from '@mui/material';

const ButtonUsage = () => {
    return <Button variant='contained'>Hello world</Button>;
};

export default ButtonUsage;`;

    return (
        <>
            <Typography variant='h2'>Quickstart</Typography>
            <Typography variant='p'>
                After installation, you can import any Material UI component and start playing around. For example, try
                changing the <Typography variant='code'>variant</Typography> on the Button to{' '}
                <Typography variant='code'>outlined </Typography> to see how the style changes:
            </Typography>
            <HighlightedCode fileName='button.tsx' code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <ThemeSection />
            <ProviderSection />
            <TypescriptSection />
            <StartSection />
        </>
    );
};

export default Page;
