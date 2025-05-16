import { MuiComponent } from '@/types/theme';
import { speedDialIconClasses } from '@mui/material';

const MuiSpeedDial: MuiComponent<'MuiSpeedDial'> = {
    styleOverrides: {
        root: {
            [`& .${speedDialIconClasses.root}`]: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
    },
};

export default MuiSpeedDial;
