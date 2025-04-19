// Add new variants for Typography components
type TVariantsKey = 'p' | 'list' | 'blockquote' | 'table' | 'code' | 'lead' | 'large' | 'small' | 'muted';
type TVariants = Record<TVariantsKey, React.CSSProperties>;
type TVariantsOptions = Partial<TVariants>;
type TVariantOverrides = Record<TVariantsKey, true>;

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

    interface TypographyVariants extends TVariants {}

    // Allow configuration using `createTheme()`
    interface TypographyVariantsOptions extends TVariantsOptions {}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides extends TVariantOverrides {}
}

// Add new props for ToggleButton component
declare module '@mui/material/ToggleButton' {
    interface ToggleButtonOwnProps {
        variant?: 'outline';
    }
}

// Export here to re-export in index.ts file
export {};
