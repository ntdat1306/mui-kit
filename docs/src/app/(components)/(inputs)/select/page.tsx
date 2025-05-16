'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import { useState } from 'react';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Select</Typography>
            <Typography variant='p'>
                Select components are used for collecting user provided information from a list of options.
            </Typography>
        </>
    );
};

const BasicSection = () => {
    const [age, setAge] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const preview = (
        <Stack spacing={2}>
            <FormControl size='small' sx={{ width: 256 }}>
                <InputLabel>Age</InputLabel>
                <Select value={age} onChange={handleChange} label='Age'>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <FormControl size='small' variant='filled' sx={{ width: 256 }}>
                <InputLabel>Age</InputLabel>
                <Select value={age} onChange={handleChange} label='Age'>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <FormControl size='small' variant='standard' sx={{ width: 256 }}>
                <InputLabel>Age</InputLabel>
                <Select value={age} onChange={handleChange} label='Age'>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Stack>
    );

    const code = `import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material';
import { useState } from 'react';

const Demo = () => {
    const [age, setAge] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Stack spacing={2}>
            <FormControl size='small' sx={{ width: 256 }}>
                <InputLabel>Age</InputLabel>
                <Select value={age} onChange={handleChange} label='Age'>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <FormControl size='small' variant='filled' sx={{ width: 256 }}>
                <InputLabel>Age</InputLabel>
                <Select value={age} onChange={handleChange} label='Age'>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <FormControl size='small' variant='standard' sx={{ width: 256 }}>
                <InputLabel>Age</InputLabel>
                <Select value={age} onChange={handleChange} label='Age'>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Stack>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Basic select</Typography>
            <Typography variant='p'>
                Menus are positioned under their emitting elements, unless they are close to the bottom of the viewport.
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <BasicSection />
        </>
    );
};

export default Page;
