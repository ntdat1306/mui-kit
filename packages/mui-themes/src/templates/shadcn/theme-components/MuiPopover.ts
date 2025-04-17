import { MuiComponent } from '@/types';
import { listClasses, menuItemClasses } from '@mui/material';

const MuiPopover: MuiComponent<'MuiPopover'> = {
    styleOverrides: {
        paper: ({ theme }) => ({
            padding: '0.25rem',
            margin: '0.25rem',
            boxShadow: (theme.vars || theme).customTokens.shadow.md,
            border: `1px solid ${(theme.vars || theme).palette.divider}`,
            background: (theme.vars || theme).palette.background.default,
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
