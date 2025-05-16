import { CreateThemeOptions } from '@/types/theme';
import { createTheme } from '@mui/material';

const theme = createTheme({
    // Theme customization goes here as usual, including tonalOffset and/or
    // contrastThreshold as the augmentColor() function relies on these
});

const themeColorSchemes: CreateThemeOptions['colorSchemes'] = {
    light: {
        palette: {
            primary: {
                main: '#18181b',
            },
            info: {
                main: '#2563eb', // blue-600
            },
            success: {
                main: '#16a34a', // green-600
            },
            warning: {
                main: '#ca8a04', // yellow-600
            },
            error: {
                main: '#dc2626', // red-600
            },
            muted: theme.palette.augmentColor({
                color: {
                    main: '#f4f4f5',
                },
                name: 'muted',
            }),
            background: {
                default: '#ffffff',
            },
            text: {
                primary: '#09090b',
                secondary: '#71717a',
            },
            divider: '#e4e4e7',
        },
    },
    dark: {
        palette: {
            primary: {
                main: '#fafafa',
            },
            info: {
                main: '#60a5fa', // blue-400
            },
            success: {
                main: '#4ade80', // green-400
            },
            warning: {
                main: '#facc15', // yellow-400
            },
            error: {
                main: '#f87171', // red-400
            },
            muted: theme.palette.augmentColor({
                color: {
                    main: '#27272a',
                },
                name: 'muted',
            }),
            background: {
                default: '#09090b',
            },
            text: {
                primary: '#fafafa',
                secondary: '#a1a1aa',
            },
            divider: '#27272a',
        },
    },
};

export default themeColorSchemes;
