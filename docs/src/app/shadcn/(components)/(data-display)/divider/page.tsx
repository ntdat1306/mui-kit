'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Box, Card, Chip, Divider, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Divider</Typography>
            <Typography variant='p'>
                The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual
                hierarchy.
            </Typography>
        </>
    );
};

const IntroductionSection = () => {
    const preview = (
        <Card variant='outlined' sx={{ maxWidth: 360 }}>
            <Box sx={{ p: 2 }}>
                <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography gutterBottom variant='h5' component='div'>
                        Toothbrush
                    </Typography>
                    <Typography gutterBottom variant='h6' component='div'>
                        $4.50
                    </Typography>
                </Stack>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                    Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant='body2'>
                    Select type
                </Typography>
                <Stack direction='row' spacing={1}>
                    <Chip color='primary' label='Soft' size='small' />
                    <Chip label='Medium' size='small' />
                    <Chip label='Hard' size='small' />
                </Stack>
            </Box>
        </Card>
    );

    const code = `import { Card, Box, Stack, Typography, Divider, Chip } from '@mui/material';

const Demo = () => {
    return (
        <Card variant='outlined' sx={{ maxWidth: 360 }}>
            <Box sx={{ p: 2 }}>
                <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography gutterBottom variant='h5' component='div'>
                        Toothbrush
                    </Typography>
                    <Typography gutterBottom variant='h6' component='div'>
                        $4.50
                    </Typography>
                </Stack>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                    Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant='body2'>
                    Select type
                </Typography>
                <Stack direction='row' spacing={1}>
                    <Chip color='primary' label='Soft' size='small' />
                    <Chip label='Medium' size='small' />
                    <Chip label='Hard' size='small' />
                </Stack>
            </Box>
        </Card>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Introduction</Typography>
            <Typography variant='p'>
                The Material UI Divider component renders as a dark gray{' '}
                <Typography variant='code'>{'<hr>'}</Typography> by default, and features several useful props for quick
                style adjustments.
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const BasicSection = () => {
    const preview = (
        <List
            sx={{
                py: 0,
                width: '100%',
                maxWidth: 360,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'background.paper',
            }}
        >
            <ListItem>
                <ListItemText primary='Full width variant below' />
            </ListItem>
            <Divider component='li' />
            <ListItem>
                <ListItemText primary='Inset variant below' />
            </ListItem>
            <Divider variant='inset' component='li' />
            <ListItem>
                <ListItemText primary='Middle variant below' />
            </ListItem>
            <Divider variant='middle' component='li' />
            <ListItem>
                <ListItemText primary='List item' />
            </ListItem>
        </List>
    );

    const code = `import { Divider, List, ListItem, ListItemText } from '@mui/material';

const Demo = () => {
    return (
        <List
            sx={{
                py: 0,
                width: '100%',
                maxWidth: 360,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'background.paper',
            }}
        >
            <ListItem>
                <ListItemText primary='Full width variant below' />
            </ListItem>
            <Divider component='li' />
            <ListItem>
                <ListItemText primary='Inset variant below' />
            </ListItem>
            <Divider variant='inset' component='li' />
            <ListItem>
                <ListItemText primary='Middle variant below' />
            </ListItem>
            <Divider variant='middle' component='li' />
            <ListItem>
                <ListItemText primary='List item' />
            </ListItem>
        </List>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Basics</Typography>
            <Typography variant='p'>
                The Divider component supports three variants: <Typography variant='code'>fullWidth</Typography>{' '}
                (default), <Typography variant='code'>inset</Typography>, and{' '}
                <Typography variant='code'>middle</Typography>.
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
            <BasicSection />
        </>
    );
};

export default Page;
