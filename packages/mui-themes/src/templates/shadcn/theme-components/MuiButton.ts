import { MuiComponent } from '@/types/theme';

const MuiButton: MuiComponent<'MuiButton'> = {
    styleOverrides: {
        root: ({ theme }) => ({
            variants: [
                {
                    style: {
                        textTransform: 'none',
                    },
                },
                {
                    props: { variant: 'contained' },
                    style: {
                        boxShadow: (theme.vars || theme).customTokens.shadow.sm,
                    },
                },
                {
                    props: { variant: 'outlined' },
                    style: {
                        borderColor: (theme.vars || theme).palette.divider,
                        boxShadow: (theme.vars || theme).customTokens.shadow.xs,
                    },
                },
            ],
        }),
    },
};

export default MuiButton;
