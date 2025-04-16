import { MuiComponent } from '@/types';

const MuiPopper: MuiComponent<'MuiPopper'> = {
    styleOverrides: {
        root: ({ theme }) => ({
            margin: '0.25rem 0 !important',
            boxShadow: (theme.vars || theme).customTokens.shadow.popover,
            borderRadius: (theme.vars || theme).shape.borderRadius,
            border: `1px solid ${(theme.vars || theme).palette.divider}`,
        }),
    },
};

export default MuiPopper;
