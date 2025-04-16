'use client';

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';

const Page = () => {
    const [age, setAge] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <div>
            <FormControl fullWidth size='small'>
                <InputLabel id='demo-simple-select-label'>Age</InputLabel>
                <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    label='Age'
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth variant='filled'>
                <InputLabel id='demo-simple-select-standard-label'>Age</InputLabel>
                <Select
                    labelId='demo-simple-select-standard-label'
                    id='demo-simple-select-standard'
                    value={age}
                    onChange={handleChange}
                    label='Age'
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth variant='standard'>
                <InputLabel id='demo-simple-select-filled-label'>Age</InputLabel>
                <Select
                    labelId='demo-simple-select-filled-label'
                    id='demo-simple-select-filled'
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default Page;
