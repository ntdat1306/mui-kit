'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Breadcrumbs</Typography>
            <Typography variant='p'>
                A breadcrumbs is a list of links that help visualize a page's location within a site's hierarchical
                structure, it allows navigation up to any of the ancestors.
            </Typography>
        </>
    );
};

const BasicSection = () => {
    const preview = (
        <Breadcrumbs>
            <Link underline='hover' color='inherit' href='/'>
                MUI
            </Link>
            <Link underline='hover' color='inherit' href='/shadcn/breadcrumbs/'>
                Core
            </Link>
            <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
        </Breadcrumbs>
    );

    const code = `import { Breadcrumbs, Link, Typography } from '@mui/material';

const Demo = () => {
    return (
        <Breadcrumbs>
            <Link underline='hover' color='inherit' href='/'>
                MUI
            </Link>
            <Link underline='hover' color='inherit' href='/shadcn/breadcrumbs/'>
                Core
            </Link>
            <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
        </Breadcrumbs>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Basic breadcrumbs</Typography>
            <Typography variant='p'>
                Basic breadcrumbs in MUI display the current page’s location within a hierarchy, helping users navigate
                through website structures easily.
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
