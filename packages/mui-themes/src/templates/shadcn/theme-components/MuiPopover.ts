import { MuiComponent } from '@/types';
import { listClasses, menuItemClasses } from '@mui/material';

const MuiPopover: MuiComponent<'MuiPopover'> = {
    styleOverrides: {
        paper: ({ theme }) => ({
            padding: 4,
            margin: '0.25rem 0',
            boxShadow: (theme.vars || theme).customTokens.shadow.md,
            border: `1px solid ${(theme.vars || theme).palette.divider}`,
            [`& .${listClasses.root}`]: {
                padding: 0,
                [`.${menuItemClasses.root}`]: {
                    borderRadius: (theme.vars || theme).shape.borderRadius,
                },
            },
        }),
    },
};

export default MuiPopover;
