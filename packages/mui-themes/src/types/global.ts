import { PaletteColorChannel } from './theme';

declare module '@mui/material/styles' {
    // Add a custom token to theme
    interface Theme {
        customTokens: {
            shadow: {
                sm: string;
                xs: string;
                md: string;
                lg: string;
            };
        };
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

    // Add a custom token to css variables
    interface ThemeVars {
        customTokens: {
            shadow: {
                sm: string;
                xs: string;
                md: string;
                lg: string;
            };
        };
    }

    /**
     * Augment the palette to include a custom color
     * Use PaletteColorChannel to use channel token in (theme.vars || theme).palette
     */
    interface Palette {
        muted: Palette['primary'] & PaletteColorChannel;
    }

    interface PaletteOptions {
        muted?: PaletteOptions['primary'];
    }

    // Add new variants to typography
    interface TypographyVariants {
        p: React.CSSProperties;
        list: React.CSSProperties;
        blockquote: React.CSSProperties;
        table: React.CSSProperties;
        code: React.CSSProperties;
        lead: React.CSSProperties;
        large: React.CSSProperties;
        small: React.CSSProperties;
        muted: React.CSSProperties;
    }

    // Allow configuration using `createTheme()`
    interface TypographyVariantsOptions {
        p?: React.CSSProperties;
        list?: React.CSSProperties;
        blockquote?: React.CSSProperties;
        table?: React.CSSProperties;
        code?: React.CSSProperties;
        lead?: React.CSSProperties;
        large?: React.CSSProperties;
        small?: React.CSSProperties;
        muted?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        p: true;
        list: true;
        blockquote: true;
        table: true;
        code: true;
        lead: true;
        large: true;
        small: true;
        muted: true;
    }
}

// Add new props for ToggleButton component
declare module '@mui/material/ToggleButton' {
    interface ToggleButtonOwnProps {
        variant?: 'outline';
    }
}

// Add new props for Tabs component
declare module '@mui/material/Tabs' {
    interface TabsOwnProps {
        type?: 'contained' | 'outline';
    }
}

// Export here to re-export in index.ts file
export {};
