import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { Fragment } from 'react';

const bull = (
    <Box component='span' sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        •
    </Box>
);

const card = (
    <Fragment>
        <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Word of the Day
            </Typography>
            <Typography variant='h5' component='div'>
                be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
            <Typography variant='body2'>
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>Learn More</Button>
        </CardActions>
    </Fragment>
);

const Page = () => {
    return (
        <div>
            <Box sx={{ minWidth: 275 }}>
                <Card variant='outlined'>{card}</Card>
            </Box>
        </div>
    );
};

export default Page;
