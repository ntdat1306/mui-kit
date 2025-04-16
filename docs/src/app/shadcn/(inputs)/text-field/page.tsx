import { Stack, TextField } from '@mui/material';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Stack spacing={2}>
                <TextField id='outlined-basic' label='Outlined' variant='outlined' />
                <TextField id='filled-basic' label='Filled' variant='filled' />
                <TextField id='standard-basic' label='Standard' variant='standard' />
            </Stack>
        </div>
    );
};

export default Page;
