import { MuiComponent } from '@/types/theme';
import { paginationItemClasses } from '@mui/material';

const MuiPagination: MuiComponent<'MuiPagination'> = {
    defaultProps: {
        shape: 'rounded',
        variant: 'outlined',
    },
    styleOverrides: {
        root: ({ theme }) => ({
            variants: [
                {
                    props: { variant: 'outlined' },
                    style: {
                        [`& .${paginationItemClasses.root}`]: {
                            border: 'none',
                            [`&.Mui-selected`]: {
                                boxShadow: (theme.vars || theme).customTokens.shadow.xs,
                                border: `1px solid ${(theme.vars || theme).palette.divider}`,
                                backgroundColor: (theme.vars || theme).palette.background.default,
                            },
                        },
                    },
                },
            ],
        }),
    },
};

export default MuiPagination;
