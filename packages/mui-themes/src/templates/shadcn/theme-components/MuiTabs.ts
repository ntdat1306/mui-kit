import { MuiComponent } from '@/types/theme';
import { tabClasses, tabsClasses } from '@mui/material';

const MuiTabs: MuiComponent<'MuiTabs'> = {
    styleOverrides: {
        root: ({ theme }) => ({
            minHeight: 0,
            padding: '0.25rem',
            borderRadius: (theme.vars || theme).shape.borderRadius,
            backgroundColor: (theme.vars || theme).palette.secondary.main,
            [`& .${tabClasses.root}`]: {
                minHeight: 0,
                padding: '0.25rem 0.75rem',
                borderRadius: `calc(${(theme.vars || theme).shape.borderRadius} - 2px)`,
                textTransform: 'none',
                '&.Mui-selected': {
                    color: (theme.vars || theme).palette.primary.main,
                },
            },
        }),
        indicator: ({ theme }) => ({
            zIndex: -1,
            height: '100%',
            boxShadow: (theme.vars || theme).customTokens.shadow.sm,
            background: (theme.vars || theme).palette.background.default,
            borderRadius: `calc(${(theme.vars || theme).shape.borderRadius} - 2px)`,
        }),
        scroller: {
            zIndex: 1,
        },
    },
};

export default MuiTabs;
