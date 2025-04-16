import { createTheme } from '@mui/material';
import themeColorSchemes from './colorSchemes';
import themeComponents from './components';
import themeCustomTokens from './customTokens';
import themeShadows from './shadows';
import themeShape from './shape';
import themeTypography from './typography';

export const theme = createTheme({
    shape: themeShape,
    shadows: themeShadows,
    components: themeComponents,
    typography: themeTypography,
    customTokens: themeCustomTokens,
    colorSchemes: themeColorSchemes,
});

export default theme;
