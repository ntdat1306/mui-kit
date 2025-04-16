import { Close } from '@mui/icons-material';
import { Button, IconButton, Snackbar } from '@mui/material';
import React from 'react';

const action = (
    <React.Fragment>
        <Button variant='outlined' size='small'>
            UNDO
        </Button>
        <IconButton size='small' aria-label='close' color='inherit'>
            <Close fontSize='small' />
        </IconButton>
    </React.Fragment>
);

const Page = () => {
    return (
        <div>
            <Snackbar
                open={true}
                message='Note archived'
                action={action}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            />
        </div>
    );
};

export default Page;
