'use client';

import { ShadcnLogo } from '@/components/icon';
import { Box, Card, CardActionArea, CardContent, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
    return (
        <Box sx={{ padding: '2rem 0' }}>
            <Container>
                <Stack sx={{ textAlign: 'center', alignItems: 'center' }} spacing={4}>
                    <Typography variant='h1'>Welcome to MUI themes</Typography>
                    <Typography variant='h5'>
                        Beautiful, minimal UI components for Material UI — with just createTheme.
                    </Typography>
                    <Typography variant='body1'>Choose your template and let's get started!</Typography>

                    <Card variant='outlined' sx={{ borderRadius: '0.5rem' }}>
                        <CardActionArea component={Link} href='/shadcn'>
                            <CardContent sx={{ padding: '2.5rem' }}>
                                <Stack alignItems='center' spacing={1}>
                                    <ShadcnLogo fontSize={24} />
                                    <div>Shadcn</div>
                                </Stack>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Stack>
            </Container>
        </Box>
    );
}
