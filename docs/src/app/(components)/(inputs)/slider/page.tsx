'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Box, Slider, Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Slider</Typography>
            <Typography variant='p'>Sliders allow users to make selections from a range of values.</Typography>
        </>
    );
};

const ContinuousSection = () => {
    const preview = (
        <Box sx={{ width: 200 }}>
            <Slider defaultValue={50} valueLabelDisplay='off' />
            <Slider defaultValue={30} valueLabelDisplay='off' disabled />
        </Box>
    );

    const code = `import { Box, Slider } from '@mui/material';

const Demo = () => {
    return (
        <Box sx={{ width: 200 }}>
            <Slider defaultValue={50} valueLabelDisplay='off' />
            <Slider defaultValue={30} valueLabelDisplay='off' disabled />
        </Box>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Continuous sliders</Typography>
            <Typography variant='p'>
                Continuous sliders allow users to select a value along a subjective range.
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <ContinuousSection />
        </>
    );
};

export default Page;
