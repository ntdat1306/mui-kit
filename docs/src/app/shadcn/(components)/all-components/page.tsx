'use client';

import useComputedColorScheme from '@/hooks/useComputedColorScheme';
import getShadcnComponents from '@/utils/getShadcnComponents';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Fragment } from 'react';

const Page = () => {
    const pathname = usePathname();
    const computedColorScheme = useComputedColorScheme();

    const components = getShadcnComponents(computedColorScheme);

    const items = components.map((component) => (
        <Fragment key={component.key}>
            <Typography variant='h2' sx={{ marginBottom: '1.5rem' }}>
                {component.subheader}
            </Typography>

            <Grid container spacing={2}>
                {component.menu.map((item) => (
                    <Grid
                        key={`${component.key}-${item.key}`}
                        size={{ xs: 6, sm: 4, md: 3 }}
                        component={Link}
                        href={`${pathname}/${item.slug}`}
                    >
                        <Card sx={{ height: '100%' }}>
                            <CardActionArea>
                                <CardMedia
                                    sx={{ aspectRatio: '16 / 9', maxHeight: 124 }}
                                    image={item.image}
                                    title={item.label}
                                />
                                <CardContent>
                                    <Typography>{item.label}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Fragment>
    ));

    return (
        <>
            <Typography variant='h1'>Material UI components</Typography>
            <Typography variant='p'>
                Material UI aims to provide building blocks for developers to create great user interfaces using the
                Material Design guidelines as a reference, which we strive to follow where practical. The library
                doesn't necessarily implement the exact specs of every component or feature—where official guidelines
                are incomplete or contradictory, maintainers apply common sense along with the latest standards in web
                development.
            </Typography>
            {items}
        </>
    );
};

export default Page;
