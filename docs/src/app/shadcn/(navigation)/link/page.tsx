'use client';

import { Link } from '@mui/material';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Link href='#'>Link</Link>
            <Link href='#' color='inherit'>
                {'color="inherit"'}
            </Link>
            <Link href='#' variant='body2'>
                {'variant="body2"'}
            </Link>
        </div>
    );
};

export default Page;
