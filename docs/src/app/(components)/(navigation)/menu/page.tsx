'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Menu</Typography>
            <Typography variant='p'>Menus display a list of choices on temporary surfaces.</Typography>
            <Typography variant='p'>
                A menu displays a list of choices on a temporary surface. It appears when the user interacts with a
                button, or other control.
            </Typography>
        </>
    );
};

const IntroductionSection = () => {
    return (
        <>
            <Typography variant='h2'>Introduction</Typography>
            <Typography variant='p'>Menus are implemented using a collection of related components:</Typography>
            <Typography variant='list'>
                <li>Menu: The container/surface of the menu.</li>
                <li>Menu Item: An option for users to select from the menu.</li>
                <li>
                    Menu List (optional): Alternative composable container for Menu Items—see Composition with Menu List
                    for details.
                </li>
            </Typography>
        </>
    );
};

const BasicSection = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const preview = (
        <div>
            <Button
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Dashboard
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );

    const code = `import { Button, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';

const Demo = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Dashboard
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Basic menu</Typography>
            <Typography variant='p'>
                A basic menu opens over the anchor element by default (this option can be changed via props). When close
                to a screen edge, a basic menu vertically realigns to make sure that all menu items are completely
                visible.
            </Typography>
            <Typography variant='p'>
                You should configure the component so that selecting an option immediately confirms it and closes the
                menu, as shown in the demo below.
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
