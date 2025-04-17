import { MuiComponent } from '@/types';

const MuiAutocomplete: MuiComponent<'MuiAutocomplete'> = {
    styleOverrides: {
        paper: {
            padding: 4,
        },
        listbox: {
            padding: 0,
        },
        option: {
            '&.Mui-focused': {
                borderRadius: 4,
            },
        },
        popper: ({ theme }) => ({
            margin: '0.25rem 0 !important',
            borderRadius: (theme.vars || theme).shape.borderRadius,
            boxShadow: (theme.vars || theme).customTokens.shadow.md,
            border: `1px solid ${(theme.vars || theme).palette.divider}`,
        }),
    },
};

export default MuiAutocomplete;
