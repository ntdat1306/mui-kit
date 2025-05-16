import { MuiComponent } from '@/types/theme';

const MuiToggleButton: MuiComponent<'MuiToggleButton'> = {
    defaultProps: {
        size: 'small',
    },
    styleOverrides: {
        root: ({ theme }) => ({
            border: '1px solid transparent',
            color: (theme.vars || theme).palette.text.primary,
            '&.Mui-selected': {
                color: (theme.vars || theme).palette.muted.contrastText,
                backgroundColor: (theme.vars || theme).palette.muted.main,
            },
            '&:hover': {
                color: (theme.vars || theme).palette.muted.contrastText,
                backgroundColor: (theme.vars || theme).palette.muted.main,
            },
            '&.Mui-disabled': {
                opacity: 0.5,
                border: '1px solid transparent',
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
