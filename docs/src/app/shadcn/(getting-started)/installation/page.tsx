'use client';

import { NextjsLogo, ReactLogo } from '@/components/icon';
import { HighlightedCode } from '@/components/ui/HighlightedCode';
import { HighlightedCommand } from '@/components/ui/HighlightedCommand';
import { Card, CardActionArea, CardContent, Grid, Link as MLink, Stack, Typography } from '@mui/material';
import Link from 'next/link';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Installation</Typography>
            <Typography variant='p'>Install Material UI, the world's most popular React UI framework.</Typography>
        </>
    );
};

const DefaultSection = () => {
    const peerCode = `"peerDependencies": {
    "react": "^17.0.0 || ^18.0.0 || ^19.0.0",
    "react-dom": "^17.0.0 || ^18.0.0 || ^19.0.0"
},`;

    return (
        <>
            <Typography variant='h2'>Default installation</Typography>
            <Typography variant='p'>Run one of the following commands to add Material UI to your project:</Typography>
            <HighlightedCommand packageName='@mui/material @emotion/react @emotion/styled' />

            <Typography variant='h3'>Peer dependencies</Typography>
            <Typography variant='p'>
                Please note that{' '}
                <MLink href='https://www.npmjs.com/package/react' target='_blank'>
                    react
                </MLink>{' '}
                and{' '}
                <MLink href='https://www.npmjs.com/package/react-dom' target='_blank'>
                    react-dom
                </MLink>{' '}
                are peer dependencies, meaning you should ensure they are installed before installing Material UI.
            </Typography>
            <HighlightedCode code={peerCode} />
        </>
    );
};

const ThemeSection = () => {
    return (
        <>
            <Typography variant='h2'>Theme installation</Typography>
            <Typography variant='p'>Install theme package in your project.</Typography>
            <HighlightedCommand packageName='@datstack/mui-themes' />
        </>
    );
};

const NextSection = () => {
    const frameworks = [
        {
            label: 'React',
            logo: <ReactLogo fontSize={40} />,
            slug: '/shadcn/usage-with-react',
        },
        {
            label: 'Next.js',
            logo: <NextjsLogo fontSize={40} />,
            slug: '/shadcn/usage-with-nextjs',
        },
    ];

    const items = frameworks.map((framework, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6 }} component={Link} href={framework.slug}>
            <Card>
                <CardActionArea>
                    <CardContent sx={{ padding: '2.5rem' }}>
                        <Stack alignItems='center' spacing={1}>
                            {framework.logo}
                            <div>{framework.label}</div>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    ));

    return (
        <>
            <Typography variant='h2'>Next step</Typography>
            <Typography variant='p'>
                Learn how to get started and make the most out of <Typography variant='code'>mui-themes</Typography>.
                Follow these simple steps to begin your journey.
            </Typography>
            <Grid container spacing={2}>
                {items}
            </Grid>
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <DefaultSection />
            <ThemeSection />
            <NextSection />
        </>
    );
};

export default Page;
