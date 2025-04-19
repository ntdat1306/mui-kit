import { MuiComponent } from '@/types/theme';
import { svgIconClasses } from '@mui/material';

const MuiCheckbox: MuiComponent<'MuiCheckbox'> = {
    styleOverrides: {
        root: ({ theme }) => ({
            color: (theme.vars || theme).palette.primary.main,
            [`& .${svgIconClasses.root} path`]: {
                boxShadow: (theme.vars || theme).customTokens.shadow.sm,
            },
        }),
    },
};

export default MuiCheckbox;
