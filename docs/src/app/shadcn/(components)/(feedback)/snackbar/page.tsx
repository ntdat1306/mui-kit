'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton, Snackbar, SnackbarCloseReason, Typography } from '@mui/material';
import React, { useState } from 'react';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Snackbar</Typography>
            <Typography variant='p'>
                Snackbars (also known as toasts) are used for brief notifications of processes that have been or will be
                performed.
            </Typography>
        </>
    );
};

const IntroductionSection = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (_event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button variant='outlined' size='small'>
                UNDO
            </Button>
            <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
                <CloseIcon fontSize='small' />
            </IconButton>
        </React.Fragment>
    );

    const preview = (
        <div>
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message='Note archived'
                action={action}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            />
        </div>
    );

    const code = `import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton, Snackbar, SnackbarCloseReason } from '@mui/material';
import React, { useState } from 'react';

const Demo = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (_event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button variant='outlined' size='small'>
                UNDO
            </Button>
            <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
                <CloseIcon fontSize='small' />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div>
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message='Note archived'
                action={action}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            />
        </div>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Introduction</Typography>
            <Typography variant='p'>
                The Snackbar component appears temporarily and floats above the UI to provide users with (non-critical)
                updates on an app's processes. The demo below, inspired by Google Keep, shows a basic Snackbar with a
                text element and two actions:
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
        </>
    );
};

export default Page;
