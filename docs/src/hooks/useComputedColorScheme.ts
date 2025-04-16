import { useColorScheme } from '@mui/material';

// useComputedColorScheme return 'light' | 'dark'
const useComputedColorScheme = () => {
    const { mode, systemMode } = useColorScheme();

    return mode === 'system' ? systemMode : mode;
};

export default useComputedColorScheme;
