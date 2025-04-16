import { MuiComponent } from '@/types';

const MuiSlider: MuiComponent<'MuiSlider'> = {
    styleOverrides: {
        track: {
            border: 'none',
        },
        thumb: ({ theme }) => ({
            height: 16,
            width: 16,
            backgroundColor: (theme.vars || theme).palette.background.default,
            border: '1px solid currentColor',
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'inherit',
            },
            '&::before': {
                display: 'none',
            },
            variants: [
                {
                    props: { size: 'small' },
                    style: {
                        height: 12,
                        width: 12,
                    },
                },
            ],
        }),
        valueLabel: ({ theme }) => ({
            lineHeight: 1.2,
            fontSize: 10,
            background: 'unset',
            padding: 0,
            width: 24,
            height: 24,
            borderRadius: '50% 50% 50% 0',
            backgroundColor: (theme.vars || theme).palette.primary.main,
            transformOrigin: 'bottom left',
            transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
            '&::before': { display: 'none' },
            '&.MuiSlider-valueLabelOpen': {
                transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
            },
            '& > *': {
                transform: 'rotate(45deg)',
            },
            variants: [
                {
                    props: { size: 'small' },
                    style: {
                        height: 20,
                        width: 20,
                        fontSize: 8,
                    },
                },
            ],
        }),
    },
};

export default MuiSlider;
