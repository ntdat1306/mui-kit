import { ThemeOptions } from '@mui/material';

type CustomTokens = {
    shadow: {
        sm: string;
        xs: string;
        md: string;
        lg: string;
    };
};

declare module '@mui/material/styles' {
    interface Theme {
        customTokens: CustomTokens;
    }

    interface ThemeOptions {
        customTokens?: {
            shadow?: {
                sm?: string;
                xs?: string;
                md?: string;
                lg?: string;
            };
        };
    }

    interface ThemeVars {
        customTokens: CustomTokens;
    }
}

const themeCustomTokens: ThemeOptions['customTokens'] = {
    shadow: {
        xs: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        sm: '0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
        md: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    },
};

export default themeCustomTokens;
