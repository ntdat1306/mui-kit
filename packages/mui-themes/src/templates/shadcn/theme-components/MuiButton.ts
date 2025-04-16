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
                        boxShadow: (theme.vars || theme).customTokens.shadow.card,
                    },
                },
                {
                    props: { variant: 'outlined' },
                    style: {
                        boxShadow: (theme.vars || theme).customTokens.shadow.input,
                        borderColor: (theme.vars || theme).palette.divider,
                    },
                },
            ],
        }),
    },
};

export default MuiButton;
