import { Theme } from '@mui/material/styles'; // Triggers the module augmentation

declare module '@mui/material/styles' {
    interface Theme {
        docs: {
            navbarHeight: string;
            sidebarWidth: string;
            padding: string;
        };
    }

    interface ThemeOptions {
        docs?: {
            navbarHeight?: string;
            sidebarWidth?: string;
            padding?: string;
        };
    }

    interface ThemeVars {
        docs: {
            navbarHeight: string;
            sidebarWidth: string;
            padding: string;
        };
    }
}
