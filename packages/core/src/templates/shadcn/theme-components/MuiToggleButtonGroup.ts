import { MuiComponent } from '@/types/theme';
import { toggleButtonClasses, toggleButtonGroupClasses } from '@mui/material';

const MuiToggleButtonGroup: MuiComponent<'MuiToggleButtonGroup'> = {
    defaultProps: {
        size: 'small',
    },
    styleOverrides: {
        root: ({ theme }) => ({
            [`& .${toggleButtonClasses.root}`]: {
                margin: '2px',
                borderRadius: (theme.vars || theme).shape.borderRadius,
                "&[variant='outline']": {
                    borderLeftColor: (theme.vars || theme).palette.divider,
                },
                [`&.${toggleButtonGroupClasses.grouped}.Mui-selected + .${toggleButtonGroupClasses.grouped}.Mui-selected`]:
                    {
                        margin: '2px',
                        borderLeft: '1px solid transparent',
                    },
            },
        }),
    },
};

export default MuiToggleButtonGroup;
