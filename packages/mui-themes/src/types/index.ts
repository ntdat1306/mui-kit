import { Components, CssVarsTheme, CssVarsThemeOptions, Theme, ThemeOptions } from '@mui/material';

type ComponentName = keyof Components<Theme>;

export type ThemeComponents = Components<Omit<Theme, 'components' | 'palette'> & CssVarsTheme>;

export type MuiComponent<T extends ComponentName> = ThemeComponents[T];

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
