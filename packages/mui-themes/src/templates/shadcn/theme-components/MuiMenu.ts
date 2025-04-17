import { MuiComponent } from '@/types';
import { backdropClasses } from '@mui/material';

const MuiMenu: MuiComponent<'MuiMenu'> = {
    styleOverrides: {
        root: {
            [`& .${backdropClasses.root}`]: {
                backgroundColor: 'transparent',
            },
        },
    },
};

export default MuiMenu;
