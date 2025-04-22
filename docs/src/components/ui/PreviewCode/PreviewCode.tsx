import { Box, Tab, Tabs } from '@mui/material';
import React, { JSX, useState } from 'react';
import { HighlightedCode } from '../HighlightedCode';

type Value = 'preview' | 'code';

type PreviewCodeProps = {
    preview: JSX.Element;
    code: string;
};

const PreviewCode = ({ preview, code }: PreviewCodeProps) => {
    const [value, setValue] = useState<Value>('preview');

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue as Value);
    };

    const type = {
        preview: (
            <Box
                sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2.5rem',
                    minHeight: '20rem',
                    borderRadius: (theme.vars || theme).shape.borderRadius,
                    border: `1px solid ${(theme.vars || theme).palette.divider}`,
                })}
            >
                {preview}
            </Box>
        ),
        code: <HighlightedCode code={code} />,
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange} type='outline' sx={{ marginBottom: '1.25rem' }}>
                <Tab value='preview' label='Preview' />
                <Tab value='code' label='Code' />
            </Tabs>

            {type[value]}
        </div>
    );
};

export default PreviewCode;
