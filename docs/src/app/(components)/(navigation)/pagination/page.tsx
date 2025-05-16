'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Pagination, Stack, Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Pagination</Typography>
            <Typography variant='p'>
                The Pagination component enables the user to select a specific page from a range of pages.
            </Typography>
        </>
    );
};

const BasicSection = () => {
    const preview = (
        <Stack spacing={2}>
            <Pagination count={10} />
            <Pagination count={10} color='primary' />
            <Pagination count={10} color='secondary' />
            <Pagination count={10} disabled />
        </Stack>
    );

    const code = `import { Pagination, Stack } from '@mui/material';

const Demo = () => {
    return (
        <Stack spacing={2}>
            <Pagination count={10} />
            <Pagination count={10} color='primary' />
            <Pagination count={10} color='secondary' />
            <Pagination count={10} disabled />
        </Stack>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Basic pagination</Typography>
            <Typography variant='p'>
                A clean, minimal pagination style with bordered page numbers and no background fill, ideal for light and
                modern interfaces.
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const TextSection = () => {
    const preview = (
        <Stack spacing={2}>
            <Pagination count={10} variant='text' />
            <Pagination count={10} variant='text' color='primary' />
            <Pagination count={10} variant='text' color='secondary' />
            <Pagination count={10} variant='text' disabled />
        </Stack>
    );

    const code = `import { Pagination, Stack } from '@mui/material';

const Demo = () => {
    return (
        <Stack spacing={2}>
            <Pagination count={10} variant='text' />
            <Pagination count={10} variant='text' color='primary' />
            <Pagination count={10} variant='text' color='secondary' />
            <Pagination count={10} variant='text' disabled />
        </Stack>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Contained pagination</Typography>
            <Typography variant='p'>
                A bold pagination style where the active page is fully filled, making it stand out clearly from the
                others.
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <BasicSection />
            <TextSection />
        </>
    );
};

export default Page;
