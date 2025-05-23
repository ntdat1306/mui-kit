import { MuiComponent } from '@/types/theme';

const MuiAppBar: MuiComponent<'MuiAppBar'> = {
    styleOverrides: {
        root: ({ theme }) => ({
            boxShadow: 'none',
            backdropFilter: 'blur(8px)',
            color: (theme.vars || theme).palette.text.primary,
            backgroundColor: `rgba(${(theme.vars || theme).palette.background.defaultChannel} / 0.6)`,
            borderBottom: `1px dashed rgba(${(theme.vars || theme).palette.dividerChannel} / 0.5)`,
            ...theme.applyStyles('dark', {
                backgroundColor: `rgba(${(theme.vars || theme).palette.background.defaultChannel} / 0.6)`,
            }),
        }),
    },
};

export default MuiAppBar;
