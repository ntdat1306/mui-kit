import { Components, CssVarsTheme, CssVarsThemeOptions, Theme, ThemeOptions } from '@mui/material';

// Add new variants for Typography components
type TVariantsKey = 'p' | 'list' | 'blockquote' | 'table' | 'code' | 'lead' | 'large' | 'small' | 'muted';
type TVariants = Record<TVariantsKey, React.CSSProperties>;
type TVariantsOptions = Partial<TVariants>;
type TVariantOverrides = Record<TVariantsKey, true>;

// Type for any component in Mui
type CreateThemeComponents = Components<Omit<Theme, 'components' | 'palette'> & CssVarsTheme>;
export type MuiComponent<T extends keyof CreateThemeComponents> = CreateThemeComponents[T];

// Create theme options type
export type CreateThemeOptions = Omit<ThemeOptions, 'components'> &
    Pick<CssVarsThemeOptions, 'defaultColorScheme' | 'colorSchemes' | 'components'> & {
        cssVariables?:
            | boolean
            | Pick<
                  CssVarsThemeOptions,
                  | 'colorSchemeSelector'
                  | 'rootSelector'
                  | 'disableCssColorScheme'
                  | 'cssVarPrefix'
                  | 'shouldSkipGeneratingVar'
              >;
    };

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
