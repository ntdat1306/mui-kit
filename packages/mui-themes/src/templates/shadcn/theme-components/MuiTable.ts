import { MuiComponent } from '@/types';

const MuiTable: MuiComponent<'MuiTable'> = {
    styleOverrides: {
        root: ({ theme }) => ({
            '& thead': {
                '& tr': {
                    '& th, td': {
                        fontWeight: 500,
                        color: (theme.vars || theme).palette.text.secondary,
                        borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
                    },
                },
            },
            '& tbody': {
                // If have tfoot after tbody
                '&:has(+ tfoot) tr': {
                    '& th, td': {
                        borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
                    },
                },
                // If don't have tfoot after tbody
                '&:not(:has(+ tfoot)) tr': {
                    '& th, td': {
                        borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
                    },
                    '&:last-child td, &:last-child th': { border: 0 },
                },
            },
            '& tfoot': {
                '& tr': {
                    '& th, td': {
                        fontWeight: 500,

                        borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
                        background: (theme.vars || theme).palette.secondary.main,
                        fontSize: theme.typography.fontSize,
                        color: (theme.vars || theme).palette.text.primary,
                    },
                    '&:last-child td, &:last-child th': { border: 0 },
                },
            },
        }),
    },
};

export default MuiTable;
