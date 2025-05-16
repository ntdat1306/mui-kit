'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Backdrop, Button, CircularProgress, Typography } from '@mui/material';
import { useState } from 'react';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Backdrop</Typography>
            <Typography variant='p'>
                The Backdrop component narrows the user's focus to a particular element on the screen.
            </Typography>
        </>
    );
};

const ExampleSection = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const preview = (
        <div>
            <Button onClick={handleOpen}>Show backdrop</Button>
            <Backdrop open={open} onClick={handleClose}>
                <CircularProgress color='inherit' />
            </Backdrop>
        </div>
    );

    const code = `import { Backdrop, Button, CircularProgress } from '@mui/material';
import { useState } from 'react';

const Demo = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
    };
    
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Button onClick={handleOpen}>Show backdrop</Button>
            <Backdrop open={open} onClick={handleClose}>
                <CircularProgress color='inherit' />
            </Backdrop>
        </div>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Example</Typography>
            <Typography variant='p'>
                The demo below shows a basic Backdrop with a Circular Progress component in the foreground to indicate a
                loading state. After clicking Show Backdrop, you can click anywhere on the page to close it.
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <ExampleSection />
        </>
    );
};

export default Page;
