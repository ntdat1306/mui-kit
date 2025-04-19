'use client';

import { CreateThemeOptions, shadcn } from '@datstack/mui-themes';
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
    cssVariables: {
        colorSchemeSelector: 'class',
    },
    docs: {
        navbarHeight: '3.5rem',
        sidebarWidth: '18.75rem',
        padding: '0.75rem',
    },
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
    typography: {
        fontFamily: [
            'var(--font-geist-sans)',
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

export const shadcnExtendTheme = createTheme(deepmerge(mainTheme, extendedTheme));
