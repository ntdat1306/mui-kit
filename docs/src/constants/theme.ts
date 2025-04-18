'use client';

import { shadcnTheme } from '@datstack/mui-themes';
import { createTheme, ThemeOptions } from '@mui/material';
import { deepmerge } from '@mui/utils';

export const defaultTheme = createTheme();

export const extendedTheme = {
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
                fontSize: '16px',
            },
        },
    },
} as ThemeOptions;

export const shadcnExtendTheme = createTheme(deepmerge(shadcnTheme, extendedTheme));
