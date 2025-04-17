'use client';

import { Alert } from '@mui/material';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Alert severity='success'>This is a success Alert.</Alert>
            <Alert severity='info'>This is an info Alert.</Alert>
            <Alert severity='warning'>This is a warning Alert.</Alert>
            <Alert severity='error'>This is an error Alert.</Alert>
        </div>
    );
};

export default Page;
