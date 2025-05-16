import { MuiComponent } from '@/types/theme';
import { accordionSummaryClasses, typographyClasses } from '@mui/material';

const MuiAccordion: MuiComponent<'MuiAccordion'> = {
    defaultProps: {
        disableGutters: true,
        elevation: 0,
    },
    styleOverrides: {
        root: ({ theme }) => ({
            backgroundColor: (theme.vars || theme).palette.background.default,
            [`&.Mui-expanded, &:not(.Mui-expanded)`]: {
                borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
                '&:last-of-type': {
                    borderBottom: 0,
                },
            },
            [`&:not(.Mui-expanded)::before`]: {
                opacity: 0,
            },
            [`& .${accordionSummaryClasses.root} .${typographyClasses.root}`]: {
                fontWeight: 500,
            },
        }),
    },
};

export default MuiAccordion;
