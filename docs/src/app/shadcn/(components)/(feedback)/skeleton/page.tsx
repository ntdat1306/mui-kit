'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Skeleton, Stack, Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Skeleton</Typography>
            <Typography variant='p'>
                Display a placeholder preview of your content before the data gets loaded to reduce load-time
                frustration.
            </Typography>
            <Typography variant='p'>
                The data for your components might not be immediately available. You can improve the perceived
                responsiveness of the page by using skeletons. It feels like things are happening immediately, then the
                information is incrementally displayed on the screen.
            </Typography>
        </>
    );
};

const VariantsSection = () => {
    const preview = (
        <Stack spacing={2}>
            <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
            <Skeleton variant='circular' width={40} height={40} />
            <Skeleton variant='rectangular' width={210} height={60} />
            <Skeleton variant='rounded' width={210} height={60} />
        </Stack>
    );

    const code = `import { Skeleton, Stack } from '@mui/material';

const Demo = () => {
    return (
        <Stack spacing={2}>
            <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
            <Skeleton variant='circular' width={40} height={40} />
            <Skeleton variant='rectangular' width={210} height={60} />
            <Skeleton variant='rounded' width={210} height={60} />
        </Stack>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Variants</Typography>
            <Typography variant='p'>The component supports 4 shape variants:</Typography>
            <Typography variant='list'>
                <li>
                    <Typography variant='code'>text</Typography> (default): represents a single line of text (you can
                    adjust the height via font size).
                </li>
                <li>
                    <Typography variant='code'>circular</Typography>,{' '}
                    <Typography variant='code'>rectangular</Typography>, and
                    <Typography variant='code'>rounded</Typography>: come with different border radius to let you take
                    control of the size.
                </li>
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <VariantsSection />
        </>
    );
};

export default Page;
