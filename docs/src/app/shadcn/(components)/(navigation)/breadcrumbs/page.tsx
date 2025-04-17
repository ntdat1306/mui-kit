import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Breadcrumbs aria-label='breadcrumb'>
                <Link underline='hover' color='inherit' href='/'>
                    MUI
                </Link>
                <Link underline='hover' color='inherit' href='/material-ui/getting-started/installation/'>
                    Core
                </Link>
                <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
            </Breadcrumbs>
        </div>
    );
};

export default Page;
