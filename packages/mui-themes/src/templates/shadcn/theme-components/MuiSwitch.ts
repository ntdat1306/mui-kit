import { MuiComponent } from '@/types/theme';
import { switchClasses } from '@mui/material';

const MuiSwitch: MuiComponent<'MuiSwitch'> = {
    defaultProps: {
        focusVisibleClassName: '.Mui-focusVisible',
        disableRipple: true,
    },
    styleOverrides: {
        root: ({ theme }) => ({
            width: 36,
            height: 20,
            padding: 0,
            boxShadow: (theme.vars || theme).customTokens.shadow.xs,
        }),
        switchBase: ({ theme }) => ({
            padding: 0,
            margin: 2,
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                [`& + .${switchClasses.track}`]: {
                    backgroundColor: (theme.vars || theme).palette.primary.main,
                    opacity: 1,
                    border: 0,
                },
                [`&.Mui-disabled + .${switchClasses.track}`]: {
                    opacity: 0.5,
                    backgroundColor: (theme.vars || theme).palette.primary.main,
                },
            },
            [`&.Mui-disabled + .${switchClasses.track}`]: {
                opacity: 0.5,
                backgroundColor: (theme.vars || theme).palette.divider,
            },
        }),
        thumb: ({ theme }) => ({
            width: 16,
            height: 16,
            boxSizing: 'border-box',
            color: (theme.vars || theme).palette.background.default,
        }),
        track: ({ theme }) => ({
            borderRadius: '9999px',
            backgroundColor: (theme.vars || theme).palette.divider,
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 150,
            }),
        }),
    },
};

export default MuiSwitch;
