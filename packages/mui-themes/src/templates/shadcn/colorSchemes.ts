import { CreateThemeOptions } from '@/types';

const themeColorSchemes: CreateThemeOptions['colorSchemes'] = {
    light: {
        palette: {
            primary: {
                main: '#00a76f', // #00a76f || #18181b
            },
            secondary: {
                main: '#f4f4f5',
            },
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
                main: '#00a76f', // #00a76f || #fafafa
            },
            secondary: {
                main: '#27272a',
            },
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
