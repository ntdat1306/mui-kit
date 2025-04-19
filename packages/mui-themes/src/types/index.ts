import { Components, CssVarsTheme, CssVarsThemeOptions, Theme, ThemeOptions } from '@mui/material';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';

// Add new variants for Typography components
type TVariantsKey = 'p' | 'list' | 'blockquote' | 'table' | 'code' | 'lead' | 'large' | 'small' | 'muted';
type TVariants = Record<TVariantsKey, TypographyStyleOptions>;
type TVariantsOptions = Partial<TVariants>;
type TVariantOverrides = Record<TVariantsKey, true>;

type ComponentName = keyof Components<Theme>;

export type MuiComponent<T extends ComponentName> = Components<Omit<Theme, 'components' | 'palette'> & CssVarsTheme>[T];

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

    interface TypographyVariantsOptions extends TVariantsOptions {}
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides extends TVariantOverrides {}
}
