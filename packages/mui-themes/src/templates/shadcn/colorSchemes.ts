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
