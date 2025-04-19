import { MuiComponent } from '@/types/theme';

const MuiChip: MuiComponent<'MuiChip'> = {
    styleOverrides: {
        root: ({ theme }) => ({
            variants: [
                {
                    props: { variant: 'filled' },
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

export default MuiChip;
