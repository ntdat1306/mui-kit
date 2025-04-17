import { MuiComponent } from '@/types';
import { paginationItemClasses } from '@mui/material';

const MuiPagination: MuiComponent<'MuiPagination'> = {
    defaultProps: {
        shape: 'rounded',
    },
    styleOverrides: {
        root: ({ theme }) => ({
            [`& .Mui-selected.${paginationItemClasses.root}`]: {
                boxShadow: (theme.vars || theme).customTokens.shadow.xs,
                border: `1px solid ${(theme.vars || theme).palette.divider}`,
                backgroundColor: (theme.vars || theme).palette.background.default,
            },
        }),
    },
};

export default MuiPagination;
