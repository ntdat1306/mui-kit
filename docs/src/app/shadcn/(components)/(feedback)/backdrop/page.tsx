'use client';

import { Backdrop, Button, CircularProgress } from '@mui/material';
import React, { useState } from 'react';

const Page = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Button onClick={handleOpen}>Show backdrop</Button>
            <Backdrop
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color='inherit' />
            </Backdrop>
        </div>
    );
};

export default Page;
