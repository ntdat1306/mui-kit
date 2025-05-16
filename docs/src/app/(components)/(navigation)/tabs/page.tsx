'use client';

import { PreviewCode } from '@/components/ui/PreviewCode';
import { Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';

const HeaderSection = () => {
    return (
        <>
            <Typography variant='h1'>Tabs</Typography>
            <Typography variant='p'>Tabs make it easy to explore and switch between different views.</Typography>
            <Typography variant='p'>
                Tabs organize and allow navigation between groups of content that are related and at the same level of
                hierarchy.
            </Typography>
        </>
    );
};

const IntroductionSection = () => {
    const [value, setValue] = useState<string>('one');

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const preview = (
        <Tabs value={value} onChange={handleChange} variant='scrollable' scrollButtons='auto'>
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
    );

    const code = `import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';


const Demo = () => {
    const [value, setValue] = useState<string>('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Tabs value={value} onChange={handleChange} variant='scrollable' scrollButtons='auto'>
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
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Introduction</Typography>
            <Typography variant='p'>Tabs are implemented using a collection of related components:</Typography>
            <Typography variant='list'>
                <li>
                    <Typography variant='code'>{'<Tab />'}</Typography> - the tab element itself. Clicking on a tab
                    displays its corresponding panel.
                </li>
                <li>
                    <Typography variant='code'>{'<Tabs />'}</Typography> - the container that houses the tabs.
                    Responsible for handling focus and keyboard navigation between tabs.
                </li>
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const VariantsSection = () => {
    const [value, setValue] = useState<string>('one');

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const preview = (
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
    );

    const code = `import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';


const Demo = () => {
    const [value, setValue] = useState<string>('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
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
    );
};

export default Demo;`;

    return (
        <>
            <Typography variant='h2'>Variants</Typography>
            <Typography variant='p'>
                Tabs support <Typography variant='code'>outline</Typography> variant.
            </Typography>
            <PreviewCode preview={preview} code={code} />
        </>
    );
};

const Page = () => {
    return (
        <>
            <HeaderSection />
            <IntroductionSection />
            <VariantsSection />
        </>
    );
};

export default Page;
