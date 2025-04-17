import { MuiComponent } from '@/types';

declare module '@mui/material/ToggleButton' {
    interface ToggleButtonOwnProps {
        variant?: 'outline';
    }
}

const MuiToggleButton: MuiComponent<'MuiToggleButton'> = {
    defaultProps: {
        size: 'small',
    },
    styleOverrides: {
        root: ({ theme }) => ({
            border: 0,
            color: (theme.vars || theme).palette.text.primary,
            '&.Mui-selected': {
                color: (theme.vars || theme).palette.primary.main,
                backgroundColor: (theme.vars || theme).palette.secondary.main,
            },
            '&:hover': {
                color: (theme.vars || theme).palette.text.secondary,
                backgroundColor: (theme.vars || theme).palette.secondary.main,
            },
            '&.Mui-disabled': {
                border: 0,
                opacity: 0.5,
                color: (theme.vars || theme).palette.text.primary,
            },
            variants: [
                {
                    props: { variant: 'outline' },
                    style: {
                        boxShadow: (theme.vars || theme).customTokens.shadow.xs,
                        border: `1px solid ${(theme.vars || theme).palette.divider}`,
                    },
                },
            ],
        }),
    },
};

export default MuiToggleButton;
