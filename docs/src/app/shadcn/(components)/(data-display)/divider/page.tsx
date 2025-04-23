'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Divider, List, ListItem, ListItemText, Typography } from '@mui/material';

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

const BasicSection = () => {
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
            <BasicSection />
        </>
    );
};

export default Page;
