import { Components, CssVarsTheme, CssVarsThemeOptions, Theme, ThemeOptions } from '@mui/material';

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
