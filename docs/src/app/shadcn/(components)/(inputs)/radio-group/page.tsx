'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React from 'react';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Radio Group</Typography>
            <Typography variant='p'>
                The Radio Group allows the user to select one option from a set.The Radio Group allows the user to
                select one option from a set.
            </Typography>
            <Typography variant='p'>
                Use radio buttons when the user needs to see all available options. If available options can be
                collapsed, consider using a Select component because it uses less space.
            </Typography>
            <Typography variant='p'>
                Radio buttons should have the most commonly used option selected by default.
            </Typography>
        </>
    );
};

const BasicSection = () => {
    const preview = (
        <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup defaultValue='female'>
                <FormControlLabel value='female' control={<Radio />} label='Female' />
                <FormControlLabel value='male' control={<Radio />} label='Male' />
                <FormControlLabel value='other' control={<Radio />} label='Other' />
            </RadioGroup>
        </FormControl>
    );

    const code = `import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

const Demo = () => {
    return (
        <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup defaultValue='female'>
                <FormControlLabel value='female' control={<Radio />} label='Female' />
                <FormControlLabel value='male' control={<Radio />} label='Male' />
                <FormControlLabel value='other' control={<Radio />} label='Other' />
            </RadioGroup>
        </FormControl>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Radio group</Typography>
            <Typography variant='p'>
                <Typography variant='code'>RadioGroup</Typography> is a helpful wrapper used to group{' '}
                <Typography variant='code'>Radio</Typography> components that provides an easier API, and proper
                keyboard accessibility to the group.
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const DirectionSection = () => {
    const preview = (
        <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row>
                <FormControlLabel value='female' control={<Radio />} label='Female' />
                <FormControlLabel value='male' control={<Radio />} label='Male' />
                <FormControlLabel value='other' control={<Radio />} label='Other' />
                <FormControlLabel value='disabled' disabled control={<Radio />} label='other' />
            </RadioGroup>
        </FormControl>
    );

    const code = `import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

const Demo = () => {
    return (
        <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row>
                <FormControlLabel value='female' control={<Radio />} label='Female' />
                <FormControlLabel value='male' control={<Radio />} label='Male' />
                <FormControlLabel value='other' control={<Radio />} label='Other' />
                <FormControlLabel value='disabled' disabled control={<Radio />} label='other' />
            </RadioGroup>
        </FormControl>
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Direction</Typography>
            <Typography variant='p'>
                To lay out the buttons horizontally, set the <Typography variant='code'>row</Typography> prop:
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
            <DirectionSection />
        </>
    );
};

export default Page;
