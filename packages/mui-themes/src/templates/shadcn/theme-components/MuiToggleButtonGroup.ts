import { MuiComponent } from '@/types/theme';
import { toggleButtonClasses, toggleButtonGroupClasses } from '@mui/material';

const MuiToggleButtonGroup: MuiComponent<'MuiToggleButtonGroup'> = {
    defaultProps: {
        size: 'small',
    },
    styleOverrides: {
        root: ({ theme }) => ({
            [`& .${toggleButtonClasses.root}`]: {
                margin: 2,
                borderRadius: (theme.vars || theme).shape.borderRadius,
                "&[variant='outline']": {
                    borderLeftColor: (theme.vars || theme).palette.divider,
                },
            },
        }),
    },
};

export default MuiToggleButtonGroup;
