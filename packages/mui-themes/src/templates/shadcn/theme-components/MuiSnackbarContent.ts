import { MuiComponent } from '@/types';

const MuiSnackbarContent: MuiComponent<'MuiSnackbarContent'> = {
    styleOverrides: {
        root: ({ theme }) => ({
            color: (theme.vars || theme).palette.text.primary,
            boxShadow: (theme.vars || theme).customTokens.shadow.lg,
            border: `1px solid ${(theme.vars || theme).palette.divider}`,
            background: (theme.vars || theme).palette.background.default,
        }),
    },
};

export default MuiSnackbarContent;
