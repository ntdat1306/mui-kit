'use client';

import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';

const Page = () => {
    const [value, setValue] = useState<string>('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange} variant='scrollable' scrollButtons='auto' type='outline'>
                <Tab value='one' label='Item One' />
                <Tab value='two' label='Item Two' />
                <Tab value='three' label='Item Three' />
                <Tab value='four' label='Item Four' />
                <Tab value='five' label='Item Five' />
                <Tab value='six' label='Item Six' />
                <Tab value='seven' label='Item Seven' />
                <Tab value='eight' label='Item Eight' />
                <Tab value='nine' label='Item Nine' />
                <Tab value='ten' label='Item Ten' />
                <Tab value='eleven' label='Item Eleven' />
                <Tab value='twelve' label='Item Twelve' />
                <Tab value='thirteen' label='Item Thirteen' />
                <Tab value='fourteen' label='Item Fourteen' />
                <Tab value='fifteen' label='Item Fifteen' />
                <Tab value='sixteen' label='Item Sixteen' />
                <Tab value='seventeen' label='Item Seventeen' />
                <Tab value='eighteen' label='Item Eighteen' />
                <Tab value='nineteen' label='Item Nineteen' />
                <Tab value='twenty' label='Item Twenty' />
            </Tabs>
        </div>
    );
};

export default Page;
