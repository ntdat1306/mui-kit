import { MuiComponent } from '@/types';

const MuiDialog: MuiComponent<'MuiDialog'> = {
    styleOverrides: {
        paper: ({ theme }) => ({
            backgroundImage: 'none',
            boxShadow: (theme.vars || theme).customTokens.shadow.lg,
            border: `1px solid ${(theme.vars || theme).palette.divider}`,
            backgroundColor: (theme.vars || theme).palette.background.default,
        }),
    },
};

export default MuiDialog;
