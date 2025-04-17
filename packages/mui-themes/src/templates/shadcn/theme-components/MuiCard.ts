import { MuiComponent } from '@/types';

const MuiCard: MuiComponent<'MuiCard'> = {
    defaultProps: {
        variant: 'outlined',
    },
    styleOverrides: {
        root: ({ theme }) => ({
            variants: [
                {
                    props: { variant: 'outlined' },
                    style: {
                        boxShadow: (theme.vars || theme).customTokens.shadow.sm,
                    },
                },
            ],
        }),
    },
};

export default MuiCard;
