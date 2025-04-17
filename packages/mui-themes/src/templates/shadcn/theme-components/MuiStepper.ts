import { MuiComponent } from '@/types';
import { stepConnectorClasses, stepLabelClasses } from '@mui/material';

const MuiStepper: MuiComponent<'MuiStepper'> = {
    defaultProps: {
        alternativeLabel: true,
    },
    styleOverrides: {
        root: ({ theme }) => ({
            [`& .${stepConnectorClasses.line}`]: {
                borderTopWidth: 2,
                borderRadius: '9999px',
            },
            [`& .${stepConnectorClasses.active}`]: {
                [`& .${stepConnectorClasses.line}`]: {
                    borderColor: (theme.vars || theme).palette.primary.main,
                },
            },
            [`& .${stepConnectorClasses.completed}`]: {
                [`& .${stepConnectorClasses.line}`]: {
                    borderColor: (theme.vars || theme).palette.primary.main,
                },
            },
        }),
    },
};

export default MuiStepper;
