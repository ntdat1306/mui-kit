'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Mail } from '@mui/icons-material';
import { Badge, Stack, Typography } from '@mui/material';
import React from 'react';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Badge</Typography>
            <Typography variant='p'>Badge generates a small badge to the top-right of its child(ren).</Typography>
        </>
    );
};

const BasicSection = () => {
    const preview = (
        <Badge badgeContent={4} color='primary'>
            <Mail color='action' />
        </Badge>
    );

    const code = `import { Mail } from '@mui/icons-material';
import { Badge } from '@mui/material';

const Demo = () => {
    return (
        <Badge badgeContent={4} color='primary'>
            <Mail color='action' />
        </Badge>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Basic badge</Typography>
            <Typography variant='p'>
                Examples of badges containing text, using primary and secondary colors. The badge is applied to its
                children.
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const ColorSection = () => {
    const preview = (
        <Stack spacing={2} direction='row'>
            <Badge badgeContent={4} color='secondary'>
                <Mail color='action' />
            </Badge>
            <Badge badgeContent={4} color='success'>
                <Mail color='action' />
            </Badge>
        </Stack>
    );

    const code = `import { Mail } from '@mui/icons-material';
import { Badge, Stack } from '@mui/material';

const Demo = () => {
    return (
        <Stack spacing={2} direction='row'>
            <Badge badgeContent={4} color='secondary'>
                <Mail color='action' />
            </Badge>
            <Badge badgeContent={4} color='success'>
                <Mail color='action' />
            </Badge>
        </Stack>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Color</Typography>
            <Typography variant='p'>
                Use <Typography variant='code'>color</Typography> prop to apply theme palette to component.
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
            <ColorSection />
        </>
    );
};

export default Page;
