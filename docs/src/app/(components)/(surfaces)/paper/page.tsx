'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Alert, Box, Paper, Typography } from '@mui/material';
import React from 'react';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Paper</Typography>
            <Typography variant='p'>
                The Paper component is a container for displaying content on an elevated surface.
            </Typography>
        </>
    );
};

const IntroductionSection = () => {
    const preview = (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                },
            }}
        >
            <Paper elevation={0} />
            <Paper />
            <Paper elevation={3} />
        </Box>
    );

    const code = `import { Box, Paper } from '@mui/material';

const Demo = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                },
            }}
        >
            <Paper elevation={0} />
            <Paper />
            <Paper elevation={3} />
        </Box>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Introduction</Typography>
            <Typography variant='p'>
                In Material Design, surface components and shadow styles are heavily influenced by their real-world
                physical counterparts.
            </Typography>
            <Typography variant='p'>
                Material UI implements this concept with the Paper component, a container-like surface that features the
                elevation prop for pulling box-shadow values from the theme.
            </Typography>
            <PreviewCode preview={preview} code={code} />
            <Typography variant='p'>
                Use the <Typography variant='code'>elevation</Typography> prop to establish hierarchy through the use of
                shadows. The Paper component's default elevation level is <Typography variant='code'>1</Typography>. The
                prop accepts values from <Typography variant='code'>0</Typography> to{' '}
                <Typography variant='code'>24</Typography>.
            </Typography>
            <Alert color='success'>
                Because base on Shadcn, all elevation other than 0 will have the same elevation.
            </Alert>
            <Typography variant='p'>
                In dark mode, increasing the elevation also makes the background color lighter. This is done by applying
                a semi-transparent gradient with the <Typography variant='code'>background-image</Typography> CSS
                property.
            </Typography>
        </>
    );
};

const VariantsSection = () => {
    const preview = (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                },
            }}
        >
            <Paper variant='elevation'>default variant</Paper>
            <Paper variant='outlined'>outlined variant</Paper>
        </Box>
    );

    const code = `import { Box, Paper } from '@mui/material';

const Demo = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                },
            }}
        >
            <Paper variant='elevation'>default variant</Paper>
            <Paper variant='outlined'>outlined variant</Paper>
        </Box>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Variants</Typography>
            <Typography variant='p'>
                Set the <Typography variant='code'>variant</Typography> prop to{' '}
                <Typography variant='code'>"outlined"</Typography> for a flat, outlined Paper with no shadows:
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <IntroductionSection />
            <VariantsSection />
        </>
    );
};

export default Page;
