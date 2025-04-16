import { Mail } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Badge badgeContent={4} color='primary'>
                <Mail color='action' />
            </Badge>
        </div>
    );
};

export default Page;
