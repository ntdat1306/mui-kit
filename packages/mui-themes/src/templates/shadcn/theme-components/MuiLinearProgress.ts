import { MuiComponent } from '@/types';

const MuiLinearProgress: MuiComponent<'MuiLinearProgress'> = {
    styleOverrides: {
        root: ({ theme }) => ({
            height: 8,
            borderRadius: (theme.vars || theme).shape.borderRadius,
            background: `rgba(${(theme.vars || theme).palette.primary.mainChannel} / 0.2)`,
        }),
    },
};

export default MuiLinearProgress;
