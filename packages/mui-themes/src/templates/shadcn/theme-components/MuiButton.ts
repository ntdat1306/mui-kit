import { MuiComponent } from '@/types';

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
                        boxShadow: (theme.vars || theme).customTokens.shadow.xs,
                        borderColor: (theme.vars || theme).palette.divider,
                    },
                },
            ],
        }),
    },
};

export default MuiButton;
