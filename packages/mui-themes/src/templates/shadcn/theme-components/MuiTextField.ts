import { MuiComponent } from '@/types';
import { filledInputClasses, inputBaseClasses, inputClasses, outlinedInputClasses } from '@mui/material';

const MuiTextField: MuiComponent<'MuiTextField'> = {
    defaultProps: {
        size: 'small',
    },
    styleOverrides: {
        root: ({ theme }) => ({
            boxShadow: (theme.vars || theme).customTokens.shadow.input,
            variants: [
                {
                    props: { variant: 'outlined' },
                    style: {
                        [`& .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: (theme.vars || theme).palette.divider,
                        },
                        [`&:hover :not(.Mui-focused) .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: (theme.vars || theme).palette.divider,
                        },
                        [`& .Mui-disabled.${inputBaseClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
                            opacity: 0.5,
                            borderColor: (theme.vars || theme).palette.divider,
                        },
                    },
                },
                {
                    props: { variant: 'filled' },
                    style: {
                        [`& .${inputBaseClasses.root}.${filledInputClasses.root}`]: {
                            '&::before, &:hover::before': {
                                borderWidth: 1,
                                borderColor: (theme.vars || theme).palette.divider,
                            },
                        },
                    },
                },
                {
                    props: { variant: 'standard' },
                    style: {
                        [`& .${inputBaseClasses.root}.${inputClasses.root}`]: {
                            '&::before, &:hover::before': {
                                borderWidth: 1,
                                borderColor: (theme.vars || theme).palette.divider,
                            },
                        },
                    },
                },
            ],
        }),
    },
};

export default MuiTextField;
