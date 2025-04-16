'use client';

import { shadcnTheme } from '@datstack/mui-themes';
import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';

export const defaultTheme = createTheme();

export const extendedTheme = {
    docs: {
        navbarHeight: '3.5rem',
        sidebarWidth: '18.75rem',
        padding: '0.75rem',
    },
    cssVariables: {
        colorSchemeSelector: 'class',
    },
};

export const shadcnExtendTheme = createTheme(deepmerge(shadcnTheme, extendedTheme));
