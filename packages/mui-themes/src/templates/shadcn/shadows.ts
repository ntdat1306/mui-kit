import { Shadows, ThemeOptions } from '@mui/material';

const themeShadows: ThemeOptions['shadows'] = [
    'none',
    ...Array.from({ length: 24 }, () => '0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)'),
] as Shadows;

export default themeShadows;
