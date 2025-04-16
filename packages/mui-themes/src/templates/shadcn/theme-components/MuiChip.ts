import { MuiComponent } from '@/types';

const MuiChip: MuiComponent<'MuiChip'> = {
    styleOverrides: {
        root: ({ theme }) => ({
            variants: [
                {
                    props: { variant: 'filled' },
                    style: {
                        boxShadow: (theme.vars || theme).customTokens.shadow.card,
                    },
                },
                {
                    props: { variant: 'outlined' },
                    style: {
                        borderColor: (theme.vars || theme).palette.divider,
                        boxShadow: (theme.vars || theme).customTokens.shadow.input,
                    },
                },
            ],
        }),
    },
};

export default MuiChip;
