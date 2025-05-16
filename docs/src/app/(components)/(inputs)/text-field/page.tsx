'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Stack, TextField, Typography } from '@mui/material';
import React from 'react';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Text Field</Typography>
            <Typography variant='p'>Text Fields let users enter and edit text.</Typography>
            <Typography variant='p'>
                Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.
            </Typography>
        </>
    );
};

const BasicSection = () => {
    const preview = (
        <Stack spacing={2}>
            <TextField label='Outlined' variant='outlined' />
            <TextField label='Filled' variant='filled' />
            <TextField label='Standard' variant='standard' />
        </Stack>
    );

    const code = `import { Stack, TextField } from '@mui/material';

const Demo = () => {
    return (
        <Stack spacing={2}>
            <TextField label='Outlined' variant='outlined' />
            <TextField label='Filled' variant='filled' />
            <TextField label='Standard' variant='standard' />
        </Stack>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Basic TextField</Typography>
            <Typography variant='p'>
                The <Typography variant='code'>TextField</Typography> wrapper component is a complete form control
                including a label, input, and help text. It comes with three variants: outlined (default), filled, and
                standard.
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
