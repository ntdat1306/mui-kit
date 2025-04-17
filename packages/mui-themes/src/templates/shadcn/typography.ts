import { Palette, TypographyVariantsOptions } from '@mui/material';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';

// Add new variants for Typography components
type TVariantsKey = 'p' | 'list' | 'blockquote' | 'table' | 'code' | 'lead' | 'large' | 'small' | 'muted';

type TVariants = Record<TVariantsKey, TypographyStyleOptions>;

type TVariantsOptions = Partial<TVariants>;

type TVariantOverrides = Record<TVariantsKey, true>;

type ThemeTypography = TypographyVariantsOptions | ((palette: Palette) => TypographyVariantsOptions);

declare module '@mui/material/styles' {
    interface TypographyVariants extends TVariants {}

    interface TypographyVariantsOptions extends TVariantsOptions {}
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides extends TVariantOverrides {}
}

const themeTypography: ThemeTypography = {};

export default themeTypography;
