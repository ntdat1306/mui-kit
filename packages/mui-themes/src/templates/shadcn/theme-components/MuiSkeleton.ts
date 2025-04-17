import { MuiComponent } from '@/types';

const MuiSkeleton: MuiComponent<'MuiSkeleton'> = {
    styleOverrides: {
        root: ({ theme }) => ({
            backgroundColor: `rgba(${(theme.vars || theme).palette.primary.mainChannel} / 0.1)`,
        }),
    },
};

export default MuiSkeleton;
