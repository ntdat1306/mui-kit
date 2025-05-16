'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { CircularProgress, LinearProgress, Stack, Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Progress</Typography>
            <Typography variant='p'>
                Progress indicators commonly known as spinners, express an unspecified wait time or display the length
                of a process.
            </Typography>
            <Typography variant='p'>
                Progress indicators inform users about the status of ongoing processes, such as loading an app,
                submitting a form, or saving updates.
            </Typography>
            <Typography variant='list'>
                <li>Determinate indicators display how long an operation will take.</li>
                <li>Indeterminate indicators visualize an unspecified wait time.</li>
            </Typography>
            <Typography variant='p'>
                The animations of the components rely on CSS as much as possible to work even before the JavaScript is
                loaded.
            </Typography>
        </>
    );
};

const CircularSection = () => {
    const preview = (
        <Stack spacing={2} sx={{ width: 256 }}>
            <CircularProgress />
            <CircularProgress variant='determinate' value={50} />
        </Stack>
    );

    const code = `import { CircularProgress, Stack } from '@mui/material';

const Demo = () => {
    return (
        <Stack spacing={2} sx={{ width: 256 }}>
            <CircularProgress />
            <CircularProgress variant='determinate' value={50} />
        </Stack>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Circular</Typography>
            <Typography variant='p'>
                A circular loading indicator, often used to show ongoing background tasks. It can be determinate (with a
                set value) or indeterminate (spinning continuously).
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const LinearSection = () => {
    const preview = (
        <Stack spacing={2} sx={{ width: 256 }}>
            <LinearProgress />
            <LinearProgress variant='determinate' value={50} />
        </Stack>
    );

    const code = `import { LinearProgress, Stack } from '@mui/material';

const Demo = () => {
    return (
        <Stack spacing={2} sx={{ width: 256 }}>
            <LinearProgress />
            <LinearProgress variant='determinate' value={50} />
        </Stack>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Linear</Typography>
            <Typography variant='p'>
                A horizontal bar loading indicator used to show task progress. Supports both determinate and
                indeterminate states for different use cases.
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <CircularSection />
            <LinearSection />
        </>
    );
};

export default Page;
