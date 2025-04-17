'use client';

import { Box, Button, Drawer } from '@mui/material';
import React, { useState } from 'react';

const Page = () => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>Open drawer</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 300 }} role='presentation' onClick={toggleDrawer(false)}>
                    Drawer
                </Box>
            </Drawer>
        </div>
    );
};

export default Page;
