'use client';

import useComputedColorScheme from '@/hooks/useComputedColorScheme';
import getMenuItems from '@/utils/getMenuItems';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

const Page = () => {
    const pathname = usePathname();
    const computedColorScheme = useComputedColorScheme();

    const [prefix] = pathname.split('/').filter((item) => Boolean(item));

    const menuItems = getMenuItems(prefix, computedColorScheme)
        .map((i) => i.items)
        .flat();

    const menu = menuItems.map((item, index) => (
        <Fragment key={index}>
            {item.image && (
                <Grid size={{ xs: 6, sm: 4, md: 3 }} component={Link} href={`${pathname}/${item.slug}`}>
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
            )}
        </Fragment>
    ));

    return (
        <div>
            <Grid container spacing={2}>
                {menu}
            </Grid>
        </div>
    );
};

export default Page;
