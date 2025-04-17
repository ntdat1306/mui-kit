import { Menu } from '@mui/icons-material';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Page = () => {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
                        <Menu />
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Page;
