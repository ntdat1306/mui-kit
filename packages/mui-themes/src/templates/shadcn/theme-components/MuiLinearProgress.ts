import { MuiComponent } from '@/types/theme';

const MuiLinearProgress: MuiComponent<'MuiLinearProgress'> = {
    styleOverrides: {
        root: ({ theme }) => ({
            height: 8,
            borderRadius: (theme.vars || theme).shape.borderRadius,
            backgroundColor: `rgba(${(theme.vars || theme).palette.primary.mainChannel} / 0.2)`,
        }),
    },
};

export default MuiLinearProgress;
