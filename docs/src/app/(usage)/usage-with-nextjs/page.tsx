'use client';

import { HighlightedCode } from '@/components/ui/HighlightedCode';
import { Alert, alertClasses, AlertTitle, Link, Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Usage with Next.js</Typography>
            <Typography variant='p'>Learn how to use Material UI with Next.js.</Typography>
        </>
    );
};

const ThemeSection = () => {
    const code = `'use client';
    
import { CreateThemeOptions, shadcn } from '@datstack/mui-shadcn';
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
                project with the <Typography variant='code'>'use client';</Typography> directive.
            </Typography>
            <HighlightedCode fileName='lib/theme.ts' code={code} />
            <Typography variant='p'>
                Use <Typography variant='code'>cssVariables</Typography> to prevent SSR flickering.
            </Typography>
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

    const layoutCode = `import RootProvider from '@/contexts/RootProvider';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    );
}`;

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
                Wrap your root layout with <Typography variant='code'>{'<RootProvider>'}</Typography>.
            </Typography>
            <HighlightedCode fileName='root-layout.tsx' code={layoutCode} />
        </>
    );
};

const SSRSection = () => {
    const applyStylesCode = `import Card from '@mui/material/Card';

function App() {
    return (
        <Card
        -      sx={(theme) => ({
        -        backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
        -        '&:hover': {
        -          backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f5f5f5',
        -        },
        -      })}
        +      sx={[
        +        {
        +          backgroundColor: '#fff',
        +          '&:hover': {
        +            backgroundColor: '#f5f5f5',
        +          },
        +        },
        +        (theme) =>
        +          theme.applyStyles('dark', {
        +            backgroundColor: '#000',
        +            '&:hover': {
        +              backgroundColor: '#333',
        +            },
        +          }),
        +      ]}
        />
    );
}`;

    const attributeCode = `createTheme({
    cssVariables: {
        colorSchemeSelector: 'class'
    }
})

<InitColorSchemeScript attribute="class" />`;

    return (
        <>
            <Typography variant='h2'>Preventing SSR flickering</Typography>
            <Typography variant='p'>
                For SSR (server-side rendering) applications, Material UI can not detected user-selected mode on the
                server, causing the screen to flicker from light to dark during the hydration phase on the client.
            </Typography>
            <Typography variant='p'>
                To prevent the issue, you need to ensure that there is no usage of{' '}
                <Typography variant='code'>theme.palette.mode === 'dark'</Typography> in your code base.
            </Typography>
            <Typography variant='p'>
                If you have such a condition, replace it with the{' '}
                <Link href='https://mui.com/material-ui/customization/dark-mode/#styling-in-dark-mode' target='_blank'>
                    theme.applyStyles() function
                </Link>
                :
            </Typography>
            <HighlightedCode code={applyStylesCode} canCopy={false} />
            <Typography variant='p'>
                Next, if you have a custom selector that is not <Typography variant='code'>media</Typography>, add the
                <Typography variant='code'>InitColorSchemeScript</Typography> component based on the framework that you
                are using:
            </Typography>

            <Alert
                severity='success'
                sx={{
                    [`& .${alertClasses.message}`]: {
                        flex: 1,
                    },
                }}
            >
                <AlertTitle>
                    The <Typography variant='code'>attribute</Typography> has to be the same as the one you set in the
                    <Typography variant='code'>colorSchemeSelector</Typography> property:
                </AlertTitle>
                <HighlightedCode code={attributeCode} canCopy={false} />
            </Alert>
        </>
    );
};

const AppRouterSection = () => {
    const code = `import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

export default function RootLayout(props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* must come before the <main> element */}
        <InitColorSchemeScript attribute="class" />
        <main>{children}</main>
      </body>
    </html>
  );
}`;

    return (
        <>
            <Typography variant='h3'>Next.js App Router</Typography>
            <Typography variant='p'>
                Add the following code to the{' '}
                <Link href='https://nextjs.org/docs/app/api-reference/file-conventions/layout' target='_blank'>
                    root layout
                </Link>{' '}
                file:
            </Typography>
            <HighlightedCode fileName='app/layout.tsx' code={code} />
            <Typography variant='p'>
                If you don't add suppressHydrationWarning to your {'<html>'} tag, you will see warnings about "Extra
                attributes from the server" because InitColorSchemeScript updates that element.
            </Typography>
        </>
    );
};

const PagesRouterSection = () => {
    const code = `import Document, { Html, Head, Main, NextScript } from 'next/document';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>...</Head>
        <body>
          {/* must come before the <Main> element */}
          <InitColorSchemeScript attribute="class" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}`;

    return (
        <>
            <Typography variant='h3'>Next.js Pages Router</Typography>
            <Typography variant='p'>
                Add the following code to the custom{' '}
                <Link
                    href='https://nextjs.org/docs/pages/building-your-application/routing/custom-document'
                    target='_blank'
                >
                    pages/_document.js
                </Link>{' '}
                file:
            </Typography>
            <HighlightedCode fileName='pages/_document.js' code={code} />
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
            <HighlightedCode fileName='your-root-file.tsx' code={typeCode} />
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
            <SSRSection />
            <AppRouterSection />
            <PagesRouterSection />
            <TypescriptSection />
            <StartSection />
        </>
    );
};

export default Page;
