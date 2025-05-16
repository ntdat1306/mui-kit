'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>App Bar</Typography>
            <Typography variant='p'>
                The App Bar displays information and actions relating to the current screen.
            </Typography>
            <Typography variant='p'>
                The top App bar provides content and actions related to the current screen. It's used for branding,
                screen titles, navigation, and actions.
            </Typography>
            <Typography variant='p'>It can transform into a contextual action bar or be used as a navbar.</Typography>
        </>
    );
};

const BasicSection = () => {
    const preview = (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button color='inherit'>Login</Button>
            </Toolbar>
        </AppBar>
    );

    const code = `import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';

const Demo = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button color='inherit'>Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Basic App bar</Typography>
            <Typography variant='p'>
                A simple, responsive top navigation bar using MUI’s AppBar and Toolbar. Ideal for displaying your app’s
                title and key actions.
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
