import { Components, CssVarsTheme, CssVarsThemeOptions, Theme, ThemeOptions } from '@mui/material';

type CreateThemeComponents = Components<Omit<Theme, 'components' | 'palette'> & CssVarsTheme>;

export type MuiComponent<T extends keyof CreateThemeComponents> = CreateThemeComponents[T];

/**
 * View type here
 * https://github.com/mui/material-ui/blob/master/packages/mui-material/src/styles/createThemeWithVars.d.ts
 */
export type PaletteColorChannel = {
    mainChannel: string;
    lightChannel: string;
    darkChannel: string;
    contrastTextChannel: string;
};

/**
 * View type here
 * https://github.com/mui/material-ui/blob/master/packages/mui-material/src/styles/createTheme.ts
 */
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
