import { CreateThemeOptions } from '@/types/theme';
import themeColorSchemes from './colorSchemes';
import themeComponents from './components';
import themeCustomTokens from './customTokens';
import themeShadows from './shadows';
import themeShape from './shape';
import themeTypography from './typography';

export const shadcn: CreateThemeOptions = {
    shape: themeShape,
    shadows: themeShadows,
    components: themeComponents,
    typography: themeTypography,
    customTokens: themeCustomTokens,
    colorSchemes: themeColorSchemes,
};

export default shadcn;
