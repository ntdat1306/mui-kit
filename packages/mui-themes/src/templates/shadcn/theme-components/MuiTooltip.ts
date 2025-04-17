import { MuiComponent } from '@/types';
import { tooltipClasses } from '@mui/material';

const MuiTooltip: MuiComponent<'MuiTooltip'> = {
    styleOverrides: {
        tooltip: ({ theme }) => ({
            color: (theme.vars || theme).palette.primary.contrastText,
            backgroundColor: (theme.vars || theme).palette.primary.main,
        }),
        popper: {
            [`&.${tooltipClasses.popperInteractive} .${tooltipClasses.tooltip}`]: {
                [`&.${tooltipClasses.tooltipPlacementBottom}`]: {
                    marginTop: '0.5rem',
                },
                [`&.${tooltipClasses.tooltipPlacementTop}`]: {
                    marginBottom: '0.5rem',
                },
                [`&.${tooltipClasses.tooltipPlacementLeft}`]: {
                    marginRight: '0.5rem',
                },
                [`&.${tooltipClasses.tooltipPlacementRight}`]: {
                    marginLeft: '0.5rem',
                },
            },
        },
    },
};

export default MuiTooltip;
