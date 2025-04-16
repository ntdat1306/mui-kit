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
                background: (theme.vars || theme).palette.secondary.main,
            },
            '&:hover': {
                color: (theme.vars || theme).palette.text.secondary,
                background: (theme.vars || theme).palette.secondary.main,
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
                        border: `1px solid ${(theme.vars || theme).palette.divider}`,
                        boxShadow: (theme.vars || theme).customTokens.shadow.input,
                    },
                },
            ],
        }),
    },
};

export default MuiToggleButton;
