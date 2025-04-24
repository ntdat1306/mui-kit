'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Box, Button, Drawer, Typography } from '@mui/material';
import React, { useState } from 'react';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Drawer</Typography>
            <Typography variant='p'>
                The navigation drawers (or "sidebars") provide ergonomic access to destinations in a site or app
                functionality such as switching accounts.
            </Typography>
            <Typography variant='p'>
                A navigation drawer can either be permanently on-screen or controlled by a navigation menu icon.
            </Typography>
            <Typography variant='p'>
                Side sheets are supplementary surfaces primarily used on tablet and desktop.
            </Typography>
        </>
    );
};

const TemporarySection = () => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const preview = (
        <div>
            <Button onClick={toggleDrawer(true)}>Open drawer</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 300 }} role='presentation' onClick={toggleDrawer(false)}>
                    Drawer
                </Box>
            </Drawer>
        </div>
    );

    const code = `import { Box, Button, Drawer } from '@mui/material';
import { useState } from 'react';

const Demo = () => {
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

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Temporary drawer</Typography>
            <Typography variant='p'>
                Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily
                above all other content until a section is selected.
            </Typography>
            <Typography variant='p'>
                The Drawer can be cancelled by clicking the overlay or pressing the Esc key. It closes when an item is
                selected, handled by controlling the <Typography variant='code'>open</Typography> prop.
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <TemporarySection />
        </>
    );
};

export default Page;
