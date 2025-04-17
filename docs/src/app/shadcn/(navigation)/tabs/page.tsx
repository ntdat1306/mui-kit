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
            <Tabs value={value} onChange={handleChange}>
                <Tab value='one' label='Item One' />
                <Tab value='two' label='Item Two' />
                <Tab value='three' label='Item Three' />
            </Tabs>
        </div>
    );
};

export default Page;
