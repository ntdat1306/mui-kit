import { MuiComponent } from '@/types';
import { drawerClasses } from '@mui/material';

const MuiDrawer: MuiComponent<'MuiDrawer'> = {
    styleOverrides: {
        root: ({ theme }) => ({
            [`& .${drawerClasses.paper}`]: {
                backgroundColor: (theme.vars || theme).palette.background.default,
            },
            [`&.${drawerClasses.anchorTop} .${drawerClasses.paper}`]: {
                borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
            },
            [`&.${drawerClasses.anchorRight} .${drawerClasses.paper}`]: {
                borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`,
            },
            [`&.${drawerClasses.anchorBottom} .${drawerClasses.paper}`]: {
                borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
            },
            [`&.${drawerClasses.anchorLeft} .${drawerClasses.paper}`]: {
                borderRight: `1px solid ${(theme.vars || theme).palette.divider}`,
            },
        }),
    },
};

export default MuiDrawer;
