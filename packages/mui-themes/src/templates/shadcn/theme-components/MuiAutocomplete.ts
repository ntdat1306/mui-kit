import { MuiComponent } from '@/types';

const MuiAutocomplete: MuiComponent<'MuiAutocomplete'> = {
    styleOverrides: {
        paper: {
            padding: 4,
        },
        listbox: {
            padding: 0,
        },
        option: {
            '&.Mui-focused': {
                borderRadius: 4,
            },
        },
    },
};

export default MuiAutocomplete;
