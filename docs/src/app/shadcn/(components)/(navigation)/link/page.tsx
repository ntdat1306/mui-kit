'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Link, Stack, Typography } from '@mui/material';
import React from 'react';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Links</Typography>
            <Typography variant='p'>
                The Link component allows you to easily customize anchor elements with your theme colors and typography
                styles.
            </Typography>
        </>
    );
};

const BasicSection = () => {
    const preview = (
        <Stack direction='row' spacing={2}>
            <Link href='#'>Link</Link>
            <Link href='#' color='inherit'>
                {'color="inherit"'}
            </Link>
            <Link href='#' variant='body2'>
                {'variant="body2"'}
            </Link>
        </Stack>
    );

    const code = `import { Link, Stack } from '@mui/material';

const Demo = () => {
    return (
        <Stack direction='row' spacing={2}>
            <Link href='#'>Link</Link>
            <Link href='#' color='inherit'>
                {'color="inherit"'}
            </Link>
            <Link href='#' variant='body2'>
                {'variant="body2"'}
            </Link>
        </Stack>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Basic links</Typography>
            <Typography variant='p'>
                The Link component is built on top of the Typography component, meaning that you can use its props.
            </Typography>
            <PreviewCode preview={preview} code={code} />
            <Typography variant='p'>
                However, the Link component has some different default props than the Typography component:
            </Typography>
            <Typography variant='list'>
                <li>
                    <Typography variant='code'>color="primary"</Typography> as the link needs to stand out.
                </li>
                <li>
                    <Typography variant='code'>variant="inherit"</Typography> as the link will, most of the time, be
                    used as a child of a Typography component.
                </li>
            </Typography>
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
