declare module '@mui/material/styles' {
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
