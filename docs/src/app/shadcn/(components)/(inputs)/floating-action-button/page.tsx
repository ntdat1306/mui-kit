'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Fab, Stack, Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Floating Action Button</Typography>
            <Typography variant='p'>
                A Floating Action Button (FAB) performs the primary, or most common, action on a screen.
            </Typography>
            <Typography variant='p'>
                A floating action button appears in front of all screen content, typically as a circular shape with an
                icon in its center. FABs come in two types: regular, and extended.
            </Typography>
            <Typography variant='p'>
                Only use a FAB if it is the most suitable way to present a screen's primary action. Only one component
                is recommended per screen to represent the most common action.
            </Typography>
        </>
    );
};

const BasicSection = () => {
    const preview = (
        <Stack direction='row' spacing={2}>
            <Fab color='primary' aria-label='add'>
                <AddIcon />
            </Fab>
            <Fab color='secondary' aria-label='edit'>
                <EditIcon />
            </Fab>
            <Fab disabled aria-label='like'>
                <FavoriteIcon />
            </Fab>
        </Stack>
    );

    const code = `import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Fab, Stack } from '@mui/material';

const Demo = () => {
    return (
        <Stack direction='row' spacing={2}>
            <Fab color='primary' aria-label='add'>
                <AddIcon />
            </Fab>
            <Fab color='secondary' aria-label='edit'>
                <EditIcon />
            </Fab>
            <Fab disabled aria-label='like'>
                <FavoriteIcon />
            </Fab>
        </Stack>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Basic FAB</Typography>
            <Typography variant='p'>Some FAB with different color.</Typography>
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
