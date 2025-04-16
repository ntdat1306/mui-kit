import { ThemeOptions } from '@mui/material';

type CustomTokens = {
    shadow: {
        card: string;
        input: string;
        popover: string;
    };
};

declare module '@mui/material/styles' {
    interface Theme {
        customTokens: CustomTokens;
    }

    interface ThemeOptions {
        customTokens?: {
            shadow?: {
                card?: string;
                input?: string;
                popover?: string;
            };
        };
    }

    interface ThemeVars {
        customTokens: CustomTokens;
    }
}

const themeCustomTokens: ThemeOptions['customTokens'] = {
    shadow: {
        card: '0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
        input: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        popover: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
    },
};

export default themeCustomTokens;
