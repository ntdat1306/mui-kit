import { Box, Paper } from '@mui/material';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}
            >
                <Paper />
            </Box>
        </div>
    );
};

export default Page;
