import { MuiComponent } from '@/types';

const MuiBackdrop: MuiComponent<'MuiBackdrop'> = {
    styleOverrides: {
        root: ({ theme }) => ({
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: `calc(${(theme.vars || theme).zIndex.drawer} + 1)`,
        }),
    },
};

export default MuiBackdrop;
