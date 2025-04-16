import { Slider } from '@mui/material';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Slider defaultValue={50} aria-label='Default' valueLabelDisplay='off' />
        </div>
    );
};

export default Page;
