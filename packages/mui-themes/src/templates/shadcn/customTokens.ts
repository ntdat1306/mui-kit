import { CreateThemeOptions } from '@/types';

const themeCustomTokens: CreateThemeOptions['customTokens'] = {
    shadow: {
        xs: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        sm: '0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
        md: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    },
};

export default themeCustomTokens;
