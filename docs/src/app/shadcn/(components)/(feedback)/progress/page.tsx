'use client';

import { CircularProgress, LinearProgress } from '@mui/material';
import React from 'react';

const Page = () => {
    return (
        <div>
            <LinearProgress variant='determinate' value={50} />
        </div>
    );
};

export default Page;
