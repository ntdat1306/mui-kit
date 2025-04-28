import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { HighlightedCode } from '../HighlightedCode';

type Value = 'npm' | 'pnpm' | 'yarn';

type HighlightedCommandProps = {
    packageName: string;
};

const installCommand = {
    npm: 'npm install',
    pnpm: 'pnpm add',
    yarn: 'yarn add',
};

const HighlightedCommand = ({ packageName }: HighlightedCommandProps) => {
    const [value, setValue] = useState<Value>('npm');

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue as Value);
    };

    return (
        <>
            <Tabs value={value} onChange={handleChange} type='outline' sx={{ marginBottom: '1.25rem' }}>
                <Tab value='npm' label='npm' />
                <Tab value='pnpm' label='pnpm' />
                <Tab value='yarn' label='yarn' />
            </Tabs>

            <HighlightedCode code={`${installCommand[value]} ${packageName}`} />
        </>
    );
};

export default HighlightedCommand;
