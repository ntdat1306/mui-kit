'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react';

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

const ImageSection = () => {
    const preview = (
        <Stack direction='row' spacing={2}>
            <Avatar alt='Remy Sharp' src='https://api.dicebear.com/9.x/miniavs/svg?seed=Mason' />
            <Avatar alt='Travis Howard' src='https://api.dicebear.com/9.x/miniavs/svg?seed=Sara' />
            <Avatar alt='Cindy Baker' src='https://api.dicebear.com/9.x/miniavs/svg?seed=Riley' />
        </Stack>
    );

    const code = `import { Avatar, Stack } from '@mui/material';

const Demo = () => {
    return (
        <Stack direction='row' spacing={2}>
            <Avatar alt='Remy Sharp' src='https://api.dicebear.com/9.x/miniavs/svg?seed=Mason' />
            <Avatar alt='Travis Howard' src='https://api.dicebear.com/9.x/miniavs/svg?seed=Sara' />
            <Avatar alt='Cindy Baker' src='https://api.dicebear.com/9.x/miniavs/svg?seed=Riley' />
        </Stack>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Image avatars</Typography>
            <Typography variant='p'>
                Image avatars can be created by passing standard <Typography variant='code'>img</Typography> props{' '}
                <Typography variant='code'>src</Typography> or <Typography variant='code'>srcSet</Typography> to the
                component.
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const LetterSection = () => {
    const preview = (
        <Stack direction='row' spacing={2}>
            <Avatar>H</Avatar>
            <Avatar>N</Avatar>
            <Avatar>OP</Avatar>
        </Stack>
    );

    const code = `import { Avatar, Stack } from '@mui/material';

const Demo = () => {
    return (
        <Stack direction='row' spacing={2}>
            <Avatar>H</Avatar>
            <Avatar>N</Avatar>
            <Avatar>OP</Avatar>
        </Stack>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Letter avatars</Typography>
            <Typography variant='p'>
                Avatars containing simple characters can be created by passing a string as{' '}
                <Typography variant='code'>children</Typography>.
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <ImageSection />
            <LetterSection />
        </>
    );
};

export default Page;
