import { Components, CssVarsTheme, SelectVariants, Theme } from '@mui/material';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';

type ComponentName = keyof Components<Theme>;

export type ThemeComponents = Components<Omit<Theme, 'components' | 'palette'> & CssVarsTheme>;

export type MuiComponent<T extends ComponentName> = ThemeComponents[T];
