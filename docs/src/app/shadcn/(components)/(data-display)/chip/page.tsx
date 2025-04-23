'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Chip, Stack, Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Avatar</Typography>
            <Typography variant='p'>
                Avatars are found throughout material design with uses in everything from tables to dialog menus.
            </Typography>
        </>
    );
};

const BasicSection = () => {
    const code = `import { Chip, Stack } from '@mui/material';

const Demo = () => {
    return (
        <Stack direction='row' spacing={1}>
            <Chip label='Chip Filled' />
            <Chip label='Chip Outlined' variant='outlined' />
        </Stack>
    );
};

export default Demo;`;

    const preview = (
        <Stack direction='row' spacing={1}>
            <Chip label='Chip Filled' />
            <Chip label='Chip Outlined' variant='outlined' />
        </Stack>
    );

    return (
        <>
            <Typography variant='h2'>Basic chip</Typography>
            <Typography variant='p'>
                The <Typography variant='code'>Chip</Typography> component supports outlined and filled styling.
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
        </>
    );
};

export default Page;
