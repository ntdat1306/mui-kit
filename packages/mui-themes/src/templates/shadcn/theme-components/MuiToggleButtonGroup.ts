import { MuiComponent } from '@/types';
import { toggleButtonGroupClasses } from '@mui/material';

const MuiToggleButtonGroup: MuiComponent<'MuiToggleButtonGroup'> = {
    defaultProps: {
        size: 'small',
    },
    styleOverrides: {
        root: ({ theme }) => ({
            [`& .${toggleButtonGroupClasses.grouped}`]: {
                margin: 2,
                borderRadius: (theme.vars || theme).shape.borderRadius,
                borderLeftColor: (theme.vars || theme).palette.divider,
            },
        }),
    },
};

export default MuiToggleButtonGroup;
